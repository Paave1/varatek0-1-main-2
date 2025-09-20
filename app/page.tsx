export default function Page() {
  return (
    <main>
      <section id="home" className="hero">
        {/* Hero content */}
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="en">Building<br/>the future</h1>
            <h1 className="fi hidden">Rakennamme<br/>tulevaisuutta</h1>
            <p className="en">A modern construction company that combines traditional craftsmanship with the latest technology. We create durable and beautiful solutions that stand the test of time.</p>
            <p className="fi hidden">Moderni rakennusyhtiö, joka yhdistää perinteisen käsityötaidon ja uusimman teknologian. Luomme kestäviä ja kauniita ratkaisuja, jotka kestävät aikaa.</p>
            <div className="hero-buttons">
              <a href="#contact" className="cta-button primary-btn">
                <span className="en">Contact Us</span>
                <span className="fi hidden">Ota yhteyttä</span>
              </a>
              <a href="#projects" className="cta-button secondary-btn">
                <span className="en">View Projects</span>
                <span className="fi hidden">Katso projektit</span>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <svg className="big-house-logo" viewBox="0 0 161 160" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)" fill="white" stroke="none">
                <path d="M540 1244 l-245 -144 -107 0 -108 0 0 -81 0 -81 53 30 c28 16 73 41 100 56 l47 28 0 -381 c0 -374 0 -381 20 -381 20 0 20 7 20 394 l0 394 43 25 c23 13 132 76 241 140 l200 116 56 -32 c31 -18 129 -75 218 -127 l162 -95 -365 -3 -365 -2 0 -405 0 -405 95 0 95 0 0 163 c0 90 2 166 4 168 2 2 50 3 105 1 l101 -3 0 -165 0 -164 210 0 210 0 -2 328 c-3 283 -5 327 -18 327 -13 0 -15 -40 -17 -295 -2 -162 -3 -303 -3 -312 0 -16 -15 -18 -175 -18 l-175 0 0 170 0 170 -135 0 -135 0 0 -170 0 -170 -65 0 -65 0 0 375 0 375 381 0 380 0 110 -65 c61 -36 113 -65 115 -65 2 0 4 36 4 80 l0 80 -108 0 -108 0 -249 145 c-137 80 -256 145 -264 144 -9 0 -126 -65 -261 -145z m-310 -178 c0 -2 -27 -20 -60 -39 l-60 -36 0 39 0 40 60 0 c33 0 60 -2 60 -4z m1270 -36 l0 -39 -60 36 c-33 19 -60 37 -60 39 0 2 27 4 60 4 l60 0 0 -40z"/>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="en">About Varatek</h2>
          <h2 className="fi hidden">Tietoa Varatekista</h2>
          <div className="about-content">
            {/* Side images */}
            <div className="about-side about-left">
              <img src="/images/about-left.jpg" alt="About left" loading="lazy" decoding="async" />
            </div>
            <div className="about-text">
              <p className="en">Varatek Construction Company specializes in high-quality construction projects with a focus on precision, reliability, and customer satisfaction. With years of experience in the industry, we deliver exceptional results for residential and commercial projects.</p>
              <p className="fi hidden">Varatek-rakennusyhtiö on erikoistunut korkealaatuisiin rakennushankkeisiin, joissa keskitytään tarkkuuteen, luotettavuuteen ja asiakastyytyväisyyteen. Vuosien kokemuksella alalta tarjoamme poikkeuksellisia tuloksia sekä asuin- että liikerakennusprojekteissa.</p>
            </div>
            <div className="about-side about-right">
              <img src="/images/about-right.jpg" alt="About right" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="en">Our Services</h2>
          <h2 className="fi hidden">Palvelumme</h2>
          <p className="section-intro en">We offer comprehensive construction services with high quality.</p>
          <p className="section-intro fi hidden">Tarjoamme kattavan valikoiman rakennuspalveluita korkealla laadulla.</p>
          <div className="services-scroller">
            <button className="services-nav services-prev" type="button" aria-label="Previous services">
              <i className="fas fa-chevron-left" />
            </button>
            <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-home" /></div>
              <h3 className="en">New Construction</h3>
              <h3 className="fi hidden">Uudisrakentaminen</h3>
              <p className="en">We design and build according to the client's wishes.</p>
              <p className="fi hidden">Suunnittelemme ja rakennamme kodit asiakkaan toiveiden mukaan.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-tools" /></div>
              <h3 className="en">Renovation</h3>
              <h3 className="fi hidden">Saneeraus</h3>
              <p className="en">Basic repairs and modernization of old buildings.</p>
              <p className="fi hidden">Peruskorjaamme ja modernisoimme vanhoja rakennuksia.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-star" /></div>
              <h3 className="en">Interior Design</h3>
              <h3 className="fi hidden">Sisustus</h3>
              <p className="en">Quality interior solutions and space planning.</p>
              <p className="fi hidden">Laadukkaat sisustusratkaisut ja sisätilojen suunnittelu.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-wrench" /></div>
              <h3 className="en">Repair Services</h3>
              <h3 className="fi hidden">Korjaustyöt</h3>
              <p className="en">Fast and reliable repair services for all needs.</p>
              <p className="fi hidden">Nopeat ja luotettavat korjauspalvelut kaikenlaisiin tarpeisiin.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-bolt" /></div>
              <h3 className="en">Welding Services</h3>
              <h3 className="fi hidden">Hitsaustyöt</h3>
              <p className="en">Professional welding of metal structures, gates, railings and stairs.</p>
              <p className="fi hidden">Ammattitaitoinen metallirakenteiden, porttien, kaiteiden ja portaiden hitsaus.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-plug" /></div>
              <h3 className="en">Electrical Installations</h3>
              <h3 className="fi hidden">Sähköasennustyöt</h3>
              <p className="en">Professional electrical installations and wiring for homes and businesses.</p>
              <p className="fi hidden">Ammattitaitoiset sähköasennukset ja kaapeloinnit koteihin ja yrityksiin.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-gem" /></div>
              <h3 className="en">Diamond Cutting & Drilling</h3>
              <h3 className="fi hidden">Timanttityöt</h3>
              <p className="en">Precision diamond cutting and drilling for concrete and stone.</p>
              <p className="fi hidden">Tarkka timanttileikkaus ja -poraus betoniin ja kiveen.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-road" /></div>
              <h3 className="en">Earthworks</h3>
              <h3 className="fi hidden">Maanrakennustyöt</h3>
              <p className="en">Excavation, ground preparation, foundations and site grading.</p>
              <p className="fi hidden">Kaivuutyöt, pohjatyöt, perustukset ja pihan tasaus.</p>
            </div>
            </div>
            <button className="services-nav services-next" type="button" aria-label="Next services">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="en">Our Projects</h2>
          <h2 className="fi hidden">Projektimme</h2>
          <p className="section-intro en">Take a look at some of our recent construction projects.</p>
          <p className="section-intro fi hidden">Tutustu joihinkin viimeaikaisiin rakennusprojekteihimme.</p>
          {/* Projects scroller */}
          <div className="projects-scroller">
            <button className="projects-nav projects-prev" type="button" aria-label="Previous projects">
              <i className="fas fa-chevron-left" />
            </button>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <img src="/images/project-01.jpg" alt="Modern House" loading="lazy" decoding="async" />
                  <div className="project-caption">
                    <span className="en">Modern House</span>
                    <span className="fi hidden">Moderni Talo</span>
                  </div>
                  <div className="placeholder-image project-placeholder">
                    <span className="project-title en">Modern House</span>
                    <span className="project-title fi hidden">Moderni Talo</span>
                    <i className="fas fa-home" />
                  </div>
                  <div className="project-overlay">
                    <div className="project-details">
                      <h3 className="en">Modern House</h3>
                      <h3 className="fi hidden">Moderni Talo</h3>
                      <p className="en">Residential project in Helsinki</p>
                      <p className="fi hidden">Asuinprojekti Helsingissä</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image">
                  <img src="/images/project-02.jpg" alt="Office Building" loading="lazy" decoding="async" />
                  <div className="project-caption">
                    <span className="en">Office Building</span>
                    <span className="fi hidden">Toimistorakennus</span>
                  </div>
                  <div className="placeholder-image project-placeholder">
                    <span className="project-title en">Office Building</span>
                    <span className="project-title fi hidden">Toimistorakennus</span>
                    <i className="fas fa-building" />
                  </div>
                  <div className="project-overlay">
                    <div className="project-details">
                      <h3 className="en">Office Building</h3>
                      <h3 className="fi hidden">Toimistorakennus</h3>
                      <p className="en">Commercial project in Espoo</p>
                      <p className="fi hidden">Kaupallinen projekti Espoossa</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image">
                  <img src="/images/project-03.jpg" alt="Interior Design" loading="lazy" decoding="async" />
                  <div className="project-caption">
                    <span className="en">Interior Design</span>
                    <span className="fi hidden">Sisätilojen Suunnittelu</span>
                  </div>
                  <div className="placeholder-image project-placeholder">
                    <span className="project-title en">Interior Design</span>
                    <span className="project-title fi hidden">Sisätilojen Suunnittelu</span>
                    <i className="fas fa-couch" />
                  </div>
                  <div className="project-overlay">
                    <div className="project-details">
                      <h3 className="en">Interior Design</h3>
                      <h3 className="fi hidden">Sisätilojen Suunnittelu</h3>
                      <p className="en">Renovation project in Vantaa</p>
                      <p className="fi hidden">Kunnostusprojekti Vantaalla</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="projects-nav projects-next" type="button" aria-label="Next projects">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="en">Client Testimonials</h2>
          <h2 className="fi hidden">Asiakkaiden Palautteet</h2>
          <p className="section-intro en">What our clients say about our work and services.</p>
          <p className="section-intro fi hidden">Mitä asiakkaamme sanovat työstämme ja palveluistamme.</p>
          <div className="testimonials-slider" id="testimonialsSlider">
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="quote-icon"><i className="fas fa-quote-left" /></div>
                <p className="testimonial-text en">Varatek did an amazing job with our house renovation. Professional team, high-quality work, and they finished on time. Highly recommended!</p>
                <p className="testimonial-text fi hidden">Varatek teki upean työn talomme remontissa. Ammattimainen tiimi, laadukas työ ja he valmistuivat ajallaan. Suosittelen lämpimästi!</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"><div className="client-placeholder"><i className="fas fa-user" /></div></div>
                <div className="author-info"><h4>Mikko Korhonen</h4><p className="en">Helsinki</p><p className="fi hidden">Helsinki</p></div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="quote-icon"><i className="fas fa-quote-left" /></div>
                <p className="testimonial-text en">We hired Varatek for our office renovation and the results exceeded our expectations. Great attention to detail and excellent communication throughout the project.</p>
                <p className="testimonial-text fi hidden">Palkkasimme Varatekin toimistomme remonttiin ja tulokset ylittivät odotuksemme. Erinomaista huomiota yksityiskohtiin ja loistavaa viestintää koko projektin ajan.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"><div className="client-placeholder"><i className="fas fa-user" /></div></div>
                <div className="author-info"><h4>Liisa Virtanen</h4><p className="en">Espoo</p><p className="fi hidden">Espoo</p></div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="quote-icon"><i className="fas fa-quote-left" /></div>
                <p className="testimonial-text en">The interior design service from Varatek transformed our home completely. Their team understood our vision perfectly and created a beautiful, functional space for our family.</p>
                <p className="testimonial-text fi hidden">Varatekin sisustussuunnittelupalvelu muutti kotimme täysin. Heidän tiiminsä ymmärsi visiomme täydellisesti ja loi kauniin ja toimivan tilan perheellemme.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"><div className="client-placeholder"><i className="fas fa-user" /></div></div>
                <div className="author-info"><h4>Anna Mäkinen</h4><p className="en">Vantaa</p><p className="fi hidden">Vantaa</p></div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="quote-icon"><i className="fas fa-quote-left" /></div>
                <p className="testimonial-text en">We've worked with Varatek on multiple projects over the years. Their consistent quality and reliability make them our go-to construction company for all our building needs.</p>
                <p className="testimonial-text fi hidden">Olemme työskennelleet Varatekin kanssa useissa projekteissa vuosien varrella. Heidän johdonmukainen laatunsa ja luotettavuutensa tekevät heistä ensisijaisen rakennusyhtiömme kaikissa rakennustarpeissamme.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"><div className="client-placeholder"><i className="fas fa-user" /></div></div>
                <div className="author-info"><h4>Juha Nieminen</h4><p className="en">Turku</p><p className="fi hidden">Turku</p></div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="quote-icon"><i className="fas fa-quote-left" /></div>
                <p className="testimonial-text en">The repair services from Varatek were quick and efficient. They fixed our roof leak during winter with minimal disruption to our daily life. Excellent emergency service!</p>
                <p className="testimonial-text fi hidden">Varatekin korjauspalvelut olivat nopeita ja tehokkaita. He korjasivat kattovuotomme talvella aiheuttaen minimaalisen häiriön päivittäiseen elämäämme. Erinomainen hätäpalvelu!</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image"><div className="client-placeholder"><i className="fas fa-user" /></div></div>
                <div className="author-info"><h4>Sanna Järvinen</h4><p className="en">Tampere</p><p className="fi hidden">Tampere</p></div>
              </div>
            </div>
          </div>
          <div className="testimonial-dots" id="testimonialDots">
            <span className="dot active" data-index="0"></span>
            <span className="dot" data-index="1"></span>
            <span className="dot" data-index="2"></span>
            <span className="dot" data-index="3"></span>
            <span className="dot" data-index="4"></span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="en">Contact Us</h2>
          <h2 className="fi hidden">Ota Yhteyttä</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form id="contactForm">
                <div className="form-group">
                  <label htmlFor="name" className="en">Name</label>
                  <label htmlFor="name" className="fi hidden">Nimi</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="en">Email</label>
                  <label htmlFor="email" className="fi hidden">Sähköposti</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="en">Message</label>
                  <label htmlFor="message" className="fi hidden">Viesti</label>
                  <textarea id="message" name="message" rows={5} required />
                </div>
                <button type="submit" className="submit-btn">
                  <span className="en">Send Message</span>
                  <span className="fi hidden">Lähetä Viesti</span>
                </button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-details">
                <div className="info-item">
                  <p>VaraTek Oy — Y-tunnus: 3504120-8</p>
                </div>
                <div className="info-item">
                  <h4 className="en">Address</h4>
                  <h4 className="fi hidden">Osoite</h4>
                  <p>Malagankatu 4 A , 00220 Helsinki</p>
                </div>
                <div className="info-item">
                  <h4 className="en">Phone</h4>
                  <h4 className="fi hidden">Puhelin</h4>
                  <p>Igor Aksenov — Toimitusjohtaja</p>
                  <p><a href="tel:+358451964604" className="contact-link phone"><i className="fas fa-phone" /> +358 45 1964604</a></p>
                  <p>Innokenti Grant — Myynti- ja rakennuspäällikkö</p>
                  <p><a href="tel:+358413280983" className="contact-link phone"><i className="fas fa-phone" /> +358 41 3280983</a></p>
                  <p>Aleksandr Itsjov — Hitsaustyö tilaukset ja myynti</p>
                  <p><a href="tel:+358458060881" className="contact-link phone"><i className="fas fa-phone" /> +358 45 8060881</a></p>
                  <p>Pavel Karasev — IT-osasto ja sähkötyön päälikkö</p>
                  <p><a href="tel:+358465740203" className="contact-link phone"><i className="fas fa-phone" /> +358 46 5740203</a></p>
                  <p>Timo Aho — Vinyylilattian myynti ja korjaustöiden vastaava johtaja</p>
                  <p><a href="tel:+358456123014" className="contact-link phone"><i className="fas fa-phone" /> +358 45 6123014</a></p>
                </div>
                <div className="info-item">
                  <h4 className="en">Email</h4>
                  <h4 className="fi hidden">Sähköposti</h4>
                  <p><a href="mailto:info@varatek.fi" className="contact-link email"><i className="fas fa-envelope" /> info@varatek.fi</a></p>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=Malagankatu%204%20A,%2000220%20Helsinki&z=14&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 12 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

