import './globals.css';
import type { Metadata } from 'next';
import { ClientBehavior } from './ClientBehavior';

export const metadata: Metadata = {
  metadataBase: new URL('https://varatek.fi'),
  title: {
    default: 'VARATEK — Rakennusyhtiö',
    template: '%s | VARATEK',
  },
  description: 'Moderni rakennusyhtiö: uudisrakentaminen, saneeraus, sisustus. Helsinki, Espoo, Vantaa.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/?lang=en',
      fi: '/?lang=fi',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://varatek.fi',
    title: 'VARATEK — Rakennusyhtiö',
    description: 'Uudisrakentaminen, saneeraus, sisustus.',
    images: [{ url: '/images/logo.svg', width: 512, height: 512, alt: 'Varatek Logo' }],
    locale: 'fi_FI',
  },
  twitter: {
    card: 'summary',
    title: 'VARATEK — Rakennusyhtiö',
    description: 'Uudisrakentaminen, saneeraus, sisustus.',
    images: ['/images/logo.svg'],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta property="og:logo" content="https://varatek.fi/images/logo.svg" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VARATEK',
              url: 'https://varatek.fi',
              logo: 'https://varatek.fi/images/logo.svg',
              email: 'info@varatek.fi',
              telephone: '+358451964604',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Malagankatu 4 A',
                addressLocality: 'Helsinki',
                postalCode: '00220',
                addressCountry: 'FI',
              },
            }),
          }}
        />
        {/* Site header */}
        <header>
          <div className="logo-container">
            <svg className="logo" viewBox="0 0 161 160" xmlns="http://www.w3.org/2000/svg" aria-label="Varatek Logo">
              <g transform="translate(0.000000,160.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
                <path d="M540 1244 l-245 -144 -107 0 -108 0 0 -81 0 -81 53 30 c28 16 73 41 100 56 l47 28 0 -381 c0 -374 0 -381 20 -381 20 0 20 7 20 394 l0 394 43 25 c23 13 132 76 241 140 l200 116 56 -32 c31 -18 129 -75 218 -127 l162 -95 -365 -3 -365 -2 0 -405 0 -405 95 0 95 0 0 163 c0 90 2 166 4 168 2 2 50 3 105 1 l101 -3 0 -165 0 -164 210 0 210 0 -2 328 c-3 283 -5 327 -18 327 -13 0 -15 -40 -17 -295 -2 -162 -3 -303 -3 -312 0 -16 -15 -18 -175 -18 l-175 0 0 170 0 170 -135 0 -135 0 0 -170 0 -170 -65 0 -65 0 0 375 0 375 381 0 380 0 110 -65 c61 -36 113 -65 115 -65 2 0 4 36 4 80 l0 80 -108 0 -108 0 -249 145 c-137 80 -256 145 -264 144 -9 0 -126 -65 -261 -145z m-310 -178 c0 -2 -27 -20 -60 -39 l-60 -36 0 39 0 40 60 0 c33 0 60 -2 60 -4z m1270 -36 l0 -39 -60 36 c-33 19 -60 37 -60 39 0 2 27 4 60 4 l60 0 0 -40z"/>
              </g>
            </svg>
            <div className="logo-text">
              <h1 className="en">VARATEK</h1>
              <h1 className="fi hidden">VARATEK</h1>
              <p className="en">CONSTRUCTION COMPANY</p>
              <p className="fi hidden">RAKENNUSYHTIÖ</p>
            </div>
          </div>
          <div className="header-right">
            <div className="mobile-menu-toggle" id="mobileMenuToggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <nav id="mainNav">
              <ul className="nav-links">
                <li><a href="#home" className="nav-link"><span className="en">Home</span><span className="fi hidden">Koti</span></a></li>
                <li><a href="#about" className="nav-link"><span className="en">About</span><span className="fi hidden">Tietoa</span></a></li>
                <li><a href="#services" className="nav-link"><span className="en">Services</span><span className="fi hidden">Palvelut</span></a></li>
                <li><a href="#projects" className="nav-link"><span className="en">Projects</span><span className="fi hidden">Projektit</span></a></li>
                <li><a href="#testimonials" className="nav-link"><span className="en">Testimonials</span><span className="fi hidden">Palautteet</span></a></li>
                <li><a href="#contact" className="nav-link"><span className="en">Contact</span><span className="fi hidden">Yhteystiedot</span></a></li>
                <li><a href="/jobs" className="nav-link"><span className="en">Careers</span><span className="fi hidden">Työnhakijalle</span></a></li>
              </ul>
            </nav>
            <div className="language-switcher">
              <button className="lang-btn" data-lang="en">EN</button>
              <button className="lang-btn active" data-lang="fi">FI</button>
            </div>
          </div>
        </header>

        {children}

        <div className="menu-overlay" id="menuOverlay"></div>

        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <div className="footer-logo-container">
                  <img src="/images/logo.svg" alt="Varatek Logo" className="footer-logo-img" />
                  <div className="footer-logo-text">
                    <h1 className="en">VARATEK</h1>
                    <h1 className="fi hidden">VARATEK</h1>
                    <p className="en">CONSTRUCTION COMPANY</p>
                    <p className="fi hidden">RAKENNUSYHTIÖ</p>
                  </div>
                </div>
              </div>
              <div className="footer-links">
                <ul>
                  <li><a href="#home" className="nav-link"><span className="en">Home</span><span className="fi hidden">Koti</span></a></li>
                  <li><a href="#about" className="nav-link"><span className="en">About</span><span className="fi hidden">Tietoa</span></a></li>
                  <li><a href="#services" className="nav-link"><span className="en">Services</span><span className="fi hidden">Palvelut</span></a></li>
                  <li><a href="#projects" className="nav-link"><span className="en">Projects</span><span className="fi hidden">Projektit</span></a></li>
                  <li><a href="#testimonials" className="nav-link"><span className="en">Testimonials</span><span className="fi hidden">Palautteet</span></a></li>
                  <li><a href="#contact" className="nav-link"><span className="en">Contact</span><span className="fi hidden">Yhteystiedot</span></a></li>
                </ul>
              </div>
              <div className="footer-slogan">
                <p className="fi hidden">
                  Me emme rakenna – me leikkaamme.<br/>
                  Parannamme vanhaa, synnytämme uutta, muokkaamme täydelliseksi.<br/>
                  Tulevaisuuden arkkitehdit, menneisyyden kirurgit, uuden tilan kätilöt.<br/>
                  Skalpelli käteen. Me olemme kotisi kotilääkärit.<br/>
                  Emme vain rakenna. Me rekonstruoimme rakennusten kohtalon.<br/>
                  Siellä missä muut näkevät raunioita – me näemme potilaan. Ja aloitamme leikkauksen.
                </p>
              </div>
              <div className="footer-socials">
                <a
                  href="https://www.tiktok.com/@varatek6?_t=ZN-8zdpLuonFZ8&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="social-btn tiktok"
                >
                  <i className="fab fa-tiktok" />
                </a>
              </div>
              <div className="footer-copyright">
                <p className="en">&copy; 2025 Varatek Construction Company. All rights reserved.</p>
                <p className="fi hidden">&copy; 2025 Varatek-rakennusyhtiö. Kaikki oikeudet pidätetään.</p>
              </div>
            </div>
          </div>
        </footer>

        <ClientBehavior />
      </body>
    </html>
  );
}

