import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Raj Jagtap</h2>
        <p><a href="mailto:rjagtap@purdue.edu">rjagtap@purdue.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Raj. I love building new things.
        I am a <a href="https://www.cs.purdue.edu">Purdue CS</a> student pursuing MS degree.
        I graduated from <a href="https://iitgoa.ac.in">IIT Goa</a> with a BTech degree in Computer Science and Engineering.
        Previously, I was a Software Developer at <a href="https://www.qualcomm.com">Qualcomm</a>, <a href="https://www.wundermanthompson.com">Wunderman Thompson Commerce</a>, and <a href="https://www.arm.com">Arm</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Raj Jagtap <Link to="/">jagtapraj123.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
