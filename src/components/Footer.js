import React from "react";
import "../App.css"
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";


function Footer() {
    return (
<footer className="footer">
        <p className="footerLogos">
        <a href="https://github.com/jaydenprime"><img className="logos" src={github} alt="github" title="github"></img></a>
        <a href="https://www.linkedin.com/in/jayden-trinh-b0a58b243/"><img className="logos" src={linkedin} alt="linkedin" title="linkedin"></img></a>
        <a href="https://www.instagram.com/jaydenprime/"><img className="logos" src={instagram} alt="instagram" title="instagram"></img></a>
    </p>
</footer>
    )
}

export default Footer;