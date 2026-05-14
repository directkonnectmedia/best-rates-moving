import React from 'react'

import Script from 'dangerous-html/react'

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
            <div className="footer-legal-bar">
              <p className="footer-legal-inline">
                © 2026 Best Rates Moving{' '}
                <span className="footer-legal-sep" aria-hidden="true">
                  |
                </span>{' '}
                Fast, efficient, and very professional{' '}
                <span className="footer-legal-sep" aria-hidden="true">
                  |
                </span>{' '}
                <a href="#">Privacy Policy</a>{' '}
                <span className="footer-legal-sep" aria-hidden="true">
                  |
                </span>{' '}
                <a href="#">Terms of Service</a>
              </p>
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
        const items = entry.target.querySelectorAll(".footer-grid-col, .footer-legal-bar")
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
