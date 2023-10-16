import React from "react";

function ContactUs() {
  return (
    <div>
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
      
    </div>
  );
}

export default ContactUs;
