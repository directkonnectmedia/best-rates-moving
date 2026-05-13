import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Best Rates Moving</title>
          <meta property="og:title" content="Best Rates Moving" />
          <link
            rel="canonical"
            href="https://graceful-determined-goat-05x0ft.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://graceful-determined-goat-05x0ft.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-video-container">
            <video
              src="https://videos.pexels.com/video-files/17899033/17899033-hd_1920_1080_24fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/17899033/pictures/preview-0.jpeg"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="hero-title home-hero-title">
                Best Rates Moving – Valley Wide &amp; Same Day Options!
              </h1>
              <p className="hero-subtitle">
                Fast, efficient, and professional residential and commercial
                moving across Arizona. No move is too big or too small.
              </p>
              <div className="hero-cta-group">
                <a href="#quote-wizard">
                  <div className="btn-lg btn-primary btn">
                    <span>Get a Free Quote</span>
                  </div>
                </a>
                <a href="tel:4803693716">
                  <div className="btn-lg btn-accent btn">
                    <span>Text Us Now</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <a href="tel:4803693716">
            <div aria-label="Call now" className="hero-floating-call">
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
              </svg>
            </div>
          </a>
        </section>
        <section className="services-grid-section">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">
                Our Professional Moving Services
              </h2>
              <p className="section-subtitle">
                Comprehensive solutions tailored to your Arizona relocation
                needs.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle r="2" cx="17" cy="18"></circle>
                    <circle r="2" cx="7" cy="18"></circle>
                  </svg>
                </div>
                <h3 className="service-card-title">
                  Local &amp; Long Distance
                </h3>
                <p className="section-content">
                  Moving within Phoenix or across the state? We handle any
                  distance with the same professional care.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 2 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5M12 22V12"></path>
                  </svg>
                </div>
                <h3 className="service-card-title">
                  Full Packing &amp; Wrapping
                </h3>
                <p className="section-content">
                  Expert packing, wrapping, and unpacking services to ensure
                  your belongings arrive safely at your new home.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
                  </svg>
                </div>
                <h3 className="service-card-title">Furniture Assembly</h3>
                <p className="section-content">
                  Professional disassembly and assembly of beds, desks, and
                  complex furniture items included in every move.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 className="service-card-title">24/7 Emergency Moves</h3>
                <p className="section-content">
                  Last-minute or short-notice? We specialize in urgent
                  relocations with same-day availability across the Valley.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                </div>
                <h3 className="service-card-title">Valley Wide Coverage</h3>
                <p className="section-content">
                  Proudly serving Phoenix, Scottsdale, Mesa, Tempe, Chandler,
                  Gilbert, and all surrounding Arizona areas.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon-wrapper">
                  <svg
                    fill="none"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                    <path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path>
                  </svg>
                </div>
                <h3 className="service-card-title">Labor-Only Services</h3>
                <p className="section-content">
                  Need help loading or unloading your personal truck? Our
                  professional labor-only teams are here to help.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="quote-wizard" className="quote-wizard-section">
          <div className="quote-container">
            <div className="quote-header">
              <h2 className="section-title">Get Your Free Quote</h2>
              <p className="section-subtitle">
                Fast, accurate estimates in just a few clicks.
              </p>
            </div>
            <div className="wizard-stepper">
              <div data-step="1" className="step-indicator active">
                <span>1</span>
              </div>
              <div className="step-line"></div>
              <div data-step="2" className="step-indicator">
                <span>2</span>
              </div>
              <div className="step-line"></div>
              <div data-step="3" className="step-indicator">
                <span>3</span>
              </div>
              <div className="step-line"></div>
              <div data-step="4" className="step-indicator">
                <span>4</span>
              </div>
            </div>
            <div className="wizard-content">
              <div id="step-1" className="active wizard-pane">
                <h3 className="wizard-pane-title">Select Move Type</h3>
                <div className="wizard-options">
                  <button onclick="nextStep(2)" className="wizard-opt-btn">
                    Residential
                  </button>
                  <button onclick="nextStep(2)" className="wizard-opt-btn">
                    Commercial
                  </button>
                  <button onclick="nextStep(2)" className="wizard-opt-btn">
                    Labor-Only
                  </button>
                </div>
              </div>
              <div id="step-2" className="wizard-pane">
                <h3 className="wizard-pane-title">Select Services</h3>
                <div className="wizard-options">
                  <button onclick="nextStep(3)" className="wizard-opt-btn">
                    Packing
                  </button>
                  <button onclick="nextStep(3)" className="wizard-opt-btn">
                    Loading
                  </button>
                  <button onclick="nextStep(3)" className="wizard-opt-btn">
                    Assembly
                  </button>
                </div>
              </div>
              <div id="step-3" className="wizard-pane">
                <h3 className="wizard-pane-title">Select Timing</h3>
                <div className="wizard-options">
                  <button onclick="nextStep(4)" className="wizard-opt-btn">
                    Same Day
                  </button>
                  <button onclick="nextStep(4)" className="wizard-opt-btn">
                    ASAP
                  </button>
                  <button onclick="nextStep(4)" className="wizard-opt-btn">
                    Scheduled
                  </button>
                </div>
              </div>
              <div id="step-4" className="wizard-pane">
                <h3 className="wizard-pane-title">Final Details</h3>
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="31157e91-4d93-4447-b4e5-cb917e3343fe"
                  className="wizard-form"
                >
                  <div className="form-group">
                    <input
                      type="tel"
                      id="thq_phone_9yWi"
                      name="phone"
                      required="true"
                      placeholder="Enter Phone Number"
                      data-form-field-id="thq_phone_9yWi"
                      className="wizard-input"
                    />
                  </div>
                  <button
                    id="thq_button_7eZQ"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_7eZQ"
                    className="btn-lg btn-primary btn"
                  >
                    Get Free Quote Over Phone
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="about-container">
            <div className="about-grid">
              <div className="about-image-column">
                <img
                  alt="Best Rates Moving Team"
                  src="https://images.pexels.com/photos/7464721/pexels-photo-7464721.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="about-main-img"
                />
                <div className="about-badge">
                  <span className="badge-number">15+</span>
                  <span className="badge-text">Years in AZ</span>
                </div>
              </div>
              <div className="about-content-column">
                <h2 className="section-title">
                  Valley-Wide &amp; Professional
                </h2>
                <p className="section-content">
                  Company Truck provided to accommodate any size move. We are
                  fast, efficient, and very professional. We also offer
                  labor-only services to load or unload your personal truck.
                </p>
                <p className="section-content">
                  Based in Phoenix, we understand the unique challenges of
                  Arizona moves. Whether it&apos;s the summer heat or complex
                  gated communities, our team is equipped and ready to handle it
                  all with a friendly, local touch.
                </p>
                <div className="about-features-list">
                  <div className="about-feature-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="home-icon30"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Fully Licensed &amp; Insured</span>
                  </div>
                  <div className="about-feature-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="home-icon32"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Company Trucks Provided</span>
                  </div>
                  <div className="about-feature-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="home-icon34"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>Professional &amp; Background Checked</span>
                  </div>
                </div>
                <a href="tel:4803693716">
                  <div className="btn-lg btn btn-secondary">
                    <span>Call Us: (480) 369-3716</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-section">
          <div className="gallery-wrapper">
            <div id="galleryCarousel" className="gallery-carousel">
              <div className="gallery-item">
                <img
                  alt="Professional Moving Truck Phoenix"
                  src="https://images.pexels.com/photos/20706506/pexels-photo-20706506.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Movers Loading Furniture"
                  src="https://images.pexels.com/photos/7464689/pexels-photo-7464689.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Expert Packing Services"
                  src="https://images.pexels.com/photos/7464690/pexels-photo-7464690.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Local Arizona Moving Service"
                  src="https://images.pexels.com/photos/7464712/pexels-photo-7464712.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Kitchen Unpacking Team"
                  src="https://images.pexels.com/photos/20706509/pexels-photo-20706509.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
            </div>
            <div className="gallery-controls">
              <button
                onclick="scrollGallery(-1)"
                aria-label="Previous image"
                className="gallery-nav-btn prev"
              >
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button
                onclick="scrollGallery(1)"
                aria-label="Next image"
                className="gallery-nav-btn next"
              >
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Moves Completed</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">98%</span>
                <span className="stat-label">Customer Satisfaction</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Emergency Support</span>
              </div>
              <div className="stat-card review-card">
                <div className="star-rating">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Best Rates Moving made our Phoenix move stress-free!
                  Same-day service was a lifesaver.&quot;
                </p>
                <span className="reviewer-name">- Sarah J.</span>
              </div>
              <div className="stat-card review-card">
                <div className="star-rating">
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <svg
                    fill="var(--color-accent)"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;Super professional and fast. They took great care of our
                  antique furniture. Highly recommend!&quot;
                </p>
                <span className="reviewer-name">- Mark T.</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Valley Coverage</span>
              </div>
            </div>
          </div>
        </section>
        <section className="emergency-cta-section">
          <div className="emergency-content">
            <div className="emergency-alert-bar">
              <div className="emergency-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
                  <path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path>
                </svg>
              </div>
              <div className="emergency-text">
                <h2 className="section-title">
                  Need a Move ASAP? 24/7 Emergency Services!
                </h2>
                <p className="section-content">
                  Immediate booking available for same-day and last-minute moves
                  across Arizona.
                </p>
              </div>
              <div className="emergency-actions">
                <a href="tel:4803693716">
                  <div className="btn-lg btn-primary btn">
                    <span>Call/Text (480) 369-3716</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;}
to {opacity: 1;}}@keyframes fadeInDown {from {opacity: 0;
transform: translateY(-20px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes pulse {0% {box-shadow: 0 0 0 0 rgba(217, 90, 0, 0.4);}
70% {box-shadow: 0 0 0 15px rgba(217, 90, 0, 0);}
100% {box-shadow: 0 0 0 0 rgba(217, 90, 0, 0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="moving-wizard-gallery">
(function(){
  function nextStep(step) {
    const panes = document.querySelectorAll(".wizard-pane")
    const indicators = document.querySelectorAll(".step-indicator")

    panes.forEach((p) => p.classList.remove("active"))
    indicators.forEach((i) => i.classList.remove("active"))

    document.getElementById(\`step-\${step}\`).classList.add("active")

    for (let i = 0; i < step; i++) {
      indicators[i].classList.add("active")
    }
  }

  function scrollGallery(direction) {
    const carousel = document.getElementById("galleryCarousel")
    const scrollAmount = direction * 420
    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  // Simple Intersection Observer for entrance animations
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".service-card, .stat-card, .about-image-column, .about-content-column").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-icon30 {
            color: var(--color-primary);
          }
          .home-icon32 {
            color: var(--color-primary);
          }
          .home-icon34 {
            color: var(--color-primary);
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
