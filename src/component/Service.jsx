import React from "react";
import imageOne from "../assets/service-image-one.jpg";
import imageTwo from "../assets/service-image-two.jpg";
import imageThree from "../assets/service-image-three.jpg";
import imageFour from "../assets/service-image-four.jpg";



function Service() {
  return (
    <div>
      
      <div class="banner-title-area service-page wf-section">
        <div class="container w-container">
          <div class="banner-content-wrap">
            <h1 class="banner-title">Services</h1>
            <div class="breadcrumb-wrap">
              <a href="index.html" class="breadcrumb-link">
                Home
              </a>
              <div class="breadcrumb-separator">/</div>
              <div>Services</div>
            </div>
          </div>
        </div>
      </div>
      <div class="service-section wf-section">
        <div class="container w-container">
          <div class="service-content-wrap">
            <div class="w-layout-grid service-grid-wrap">
              <div class="service-item">
                <h2 class="service-title">Interior Design</h2>
                <p class="service-content">
                  Enhancing the interior to achieve a healthier environment for
                  the people using right space.
                </p>
                <a
                  href="services-single.html"
                  class="simple-link w-inline-block"
                >
                  <p class="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    class="simple-link-icon"
                  />
                </a>
              </div>
              <div class="service-item">
                <h2 class="service-title">Furniture</h2>
                <p class="service-content">
                  Movable articles that are used to make a room or building
                  suitable for living or working.
                </p>
                <a
                  href="services-single.html"
                  class="simple-link w-inline-block"
                >
                  <p class="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    class="simple-link-icon"
                  />
                </a>
              </div>
              <div class="service-item">
                <h2 class="service-title">Lighting</h2>
                <p class="service-content">
                  The lighting in your house or office is the use of electric
                  lights view for the building.
                </p>
                <a
                  href="services-single.html"
                  class="simple-link w-inline-block"
                >
                  <p class="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    class="simple-link-icon"
                  />
                </a>
              </div>
              <div class="service-item">
                <h2 class="service-title">Flooring &amp; Tiling</h2>
                <p class="service-content">
                  Thin object any finished material applied over a floor
                  structure to provide a walking surface.
                </p>
                <a
                  href="services-single.html"
                  class="simple-link w-inline-block"
                >
                  <p class="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    class="simple-link-icon"
                  />
                </a>
              </div>
              <div class="service-item">
                <h2 class="service-title">Decoration</h2>
                <p class="service-content">
                  The activity of making something that look more attractive by
                  putting things around it.
                </p>
                <a
                  href="services-single.html"
                  class="simple-link w-inline-block"
                >
                  <p class="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    class="simple-link-icon"
                  />
                </a>
              </div>
              <div class="service-item">
                <h2 class="service-title">Gardening</h2>
                <p class="service-content">
                  Craft design with the mind of delivering clean water &amp; the
                  perfect positive energy.
                </p>
                <a
                  href="services-single.html"
                  class="simple-link w-inline-block"
                >
                  <p class="simple-link-text">View More</p>
                  <img
                    src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b2cdd72361885cd9000fb_service-link-icon.svg"
                    loading="lazy"
                    alt="Readmore Arrow"
                    class="simple-link-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="process-section wf-section">
        <div class="container w-container">
          <div class="process-steps-wrap">
            <div class="section-title-wrap">
              <h2 class="section-title center-small-space">How We Work</h2>
              <p class="section-title-content">
                The world needs innovators and problem solvers who turn
                challenges into greater <br />
                opportunities about transformative trends challenging the
                status.
              </p>
            </div>
            <div class="process-steps">
              <div class="w-layout-grid process-item-grid">
                <img
                  src={imageOne}
                  loading="lazy"
                  alt="Process"
                  class="process-image"
                />
                <div class="process-item-content">
                  <div class="process-step-count">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5b265aacf4ef0f8aa7_process-icon-one.svg"
                      loading="lazy"
                      alt="Process Icon"
                    />
                    <h2 class="process-count">01</h2>
                  </div>
                  <h2 class="process-heading">Planning &amp; Designing</h2>
                  <p>
                    Constructor explains how you can enjoy high end flooring
                    trends like textured wood and realistic stones with new
                    laminate flooring.
                    <br />
                  </p>
                </div>
              </div>
              <div class="w-layout-grid process-item-grid process-toggle">
                <img
                  src={imageTwo}
                  loading="lazy"
                  id="w-node-_49671877-bdd0-e5a2-f734-ffa7eedf86fb-ac77ac78"
                  alt="Process"
                  class="process-image"
                />
                <div class="process-item-content">
                  <div class="process-step-count">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5ba55231743af01372_process-icon-two.svg"
                      loading="lazy"
                      alt="Process Icon"
                    />
                    <h2 class="process-count">02</h2>
                  </div>
                  <h2 class="process-heading">Evaluation</h2>
                  <p>
                    Our highly educated staff will make sure that your project
                    will be finished on time and specified budget house &amp;
                    remodeling.
                  </p>
                </div>
              </div>
              <div class="w-layout-grid process-item-grid">
                <img
                  src={imageThree}
                  loading="lazy"
                  alt="Process"
                  class="process-image"
                />
                <div class="process-item-content">
                  <div class="process-step-count">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5b578de649459013c9_process-icon-three.svg"
                      loading="lazy"
                      alt="Process Icon"
                    />
                    <h2 class="process-count">03</h2>
                  </div>
                  <h2 class="process-heading">Implementation</h2>
                  <p>
                    Professional construction services from house renovations
                    and remodeling, green building and small scope work, like
                    painting.
                  </p>
                </div>
              </div>
              <div class="w-layout-grid process-item-grid process-toggle">
                <img
                  src={imageFour}
                  loading="lazy"
                  id="w-node-_6c642a3c-5cf0-485f-bd00-20bafeae7c62-ac77ac78"
                  alt="Process"
                  class="process-image"
                />
                <div class="process-item-content">
                  <div class="process-step-count">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619b7a5b34b828d6fd905433_process-icon-four.svg"
                      loading="lazy"
                      alt="Process Icon"
                    />
                    <h2 class="process-count">04</h2>
                  </div>
                  <h2 class="process-heading">Perfect Result</h2>
                  <p>
                    Planning new cities. Restoring damaged environments.
                    Connecting people and economies with roads, bridges, tunnels
                    and transit systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="call-to-action-section wf-section">
        <div class="container w-container">
          <div class="call-to-action-wrap">
            <h2 class="call-to-action-title">Wanna join with Interno?</h2>
            <p class="call-to-action-content">
              Contact Us &amp; Get a Free Consultation
            </p>
            <a
              href="contact-us.html"
              class="button-colored call-to-action-button w-button"
            >
              Connect With us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
