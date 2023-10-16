import React from "react";

function Footer() {
  return (
    <div>
      <div class="footer-section">
        <div class="container w-container">
          <div class="w-layout-grid footer-grid-wrap">
            <div class="footer-widget-wrap">
              <a
                href="index.html"
                aria-current="page"
                class="w-inline-block w--current"
              >
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
                <a href="contact-us.html" class="footer-link">
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

export default Footer;
