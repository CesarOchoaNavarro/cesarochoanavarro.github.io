import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div>
            <footer id="footer" className="smallContainer">
                <a className="footerLink" href="http://localhost:3000">Website</a>
                <a className="footerLink" href="https://github.com/CesarOchoaNavarro/cesarochoanavarro.github.io">Github</a>
                <p id="copright"></p>
                <p id="copyright">© 2022 Cesar Ochoa Navarro</p>
            </footer>
        </div>
)}

export default Footer