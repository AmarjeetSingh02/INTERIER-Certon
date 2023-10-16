import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="container w-container">
          <div className="w-layout-grid footer-grid-wrap">
            <div className="footer-widget-wrap">
              <a
                href="index.html"
                aria-current="page"
                className="w-inline-block w--current"
              >
                <img
                  src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
                  loading="lazy"
                  alt=""
                  className="footer-logo"
                />
              </a>
              <p className="footer-intro-content">
                We are the leading architect and interior design firm in the
                world.
              </p>
              <div className="footer-social-wrap">
                <a
                  href="#0"
                  className="footer-social-link first-child w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
                <a href="#0" className="footer-social-link w-inline-block">
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad6919776715d6a83fa_instagram-icon.svg"
                    loading="lazy"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="footer-widget-wrap">
              <h2 className="footer-widget-title">Pages</h2>
              <div className="footer-menu-links-wrap">
                <a href="style-guide.html" className="footer-link">
                  Style Guide
                </a>
                <a href="401.html" className="footer-link">
                  Protected
                </a>
                <a href="licenses.html" className="footer-link">
                  Licenses
                </a>
                <a href="changelog.html" className="footer-link">
                  Changelog
                </a>
                <a href="404.html" className="footer-link">
                  404
                </a>
              </div>
            </div>
            <div className="footer-widget-wrap">
              <h2 className="footer-widget-title">Explore</h2>
              <div className="footer-menu-links-wrap">
                <a href="services.html" className="footer-link">
                  About Us
                </a>
                <a href="blog.html" className="footer-link">
                  Recent Blog
                </a>
                <a href="pricing-plan.html" className="footer-link">
                  Pricing Plan
                </a>
                <a href="our-projects.html" className="footer-link">
                  Our Projects
                </a>
                <a href="contact-us.html" className="footer-link">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="footer-widget-wrap footer-widget-four">
              <h2 className="footer-widget-title">Contact</h2>
              <div className="footer-address-wrap">
                <p className="footer-address">
                  53, East Birchwood Ave. Brooklyn, New York 11201, USA.
                </p>
                <a href="mailto:contact@interno.com" className="footer-link">
                  contact@interno.com
                </a>
                <a href="tel:(123)456-7890" className="footer-link">
                  (123) 456 - 7890
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="copyright-content">
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
