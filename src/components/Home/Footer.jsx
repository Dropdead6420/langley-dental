import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="footer bg-white relative">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid footer-halves">
          <div
            id="w-node-_6c6719f6-ac3b-fee1-6a35-bdb5f72f6eb3-d0446e59"
            className="left-footer"
          >
            <div className="wrap-column-footer">
              <div className="label text-dark-48">Explore</div>
              <div className="link-list-footer">
                <Link
                 href="/"
                  data-w-id="6c6719f6-ac3b-fee1-6a35-bdb5f72f6eb8"
                  className="link-footer-variants"
                >
                  <div className="text-h4">Home</div>
                </Link>
                <Link
                  href="/about"
                  data-w-id="eed5b01e-4adf-d2c2-6748-5f5f863965a8"
                  className="link-footer-variants"
                >
                  <div className="text-h4">About</div>
                </Link>
                <Link
                  href="/services"
                  className="link-footer-large w-inline-block"
                >
                  <div className="text-footer-link _1">Services</div>
                </Link>
                <Link
                 href="/contact"
                  data-w-id="08cbe1a0-71c5-26dd-1dfd-722f6523e1e7"
                  className="link-footer-variants"
                >
                  <div className="text-h4">Contact</div>
                  
                </Link>
                <Link
                  href="/blog"
                  className="link-footer-large w-inline-block"
                >
                  <div className="text-footer-link _1">Blogs</div>
                </Link>
                 <Link
                  href="/gallery"
                  className="link-footer-large w-inline-block"
                >
                  <div className="text-footer-link _1">Gallery</div>
                </Link>
                <Link
                  href="/services"
                  className="link-footer-large w-inline-block"
                >
                  <div className="text-footer-link _1">Services</div>
                </Link>
              </div>
            </div>
            <div className="wrap-column-footer">
              <div className="label text-dark-48">Social</div>
              <div className="link-list-footer">
                <Link
                  href="https://www.facebook.com/shinedentaloffice"
                  target="_blank"
                  className="link-footer-large w-inline-block"
                >
                  <div className="text-footer-link _1">Facebook</div>
                  <div className="text-footer-link _2">Facebook</div>
                </Link>
                <Link
                  href="https://www.instagram.com/dr.singh_shinedental"
                  target="_blank"
                  className="link-footer-large w-inline-block"
                >
                  <div className="text-footer-link">Instagram</div>
                  <div className="text-footer-link _2">Instagram</div>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/shinefamilydental"
                  target="_blank"
                  className="link-footer-large w-inline-block"
                >
                  <div className="text-footer-link _1">LinkedIn</div>
                  <div className="text-footer-link _2">LinkedIn</div>
                </Link>
                
              </div>
            </div>
          </div>
          <div
            id="w-node-_6c6719f6-ac3b-fee1-6a35-bdb5f72f6f06-d0446e59"
            className="right-footer"
          >
            <div className="w-layout-grid grid-footer-info">
              <div className="info-block-footer">
                <div className="label text-dark-48">Phone</div>
                <div>
                  <Link href="tel:+17783667770" className="text-dark">
                    <span>+1 778-366-7770</span>
                  </Link>
                  <br />
                  Weekdays, 9am–5pm
                </div>
              </div>
              <div className="info-block-footer">
                <div className="label text-dark-48">WhatsApp</div>
                <div className="text-dark">
                  <Link href="tel:+17783667770" className="text-dark">
                   +1 778-366-7770
                  </Link>
                </div>
              </div>
              <div className="info-block-footer">
                <div className="label text-dark-48">Address</div>
                <div> 20654 Fraser Hwy Unit #1, Langley, BC V3A 4G5, Canada</div>
              </div>
              <div className="info-block-footer">
                <div className="label text-dark-48">Email</div>
                <div>Info@langleycaredental.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-tile">
          <div className="left-bottom-footer">
            <Link
              href="/"
              aria-current="page"
              className="brand-logo w-nav-brand w--current text-2xl font-bold text-center"
            >
              Langley Dental
            </Link>
            <div className="footer-bottom-left text-xs">
              <p className="!mb-0 !text-sm">
                <b> © 2014-2025 Langley Dental </b> | All Rights
                Reserved. Design By{" "}
                <Link
                  className="PULSE"
                  href="https://www.hexbytes.in"
                  target="_blank"
                >
                  HexBytes
                </Link>
              </p>
            </div>
          </div>
          <div className="right-bottom-footer">
            <Link href="/terms" className="label-small text-dark-64">
              Terms
            </Link>
            <div className="label-small text-dark-64">·</div>
            <Link
              href="/privacy-policy"
              className="label-small text-dark-64"
            >
              Privacy Policy
            </Link>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
