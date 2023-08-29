import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="bg-secondary">
        <p className="footer-title">Connect With US:</p>
        <ul>
          <div className="row">
            <div className="col-sm">
              <a href="#">Facebook</a>
            </div>
            <div className="col-sm">
              <a href="#">Twitter</a>
            </div>
            <div className="col-sm">
              <a href="#">Instagram</a>
            </div>
            <div className="col-sm">
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </ul>
        <p>
          © 2015-2023 Qualcomm Technologies, Inc. and/or its affiliated
          companies. Snapdragon and Qualcomm branded products are products of
          Qualcomm Technologies, Inc. and/or its subsidiaries. Qualcomm patented
          technologies are licensed by Qualcomm Incorporated. Note: Certain
          product kits, tools and materials may require you to accept additional
          terms and conditions before accessing or using those items. References
          to "Qualcomm" may mean Qualcomm Incorporated, or subsidiaries or
          business units within the Qualcomm corporate structure, as applicable.
          Qualcomm Incorporated includes our licensing business, QTL, and the
          vast majority of our patent portfolio. Qualcomm Technologies, Inc., a
          subsidiary of Qualcomm Incorporated, operates, along with its
          subsidiaries, substantially all of our engineering, research and
          development functions, and substantially all of our products and
          services businesses, including our QCT semiconductor business.
          Materials that are as of a specific date, including but not limited to
          press releases, presentations, blog posts and webcasts, may have been
          superseded by subsequent events or disclosures. Nothing in these
          materials is an offer to sell any of the components or devices
          referenced herein.
        </p>
        <span className="copy-right">All rights are Reserved &copy; 2023.</span>
      </footer>
    );
  }
}

export default Footer;
