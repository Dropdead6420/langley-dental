import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="master-navigation">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="nav-wrapper">
          <div className="left-nav">
            <div className="menu-button w-nav-button">
              <div className="nav-menu-button">
                <div className="menu-open">
                  <div className="icon-menu w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 157 100"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_16041_5949)">
                        <path
                          d="M156.765 85.6094H0.0703125V99.8543H156.765V85.6094Z"
                          fill="currentColor"
                        />
                        <path
                          d="M156.765 0.140625H0.0703125V14.3856H156.765V0.140625Z"
                          fill="currentColor"
                        />
                        <path
                          d="M156.765 42.875H0.0703125V57.1199H156.765V42.875Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="menu-close">
                  <div className="icon-close w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M98.5347 91.4605C98.9994 91.9251 99.368 92.4764 99.6194 93.0837C99.8707 93.6904 100 94.341 100 94.9976C100 95.6549 99.8707 96.3056 99.6194 96.9122C99.368 97.5188 98.9994 98.0708 98.5347 98.5354C98.0708 98.9994 97.5188 99.3681 96.9122 99.6194C96.3049 99.8707 95.6549 100 94.9976 100C94.341 100 93.6903 99.8707 93.083 99.6194C92.4764 99.3681 91.9251 98.9994 91.4605 98.5354L50.0001 57.0686L8.53981 98.5354C7.60166 99.4734 6.32926 100 5.00253 100C3.67574 100 2.40336 99.4734 1.4652 98.5354C0.527052 97.5968 0 96.3249 0 94.9976C0 93.671 0.527052 92.3984 1.4652 91.4605L42.9317 50.0001L1.4652 8.53981C0.527052 7.60166 0 6.32926 0 5.00252C0 3.67579 0.527052 2.40335 1.4652 1.4652C2.40336 0.527045 3.67574 0 5.00253 0C6.32926 0 7.60166 0.527045 8.53981 1.4652L50.0001 42.9318L91.4605 1.4652C92.3984 0.527045 93.671 0 94.9976 0C96.3242 0 97.5968 0.527045 98.5347 1.4652C99.4734 2.40335 100 3.67579 100 5.00252C100 6.32926 99.4734 7.60166 98.5347 8.53981L57.0685 50.0001L98.5347 91.4605Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/"
              aria-current="page"
              className="brand-logo w-nav-brand w--current text-2xl font-bold text-center"
            >
             Langley Dental
            </Link>
          </div>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="menu-inner-sticky">
              <div className="nav-mobile-menu">
                <a href="#" className="nav-mobile-link w-inline-block">
                  <div className="text-h4">About</div>
                </a>
                <a href="#" className="nav-mobile-link w-inline-block">
                  <div className="text-h4">Offerings</div>
                  <div className="offerings-list-mobile">
                    <div className="dropdown-link-nav text-h7">
                      Coaching Sessions
                    </div>
                    <div className="dropdown-link-nav text-h7">
                      Consulting Packages
                    </div>
                    <div className="dropdown-link-nav text-h7">
                      Workshops Programs
                    </div>
                    <div className="dropdown-link-nav text-h7">
                      Visual Strategy
                    </div>
                    <div className="dropdown-link-nav text-h7">
                      Aesthetic Audits™
                    </div>
                    <div className="dropdown-link-nav text-h7">
                      Spiritual UX Cleanse
                    </div>
                  </div>
                </a>
                <a href="#" className="nav-mobile-link w-inline-block">
                  <div className="text-h4">Journal</div>
                </a>
                <a href="#" className="nav-mobile-link w-inline-block">
                  <div className="text-h4">Contact</div>
                </a>
              </div>
              <div
                data-w-id="64d05c77-2322-f25f-df27-655b16f4e25c"
                className="nav-link-wrap"
              >
                <a
                  href="about/about-a.html"
                  className="link-fixed-nav w-inline-block"
                >
                  <div className="button-text-mask small">
                    <div className="button-text-small _1">About</div>
                    <div className="button-text-small _2">About</div>
                  </div>
                </a>
              </div>
              <div
                data-hover="true"
                data-delay={300}
                data-w-id="4cfb9b2b-9532-963a-ceb6-f81ad1f09504"
                className="nav-dropdown w-dropdown"
              >
                <div className="dropdown-toggle-nav w-dropdown-toggle">
                  <div
                    data-w-id="f460391d-19b6-1f42-43b0-98d68a307163"
                    className="nav-link-wrap"
                  >
                    <a
                      href="offerings.html"
                      className="link-fixed-nav w-inline-block"
                    >
                      <div className="button-text-mask small">
                        <div className="button-text-small _1">Offerings</div>
                        <div className="button-text-small _2">Offerings</div>
                      </div>
                    </a>
                  </div>
                </div>
                <nav className="dropdown-list-navigation w-dropdown-list">
                  <a
                    href="offerings.html"
                    className="dropdown-menu-nav w-inline-block"
                  >
                    <div className="left-dropdown-menu">
                      <div className="label-small text-dark-48">Offerings</div>
                      <div className="list-dropdown-menu">
                        <div className="dropdown-link-nav text-h7">
                          Coaching Sessions
                        </div>
                        <div className="dropdown-link-nav text-h7">
                          Consulting Packages
                        </div>
                        <div className="dropdown-link-nav text-h7">
                          Workshops Programs
                        </div>
                        <div className="dropdown-link-nav text-h7">
                          Visual Strategy
                        </div>
                        <div className="dropdown-link-nav text-h7">
                          Aesthetic Audits™
                        </div>
                        <div className="dropdown-link-nav text-h7">
                          Spiritual UX Cleanse
                        </div>
                      </div>
                    </div>
                    <div className="cta-dropdown-menu">
                      <div className="content-dropdown-cta">
                        <div className="text-wrap-dropdown-cta">
                          <div className="text-large text-bold">&amp;Fold™</div>
                          <div>A quiet system for brands</div>
                        </div>
                        <div className="cta-small blur-light">
                          <div className="button-text-mask small">
                            <div className="button-text-small _1">
                              Buy Template
                            </div>
                            <div className="button-text-small _2">
                              Buy Template
                            </div>
                          </div>
                          <div className="button-bg blur-light" />
                        </div>
                      </div>
                      <div className="overlay-dropdown-cta" />
                    </div>
                  </a>
                </nav>
              </div>
              <div
                data-w-id="aab947cc-4b08-f4b5-b097-324a30b9d18c"
                className="nav-link-wrap"
              >
                <a
                  href="journal.html"
                  className="link-fixed-nav w-inline-block"
                >
                  <div className="button-text-mask small">
                    <div className="button-text-small _1">Journal</div>
                    <div className="button-text-small _2">Journal</div>
                  </div>
                </a>
              </div>
              <div
                data-w-id="fee3d0c6-da15-5a95-c7ea-8709843b5996"
                className="nav-link-wrap"
              >
                <a
                  href="contact/contact-a.html"
                  className="link-fixed-nav w-inline-block"
                >
                  <div className="button-text-mask small">
                    <div className="button-text-small _1">Contact</div>
                    <div className="button-text-small _2">Contact</div>
                  </div>
                </a>
              </div>
              <a
                href="https://webflow.com/templates/html/fold-website-template"
                target="_blank"
                className="link-fixed-nav main w-inline-block"
              >
                <div className="button-text-mask small">
                  <div className="button-text-small _1">Get &amp;Fold</div>
                  <div className="button-text-small _2">Get &amp;Fold</div>
                </div>
              </a>
              <div className="cta-nav-menu">
                <div className="content-dropdown-cta">
                  <div className="text-wrap-dropdown-cta">
                    <div className="text-large text-bold">&amp;Fold™</div>
                    <div>A quiet system for brands</div>
                  </div>
                  <div className="cta-small blur-light">
                    <div className="button-text-mask small">
                      <div className="button-text-small _1">Buy Template</div>
                      <div className="button-text-small _2">Buy Template</div>
                    </div>
                    <div className="button-bg blur-light" />
                  </div>
                </div>
                <div className="overlay-nav-cta" />
              </div>
            </div>
          </nav>
          <div className="nav-mobile-button">
            <a href="#" className="cta-main w-inline-block">
              <div className="button-text-mask">
                <div className="button-text _1">Get &amp;Fold</div>
                <div className="button-text _2">Get &amp;Fold</div>
              </div>
              <div className="button-bg" />
            </a>
          </div>
        </div>
      </div>
      <div className="nav-blur-bg">
        <div className="overlay-nav-bg" />
      </div>
    </div>
  );
};

export default Header;
