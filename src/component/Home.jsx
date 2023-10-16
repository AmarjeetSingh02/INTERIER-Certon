import React from "react";

function Home() {
  return (
    <div>
      <div class="header-section wf-section">
        <div class="top-bar-header-area">
          <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            class="navbar w-nav"
          >
            <div class="container w-container">
              <a href="index.html" class="brand w-nav-brand">
                <img
                  src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
                  loading="lazy"
                  alt="Doctorate Logo"
                  height=""
                />
              </a>
              <nav role="navigation" class="nav-menu w-nav-menu">
                <a href="index.html" class="nav-link w-nav-link">
                  Home
                </a>
                <a href="about-us.html" class="nav-link w-nav-link">
                  About Us
                </a>
                <a href="services.html" class="nav-link w-nav-link">
                  Services
                </a>
                <div
                  data-hover="true"
                  data-delay="100"
                  class="dropdown w-dropdown"
                >
                  <div class="dropdown-toggle w-dropdown-toggle">
                    <div class="dropdown-nav-link">Pages</div>
                  </div>
                  <nav class="dropdown-list w-dropdown-list">
                    <a
                      href="our-projects.html"
                      class="dropdown-link w-dropdown-link"
                    >
                      Our Projects
                    </a>
                    <a
                      href="professionals.html"
                      class="dropdown-link w-dropdown-link"
                    >
                      Professionals
                    </a>
                    <a
                      href="services-single.html"
                      class="dropdown-link w-dropdown-link"
                    >
                      Services Single
                    </a>
                    <a
                      href="pricing-plan.html"
                      class="dropdown-link w-dropdown-link"
                    >
                      Pricing Plan
                    </a>
                    <a href="blog.html" class="dropdown-link w-dropdown-link">
                      Blog
                    </a>
                    <a href="faq.html" class="dropdown-link w-dropdown-link">
                      FAQ
                    </a>
                  </nav>
                </div>
                <a
                  href="contact-us.html"
                  aria-current="page"
                  class="nav-link last-child w-nav-link w--current"
                >
                  Contact Us
                </a>
              </nav>
              <div class="menu-button w-nav-button">
                <div class="menu-icon w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-title-area contact-us wf-section">
        <div class="container w-container">
          <div class="banner-content-wrap">
            <h1 class="banner-title">Contact Us</h1>
            <div class="breadcrumb-wrap">
              <a href="index.html" class="breadcrumb-link">
                Home
              </a>
              <div class="breadcrumb-separator">/</div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-page-form wf-section">
        <div class="container w-container">
          <div class="contact-page-wrap">
            <h2 class="section-title text-center">
              Reach Us to know the way to <br />
              create your Dream Interior
            </h2>
            <div class="w-layout-grid contact-page-grid">
              <div class="contact-detail-wrap">
                <div class="contact-detail-item">
                  <div class="contact-icon-wrap">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619c8d35fa244c2bd431a603_contact-icon-one.svg"
                      loading="lazy"
                      alt="Contact Icon"
                    />
                  </div>
                  <a href="mailto:info@yourdomain.com" class="contact-link">
                    info@yourdomain.com
                  </a>
                </div>
                <div class="contact-detail-item">
                  <div class="contact-icon-wrap">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619c8d35d8ad3f639aee4b93_contact-icon-two.svg"
                      loading="lazy"
                      alt="Contact Icon"
                    />
                  </div>
                  <a href="tel:+1(378)400-1234" class="contact-link">
                    +1 (378) 400-1234
                  </a>
                </div>
                <div class="contact-detail-item">
                  <div class="contact-icon-wrap">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619c8d35c483a1848884ce54_contact-icon-three.svg"
                      loading="lazy"
                      alt="Contact Icon"
                    />
                  </div>
                  <a href="http://www.interno.com/" class="contact-link">
                    www.interno.com
                  </a>
                </div>
                <div class="contact-social-wrap">
                  <a href="#" class="contact-social-link w-inline-block">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                      loading="lazy"
                      alt="Social Icon"
                    />
                  </a>
                  <a href="#" class="contact-social-link w-inline-block">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                      loading="lazy"
                      alt="Social Icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    class="contact-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                      loading="lazy"
                      alt="Social Icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    class="contact-social-link w-inline-block"
                  >
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad6919776715d6a83fa_instagram-icon.svg"
                      loading="lazy"
                      alt="Social Icon"
                    />
                  </a>
                </div>
              </div>
              <div class="form-wrap">
                <div class="form-block w-form">
                  <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                    method="get"
                    class="form-minimum-width"
                  >
                    <div class="w-layout-grid contact-form-grid">
                      <div class="input-block">
                        <input
                          type="text"
                          class="form-input-field w-input"
                          maxlength="256"
                          name="name-2"
                          data-name="Name 2"
                          placeholder="Name"
                          id="name-2"
                          required=""
                        />
                      </div>
                      <div class="input-block">
                        <input
                          type="email"
                          class="form-input-field w-input"
                          maxlength="256"
                          name="email-2"
                          data-name="Email 2"
                          placeholder="Email"
                          id="email-2"
                          required=""
                        />
                      </div>
                      <div class="input-block">
                        <input
                          type="tel"
                          class="form-input-field w-input"
                          maxlength="256"
                          name="Phone-Number-2"
                          data-name="Phone Number 2"
                          placeholder="Phone"
                          id="Phone-Number-2"
                          required=""
                        />
                      </div>
                      <div class="input-block">
                        <input
                          type="text"
                          class="form-input-field w-input"
                          maxlength="256"
                          name="Subject-Field-2"
                          data-name="Subject Field 2"
                          placeholder="Subject"
                          id="Subject-Field-2"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="form-text-area">
                      <textarea
                        placeholder="Hello Iam Intrested in.."
                        maxlength="5000"
                        id="field"
                        name="field"
                        data-name="Field"
                        class="form-input-field text-area w-input"
                      ></textarea>
                    </div>
                    <div class="contact-form-button-section right-align">
                      <input
                        type="submit"
                        value="Submit"
                        data-wait="Please wait..."
                        class="button-large form-button w-button"
                      />
                    </div>
                  </form>
                  <div class="success-message w-form-done">
                    <div class="success-message-title">
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div class="error-message w-form-fail">
                    <div class="error-message-title">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-section wf-section">
        <div class="container w-container">
          <div class="w-layout-grid footer-grid-wrap">
            <div class="footer-widget-wrap">
              <a href="index.html" class="w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
                  loading="lazy"
                  alt=""
                  class="footer-logo"
                />
              </a>
              <p class="footer-intro-content">
                We are the leading architect and interior design firm in the
                world.
              </p>
              <div class="footer-social-wrap">
                <a
                  href="#0"
                  class="footer-social-link first-child w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
                <a href="#0" class="footer-social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  class="footer-social-link w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  class="footer-social-link w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad6919776715d6a83fa_instagram-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="footer-widget-wrap">
              <h2 class="footer-widget-title">Pages</h2>
              <div class="footer-menu-links-wrap">
                <a href="style-guide.html" class="footer-link">
                  Style Guide
                </a>
                <a href="401.html" class="footer-link">
                  Protected
                </a>
                <a href="licenses.html" class="footer-link">
                  Licenses
                </a>
                <a href="changelog.html" class="footer-link">
                  Changelog
                </a>
                <a href="404.html" class="footer-link">
                  404
                </a>
              </div>
            </div>
            <div class="footer-widget-wrap">
              <h2 class="footer-widget-title">Explore</h2>
              <div class="footer-menu-links-wrap">
                <a href="services.html" class="footer-link">
                  About Us
                </a>
                <a href="blog.html" class="footer-link">
                  Recent Blog
                </a>
                <a href="pricing-plan.html" class="footer-link">
                  Pricing Plan
                </a>
                <a href="our-projects.html" class="footer-link">
                  Our Projects
                </a>
                <a
                  href="contact-us.html"
                  aria-current="page"
                  class="footer-link w--current"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div class="footer-widget-wrap footer-widget-four">
              <h2 class="footer-widget-title">Contact</h2>
              <div class="footer-address-wrap">
                <p class="footer-address">
                  53, East Birchwood Ave. Brooklyn, New York 11201, USA.
                </p>
                <a href="mailto:contact@interno.com" class="footer-link">
                  contact@interno.com
                </a>
                <a href="tel:(123)456-7890" class="footer-link">
                  (123) 456 - 7890
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-wrap">
          <div class="copyright-content">
            Copyright © Interno | Designed by
            <a href="https://www.victorflow.com/">Victorflow</a> Templates -
            Powered by <a href="https://webflow.com/">Webflow</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
