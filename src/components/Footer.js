import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>Northcoders News</strong> by <a href="https://www.linkedin.com/in/ben-whitfield-9995a015/">Ben Whitfield</a>.
      </p>
        <p>View the source code <a href="https://github.com/BIWhitfield/northcoders-news"><strong>here</strong></a></p>

        <div>
          <a className="icon" href="https://github.com/BIWhitfield">
            <i className="fa fa-github" />
          </a>
          <a className="icon" href="https://twitter.com/uptheoldkentrd">
            <i className="fa fa-twitter" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
