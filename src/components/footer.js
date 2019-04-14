import React from 'react';
import { Link } from "gatsby";

const footer = () => {
  return (
    <footer className="site-footer">
      <ul className="site-footer__list">
        <li className="site-footer__item"> <Link to="/about" className="site-footer__link">About</Link></li>
        <li className="site-footer__item"> <Link to="/contact" className="site-footer__link">Contact</Link></li>
      </ul>
      <select name="lang-select" id="lang-select" className="lang-select">
        <option value="ENGLISH">ENGLISH</option>
        <option value="FRENCH">FRENCH</option>
      </select>
    </footer>
  )
}

export default footer;