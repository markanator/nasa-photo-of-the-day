import React from "react";
import "./footerStyles.css";

export default function Footer() {
    return (
        <div className="Footer">
            <svg viewBox="0 0 1440 82" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 18L120 12.7C240 6.99997 480 -3.00003 720 1.99997C960 6.99997 1200 29 1320 39.3L1440 50V82H1320C1200 82 960 82 720 82C480 82 240 82 120 82H0V18Z"></path>
            </svg>
            <p>© 2020 Mark Ambrocio</p>
            <div className="social-icons">
                <a href="https://github.com/markanator">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/mark-ambro/">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
}