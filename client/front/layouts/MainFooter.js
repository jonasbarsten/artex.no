import React, { Component } from "react";

export default class MainFooter extends Component {
  render() {
    return (
      <footer className="page-footer white">
        <div className="divider"></div>

        <div
          className="container valign-wrapper row"
          style={{ marginBottom: 0 + "px" }}
        >
          <a
            href="https://talentnorge.no/talentutvikling/fagprogrammer/dirigentloeftet/"
            target="self"
            className="valign col s4 hoverable"
          >
            <img
              className="responsive-img"
              src="/images/logos/talentnorge.jpg"
            />
          </a>
          <a
            href="https://www.norsk-tipping.no"
            target="self"
            className="valign col s4 hoverable"
          >
            <img
              className="responsive-img"
              src="/images/logos/norsk-tipping.png"
            />
          </a>
          {/* <a
            href="https://www.sparebankstiftelsen.no/no"
            target="self"
            className="valign col s4 hoverable"
          >
            <img
              className="responsive-img"
              src="/images/logos/sparebankstiftelsen.png"
            />
          </a> */}
        </div>
        <div className="footer-copyright">
          <div className="container grey-text">
            © 2016 Copyright ArtEx
            <a className="grey-text right" href="/about">
              Om ArtEx
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
