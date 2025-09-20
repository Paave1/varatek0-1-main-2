"use client";

export default function JobsPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const position = String(data.get("position") || "");
    const message = String(data.get("message") || "");

    const subject = `Job Application – ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Position: ${position}`,
      "",
      message,
      "",
      "(Attachment, if any, needs to be added manually in your email client)",
    ];
    const mailto = `mailto:info@varatek.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

  return (
    <main>
      <section className="contact" id="jobs">
        <div className="container">
          <h2 className="en">Careers</h2>
          <h2 className="fi hidden">Työnhakijalle</h2>
          <p className="section-intro en">Fill in the form to apply. We will contact you soon.</p>
          <p className="section-intro fi hidden">Täytä lomake hakeaksesi. Otamme sinuun pian yhteyttä.</p>

          <div className="contact-content">
            <div className="contact-form">
              <form id="jobsForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="en">Full name</label>
                  <label htmlFor="name" className="fi hidden">Koko nimi</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="en">Email</label>
                  <label htmlFor="email" className="fi hidden">Sähköposti</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="en">Phone</label>
                  <label htmlFor="phone" className="fi hidden">Puhelin</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>

                <div className="form-group">
                  <label htmlFor="position" className="en">Position</label>
                  <label htmlFor="position" className="fi hidden">Tehtävä</label>
                  <select id="position" name="position" required>
                    <option value="Rakennustyöntekijä">Rakennustyöntekijä</option>
                    <option value="Hitsaaja">Hitsaaja</option>
                    <option value="Sähköasentaja">Sähköasentaja</option>
                    <option value="Timanttiporari">Timanttiporari</option>
                    <option value="Maanrakentaja">Maanrakentaja</option>
                    <option value="Muu">Muu</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cv" className="en">Attach CV (optional)</label>
                  <label htmlFor="cv" className="fi hidden">Liitä CV (valinnainen)</label>
                  <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="en">About you</label>
                  <label htmlFor="message" className="fi hidden">Kerro itsestäsi</label>
                  <textarea id="message" name="message" rows={5} required />
                </div>

                <button type="submit" className="submit-btn">
                  <span className="en">Send Application</span>
                  <span className="fi hidden">Lähetä hakemus</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


