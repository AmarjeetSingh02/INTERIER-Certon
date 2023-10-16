import React from "react";

function Pricing() {
  return (
    <div>
      <div className="header-section wf-section">
        <div className="top-bar-header-area">
          <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar w-nav"
          >
            <div className="container w-container">
              <a href="index.html" className="brand w-nav-brand">
                <img
                  src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
                  loading="lazy"
                  alt="Doctorate Logo"
                  height=""
                />
              </a>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <a href="index.html" className="nav-link w-nav-link">
                  Home
                </a>
                <a href="about-us.html" className="nav-link w-nav-link">
                  About Us
                </a>
                <a href="services.html" className="nav-link w-nav-link">
                  Services
                </a>
                <div
                  data-hover="true"
                  data-delay="100"
                  className="dropdown w-dropdown"
                >
                  <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="dropdown-nav-link">Pages</div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <a
                      href="our-projects.html"
                      className="dropdown-link w-dropdown-link"
                    >
                      Our Projects
                    </a>
                    <a
                      href="professionals.html"
                      aria-current="page"
                      className="dropdown-link w-dropdown-link w--current"
                    >
                      Professionals
                    </a>
                    <a
                      href="services-single.html"
                      className="dropdown-link w-dropdown-link"
                    >
                      Services Single
                    </a>
                    <a
                      href="pricing-plan.html"
                      className="dropdown-link w-dropdown-link"
                    >
                      Pricing Plan
                    </a>
                    <a href="blog.html" className="dropdown-link w-dropdown-link">
                      Blog
                    </a>
                    <a href="faq.html" className="dropdown-link w-dropdown-link">
                      FAQ
                    </a>
                  </nav>
                </div>
                <a
                  href="contact-us.html"
                  className="nav-link last-child w-nav-link"
                >
                  Contact Us
                </a>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="menu-icon w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-title-area professionals-page wf-section">
        <div className="container w-container">
          <div className="banner-content-wrap">
            <h1 className="banner-title">Our Professional</h1>
            <div className="breadcrumb-wrap">
              <a href="index.html" className="breadcrumb-link">
                Home
              </a>
              <div className="breadcrumb-separator">/</div>
              <div>Our Professional</div>
            </div>
          </div>
        </div>
      </div>
      <div className="professionals-section wf-section">
        <div className="container w-container">
          <div className="professionals-wrap">
            <div className="w-layout-grid professionals-grid">
              <div className="professionals-item">
                <div className="professionals-image">
                  <img
                    src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1f22f3d891840a3cc7e9a_team-image-one.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 92vw, (max-width: 638px) 89vw, 568px"
                    srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1f22f3d891840a3cc7e9a_team-image-one-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1f22f3d891840a3cc7e9a_team-image-one.jpg        568w
                  "
                    alt="Team Member Image"
                    className="professionals-listing-image"
                  />
                </div>
                <div className="professionals-member-details">
                  <h2 className="member-name">Martin Devan</h2>
                  <div className="member-profession">Marketing Head</div>
                  <div className="member-social-wrap">
                    <a
                      href="https://www.facebook.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="professionals-item">
                <div className="professionals-image">
                  <img
                    src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa765819168f07363c_team-image-two.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 92vw, (max-width: 638px) 89vw, 568px"
                    srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa765819168f07363c_team-image-two-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa765819168f07363c_team-image-two.jpg        568w
                  "
                    alt="Team Member Image"
                    className="professionals-listing-image"
                  />
                </div>
                <div className="professionals-member-details">
                  <h2 className="member-name">Fiona Dourif</h2>
                  <div className="member-profession">Design Lead</div>
                  <div className="member-social-wrap">
                    <a
                      href="https://www.facebook.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="professionals-item">
                <div className="professionals-image">
                  <img
                    src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa3d89184c52ccdebe_team-image-eight.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 92vw, (max-width: 638px) 89vw, 568px"
                    srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa3d89184c52ccdebe_team-image-eight-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa3d89184c52ccdebe_team-image-eight.jpg        568w
                  "
                    alt="Team Member Image"
                    className="professionals-listing-image"
                  />
                </div>
                <div className="professionals-member-details">
                  <h2 className="member-name">Andrew Howard</h2>
                  <div className="member-profession">Senior Manager</div>
                  <div className="member-social-wrap">
                    <a
                      href="https://www.facebook.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="professionals-item">
                <div className="professionals-image">
                  <img
                    src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa798f2d6d723eb2e1_team-image-three.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 92vw, (max-width: 638px) 89vw, 568px"
                    srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa798f2d6d723eb2e1_team-image-three-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa798f2d6d723eb2e1_team-image-three.jpg        568w
                  "
                    alt="Team Member Image"
                    className="professionals-listing-image"
                  />
                </div>
                <div className="professionals-member-details">
                  <h2 className="member-name">Elizabeth Debic</h2>
                  <div className="member-profession">Senior Manager</div>
                  <div className="member-social-wrap">
                    <a
                      href="https://www.facebook.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="professionals-item">
                <div className="professionals-image">
                  <img
                    src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a7091dfafd9a021777b329_team-image-ten.jpg"
                    loading="lazy"
                    alt="Team Member Image"
                    className="professionals-listing-image"
                  />
                </div>
                <div className="professionals-member-details">
                  <h2 className="member-name">David Harper</h2>
                  <div className="member-profession">Floor Designer</div>
                  <div className="member-social-wrap">
                    <a
                      href="https://www.facebook.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="professionals-item">
                <div className="professionals-image">
                  <img
                    src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa78986aa9135fe867_team-image-five.jpg"
                    loading="lazy"
                    sizes="(max-width: 479px) 92vw, (max-width: 638px) 89vw, 568px"
                    srcset="
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa78986aa9135fe867_team-image-five-p-500.jpeg 500w,
                    https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefa78986aa9135fe867_team-image-five.jpg        568w
                  "
                    alt="Team Member Image"
                    className="professionals-listing-image"
                  />
                </div>
                <div className="professionals-member-details">
                  <h2 className="member-name">Zachary Austin</h2>
                  <div className="member-profession">Gardening Planner</div>
                  <div className="member-social-wrap">
                    <a
                      href="https://www.facebook.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="professionals-item">
                <div className="professionals-image">
                  <img
                    src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fef9a2db7e33c8558996_team-image-six.jpg"
                    loading="lazy"
                    alt="Team Member Image"
                    className="professionals-listing-image"
                  />
                </div>
                <div className="professionals-member-details">
                  <h2 className="member-name">Wes Chatham</h2>
                  <div className="member-profession">Lead Designer</div>
                  <div className="member-social-wrap">
                    <a
                      href="https://www.facebook.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="professionals-item">
                <div className="professionals-image">
                  <img
                    src="../uploads-ssl.webflow.com/6194e0af852e05a5be106504/61a1fefab2eb07ae773b4c13_team-image-seven.jpg"
                    loading="lazy"
                    alt="Team Member Image"
                    className="professionals-listing-image"
                  />
                </div>
                <div className="professionals-member-details">
                  <h2 className="member-name">Juliet Joe</h2>
                  <div className="member-profession">3D Designer</div>
                  <div className="member-social-wrap">
                    <a
                      href="https://www.facebook.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad54be059ae1efcb65b_facebook-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.twitter.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad61619b78575ec3366_twitter-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="professional-social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/6198cad5f63889197173af30_linkedin-icon.svg"
                        loading="lazy"
                        alt="Social Icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section wf-section">
        <div className="container w-container">
          <div className="w-layout-grid footer-grid-wrap">
            <div className="footer-widget-wrap">
              <a href="index.html" className="w-inline-block">
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

export default Pricing;
