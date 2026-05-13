import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <a href="Homepage">
              <div
                aria-label="Best Rates Moving Home"
                className="navigation-logo-link"
              >
                <div className="navigation-logo-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle r="2" cx="17" cy="18"></circle>
                      <circle r="2" cx="7" cy="18"></circle>
                    </g>
                  </svg>
                </div>
                <span className="navigation-brand-name">Best Rates Moving</span>
              </div>
            </a>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links-list">
                <li>
                  <a href="Homepage">
                    <div className="navigation-link">
                      <span>Home</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="Homepage">
                    <div className="navigation-link">
                      <span>Services</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="Homepage">
                    <div className="navigation-link">
                      <span>About</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="Homepage">
                    <div className="navigation-link">
                      <span>Gallery</span>
                    </div>
                  </a>
                </li>
              </ul>
              <a href="tel:4803693716">
                <div className="navigation-cta btn-md btn-primary btn">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>(480) 369-3716</span>
                </div>
              </a>
            </div>
            <button
              id="mobile-toggle"
              aria-label="Open menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-overlay" className="navigation-mobile-overlay">
          <div className="navigation-overlay-header">
            <a href="Homepage">
              <div className="navigation-logo-link">
                <div className="navigation-logo-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle r="2" cx="17" cy="18"></circle>
                      <circle r="2" cx="7" cy="18"></circle>
                    </g>
                  </svg>
                </div>
                <span className="navigation-brand-name">Best Rates Moving</span>
              </div>
            </a>
            <button
              id="mobile-close"
              aria-label="Close menu"
              className="navigation-mobile-close"
            >
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-mobile-links">
              <li>
                <a href="Homepage">
                  <div className="navigation-mobile-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Homepage">
                  <div className="navigation-mobile-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Homepage">
                  <div className="navigation-mobile-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Homepage">
                  <div className="navigation-mobile-link">
                    <span>Gallery</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-mobile-actions">
              <a href="tel:4803693716">
                <div className="btn-lg navigation-mobile-cta btn-primary btn">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Call (480) 369-3716</span>
                </div>
              </a>
              <a href="sms:4803693716">
                <div className="btn-lg navigation-mobile-cta btn btn-secondary">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 18h.01M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Text Us Now</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("mobile-toggle")
  const mobileClose = document.getElementById("mobile-close")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const body = document.body

  const openMenu = () => {
    mobileOverlay.style.display = "flex"
    body.style.overflow = "hidden"
    mobileToggle.setAttribute("aria-expanded", "true")

    const links = mobileOverlay.querySelectorAll(".navigation-mobile-link")
    links.forEach((link, index) => {
      link.style.opacity = "0"
      link.style.transform = "translateY(20px)"
      setTimeout(() => {
        link.style.transition = "all 0.4s ease-out"
        link.style.opacity = "1"
        link.style.transform = "translateY(0)"
      }, 100 + index * 100)
    })
  }

  const closeMenu = () => {
    mobileOverlay.style.display = "none"
    body.style.overflow = ""
    mobileToggle.setAttribute("aria-expanded", "false")
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.transform = "translateY(0)"
      navWrapper.style.boxShadow = "none"
      return
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      navWrapper.style.transform = "translateY(-100%)"
    } else {
      navWrapper.style.transform = "translateY(0)"
      navWrapper.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"
    }
    lastScroll = currentScroll
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
