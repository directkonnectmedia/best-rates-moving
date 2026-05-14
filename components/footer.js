import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-main-grid">
              <div className="footer-grid-col footer-grid-brand">
                <div className="footer-logo-group">
                  <div className="footer-icon-badge footer-brand-logo-badge">
                    <img
                      src="/Moving-Logo.png"
                      alt="Best Rates Moving"
                      width={520}
                      height={173}
                      className="footer-brand-logo-img"
                    />
                  </div>
                </div>
              </div>
              <div className="footer-grid-col footer-grid-services">
                <h3 className="footer-column-heading">Our Services</h3>
                <ul className="footer-services-list">
                  <li>
                    <a href="#services">
                      <span>Residential</span>
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <span>Commercial</span>
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <span>Packing</span>
                    </a>
                  </li>
                  <li>
                    <a href="#quote-wizard">
                      <span>Urgent Moving Services</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-grid-col footer-grid-contact">
                <h3 className="footer-column-heading">Contact Us</h3>
                <div className="footer-contact-block">
                  <a href="tel:4803693716" className="footer-contact-line">
                    Phone: (480) 369-3716
                  </a>
                  <p className="footer-contact-line footer-contact-location">
                    Location: Phoenix &amp; Valley Wide 🌵
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-social">
              <a href="#">
                <div aria-label="Facebook" className="footer-social-link">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div aria-label="Instagram" className="footer-social-link">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-16 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm-4 5a4 4 0 0 0-3.995 3.8L8 12a4 4 0 1 0 4-4m4.5-1.5a1 1 0 0 0-.993.883l-.007.127a1 1 0 0 0 1.993.117L17.5 7.5a1 1 0 0 0-1-1"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="footer-bottom">
              <p className="footer-copyright">
                © 2026 Best Rates Moving. Fast, Efficient &amp; Very
                Professional.
              </p>
              <div className="footer-legal">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span className="footer-legal-divider">|</span>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-animations">
(function(){
  const footerObserverOptions = {
    threshold: 0.1,
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".footer-grid-col, .footer-social-link, .footer-bottom")
        items.forEach((item, index) => {
          item.style.opacity = "0"
          item.style.transform = "translateY(20px)"
          item.style.transition = "all 0.5s ease-out"

          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "translateY(0)"
          }, index * 100)
        })
        footerObserver.unobserve(entry.target)
      }
    })
  }, footerObserverOptions)

  const footerSection = document.querySelector(".footer-root")
  if (footerSection) {
    footerObserver.observe(footerSection)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
