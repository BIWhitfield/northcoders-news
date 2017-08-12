import React from 'react';
import '../css/Header.css';

const Header = () => (
  <section className="hero is-dark bold">
    <div className="hero-body">
      <div className="container">
        <img
          className="titleImage"
          src={'https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png'}
          alt="Northcoders logo"
        />
        <h1 className="title has-text-centered">
          NEWS
      </h1>
        <h2 className="subtitle has-text-centered">
          Masquerading as fact...
      </h2>
      </div>
    </div>
  </section>
    );


export default Header;
