import React from "react";

export default function Navbar() {
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
    </div>
  );
}
