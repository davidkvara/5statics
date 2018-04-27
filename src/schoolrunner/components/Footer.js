import React from "react";
import Wrapper from "./Wrapper";
import FooterMenuLink from "./FooterMenuLink";
import ArticleTitle from "./ArticleTitle";

const Footer = props => {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer-sect1">
          <div className="foot-sect1-left">
            <nav className="foot-nav">
              <FooterMenuLink>How it Works</FooterMenuLink>
              <FooterMenuLink>Team</FooterMenuLink>
              <FooterMenuLink>Blog</FooterMenuLink>
              <FooterMenuLink>Contact</FooterMenuLink>
            </nav>
            <div className="social-links">
              <FooterMenuLink>Facebook</FooterMenuLink>
              <FooterMenuLink>Linkedin</FooterMenuLink>
              <FooterMenuLink>twitter</FooterMenuLink>
            </div>
          </div>
          {/* <!-- footer section 1 inner left --> */}
          <div className="footer-sect1-right">
            <ArticleTitle />Continue your education with white papers,
            interviews, case studies &amp; more
            <p className="exp-description">
              Sign up for our monthly newsletter, the Data Digest!
            </p>
            <form>
              <input type="email" placeholder="Your email..." />
              <button>email</button>
            </form>
          </div>
          {/* <!-- foter section 1 inner right --> */}
        </div>
        {/* <!-- footer section1 --> */}
        <div className="footer-sect2">
          {/* <div className="logo" /> */}
          <h1>schoolrunner</h1>
          <div className="div data-info">Lorem ipsum dolor sit.</div>
          <div className="support">
            We support the
            <h4 style={{ margin: 0 }}>
              <a href="">Student Privacy Pledge</a>
            </h4>
            Schoolrunner LLC © 2016
          </div>
        </div>
      </Wrapper>
      {/* <!-- wrapper --> */}
    </footer>
  );
};

export default Footer;
