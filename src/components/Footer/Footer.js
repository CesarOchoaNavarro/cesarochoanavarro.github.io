import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div class="footer-container">
            <footer class="footer-body">
                <div>
                    <section>
                        <a
                            href="https://www.instagram.com/_cesarochoa/"
                            target="_blank"
                            ><i class="fa fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cesaron/"
                            target="_blank"
                            ><i class="fa fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/CesarOchoaNavarro"
                            target="_blank"
                                ><i class="fa fa-github"></i>
                        </a>
                    </section>
                </div>
                    <div class="copyright">
                        © 2022 All Rights Reserved
                        <br></br>Created by 
                        <a class="copyright-link" target="_blank" href="https://www.linkedin.com/in/cesaron/"> Cesar Ochoa Navarro</a>
                    </div>
            </footer>
        
        </div>
)}

export default Footer