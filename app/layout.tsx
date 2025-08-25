import './globals.css';
import type { Metadata } from 'next';
import { ClientBehavior } from './ClientBehavior';

export const metadata: Metadata = {
  title: 'Varatek Construction Company',
  viewport: 'width=device-width, initial-scale=1.0'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {/* header moved from original index.html */}
        <header>
          <div className="logo-container">
            <img src="/images/logo.svg" alt="Varatek Logo" className="logo" />
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

