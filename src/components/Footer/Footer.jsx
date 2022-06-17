import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer_1">
        <div className="container">
          <div className="nav_footer">
            <div className="list_footer">
              <h6>Figma</h6>
              <ul>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div className="list_footer">
              <h6>Use Cases</h6>
              <ul>
                <li>UI design</li>
                <li>UI design</li>
                <li>Graphic desingn</li>
                <li>Wireframming</li>
                <li>Diagramming</li>
                <li>Brainstorming</li>
                <li>Templates</li>
                <li>Remote design</li>
                <li>Agencies</li>
                <li>Figma for education</li>
              </ul>
            </div>
            <div className="list_footer">
              <h6>Resources</h6>
              <ul>
                <li>Blog</li>
                <li>Best practices</li>
                <li>Support</li>
                <li>Developers</li>
                <li>Learn design</li>
                <li>Downloads</li>
                <li>What'a new</li>
                <li>Releases</li>
                <li>Careees</li>
              </ul>
            </div>
            {/* <div className="list_footer">
              <h6>Compare</h6>
              <ul>
                <li>Sketch</li>
                <li>Adobe Xd</li>
                <li>Invision Studio</li>
                <li>Framer</li>
                <li>Design on Windows</li>
                <li>Miro</li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
