import React from "react";
import Wrapper from "./Wrapper";
// import SectionTitle from "./SectionTitle";

export default () => (
  <footer className="footer">
    <Wrapper>
      <ul className="footer-wrapper">
        <li>
          <div className="f-center">
            <img
              width="54"
              src="http://tbilisi.gov.ge/images/header-logo.png"
              alt=""
            />
            Tbilisi City Hall
          </div>
          <p className="arr">2018 &copy; all rights reserved</p>
        </li>
        <li>
          <p className="inline-icon">
            <span className="ft-icon">
              <svg
                fill="#FFFFFF"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>tostongovi st. #2
          </p>
          <p className="inline-icon">
            <span className="ft-icon">
              <svg
                fill="#FFFFFF"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </span>
            +(995 32) 2 95 42 03
          </p>
          <p className="inline-icon">
            <span className="ft-icon">
              <svg
                fill="#FFFFFF"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
            hello@tml.ge
          </p>
        </li>
        <li>
          <h4 style={{ marginTop: 0 }}>Working Hours</h4>
          <p>monday-friday 10:00 – 19:00</p>
          <p>saturday 10:00 – 17:00</p>
        </li>
      </ul>
    </Wrapper>
  </footer>
);
