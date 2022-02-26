import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'
import '../header/Header.css'

function Header() {
    return (
        <div className="header-wrapper">
            <div id="menu">
                <img src="./logo.png" id="logo" alt=""/>
                    <ul>
                        <li>
                            <a href="" className="title">HOME</a>
                            <div className="sub-menu sub-menu-list">
                                <div className="sub-menu-grid">
                                    <div className="col">
                                        <h5>Multi-Page Demo</h5>
                                        <hr/>
                                            <a href="">All demo</a>
                                            <a href="">Digital Agency</a>
                                            <a href="">Digital Agency V2</a>
                                            <a href="">Digital Agency V3</a>
                                            <a href="">Web Design Agency</a>
                                            <a href="">Digital Marketing</a>
                                            <a href="">Lead Generation Agency</a>
                                            <a href="">Landing Page V1</a>
                                            <a href="">Landing Page V1</a>
                                            <a href="">Landing Page V2</a>
                                    </div>

                                    <div className="col">
                                            <br/>
                                            <hr/>
                                                <a href="">Freelance Porfolio</a>
                                                <a href="">App Development Agency</a>
                                                <a href="">Minimal Porfolio</a>
                                                <a href="">Creative Agency</a>
                                                <a href="">Branding Agency</a>
                                                <a href="">Modern Agency</a>
                                                <a href="">Business & Startup</a>
                                                <a href="">Graphic Studio</a>

                                            </div>
                                    <div className="col">
                                        <h5>One-Page Demo</h5>
                                        <hr/>
                                        <a href="">Digital Agency</a>
                                        <a href="">Digital Agency Dark</a>
                                        <a href="">Web Design Agency</a>
                                        <a href="">Web Design Agency Dark</a>
                                        <a href="">Digital Marketing</a>
                                        <a href="">Digital Marketing Dark</a>
                                        <a href="">Lead Generation Agency</a>
                                        <a href="">Lead Generation Agency Dark</a>
                                        <a href="">Freelance Portfolio</a>
                                    </div>

                                    <div className="col">
                                        <br/>
                                        <hr/>
                                        <a href="">Freelance v2</a>
                                        <a href="">App Development Agency</a>
                                        <a href="">Minimal Portfolio</a>
                                        <a href="">Creative Agency</a>
                                        <a href="">Branding Agency</a>
                                        <a href="">Modern Agency</a>
                                        <a href="">Business & Startup</a>
                                        <a href="">Graphic Studio</a>
                                    </div>
                                </div>


                            </div>
                        </li>

                        <li>
                                <a href="" className="title menu-item">PAGE</a>
                                <div className="sub-menu sub-menu-list">

                                    <div className="sub-menu-grid">
                                        <div className="col">
                                            <a href="">About Us</a>
                                            <a href="">About Us V2</a>
                                            <a href="">Why Us</a>
                                            <a href="">Our Team</a>
                                            <a href="">Team Single</a>
                                            <a href="">Case Study</a>
                                            <a href="">Case Study Single</a>
                                        </div>
                                        <div className="col">
                                            <a href="">Mission & Vision</a>
                                            <a href="">Development Process</a>
                                            <a href="">Client Reviews</a>
                                            <a href="">Our Clients</a>
                                            <a href="">Contact Us</a>
                                            <a href="">Contact Us 2</a>
                                            <a href="">Login Page</a>
                                        </div>
                                        <div className="col">
                                            <a href="">Service Card</a>
                                            <a href="">Service Web</a>
                                            <a href="">Service Mobile App</a>
                                            <a href="">Service Digital Marketing</a>
                                            <a href="">Service Graphic</a>
                                            <a href="">Careers</a>
                                            <a href="">Shop Single</a>
                                        </div>
                                        <div className="col">
                                            <a href="">Shop Details</a>
                                            <a href="">Shop Cart</a>
                                        </div>

                                    </div>

                                </div>

                        </li>

                        <li>
                            <a href="" className="title">SHORTCODES</a>
                            <div className="sub-menu sub-menu-list">

                                <div className="sub-menu-grid">
                                    <div className="col">
                                        <a href="">Pricing</a>
                                        <a href="">Typography</a>
                                        <a href="">Buttons</a>
                                        <a href="">Office Location</a>
                                    </div>

                                    <div className="col">
                                        <a href="">FAQs</a>
                                        <a href="">Tabs</a>
                                        <a href="">404 Page</a>
                                        <a href="">Background Gradients</a>
                                    </div>

                                    <div className="col">
                                        <a href="">Header v1</a>
                                        <a href="">Header v2</a>
                                        <a href="">Header v3</a>
                                        <a href="">Header v4</a>
                                        <a href="">Footer</a>
                                    </div>

                                    <div className="col">
                                        <a href="">Hover Animation</a>
                                        <a href="">Popup Modal</a>
                                        <a href="">Lists</a>
                                        <a href="">Bootstrap Components</a>
                                    </div>
                                </div>


                            </div>
                        </li>

                        <li>
                            <a href="" className="title menu-item">PORTFOLIO</a>
                            <div className="sub-menu">
                                <a href="">Portfolio Grid 1</a>
                                <a href="">Portfolio Grid 2</a>
                                <a href="">Portfolio Wide Block</a>
                                <a href="">Portfolio Wide Block v2</a>
                                <a href="">Portfolio Details</a>
                            </div>
                        </li>
                        <li>
                            <a href="" className="title">BLOG</a>
                            <div className="sub-menu">
                                <a href="">Blog Grid 1</a>
                                <a href="">Blog Grid 2</a>
                                <a href="">Blog Right Sidebar</a>
                                <a href="">Blog Left Sidebar</a>
                                <a href="">Blog Single</a>
                            </div>
                        </li>

                        <li>
                            <a href="" className="bar-icon">
                                <div className="icon-container">
                                    <div className="menu-icon"></div>
                                    <div className="menu-icon"></div>
                                    <div className="menu-icon"></div>
                                </div>

                            </a>
                        </li>
                        <li>
                            <a href="" className="request-button">
                                Request A Quote
                            </a>
                        </li>

                        <li>
                            <div className="dark-mode">
                                <input type="checkbox"/>
                            </div>
                        </li>
                    </ul>
                </div>

            <div id="mobile-nav">
                <img src="./logo.png" id="logo" alt="" style={{marginTop: '38px'}}/>
                <input type='checkbox' className="check-box" id="nav-mobile-input" style={{display: 'none'}}></input>
                <label className="menu-bar-btn" for='nav-mobile-input'> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
                </label>
                
                <label for='nav-mobile-input' className="nav-overlay"></label>
                <div className="mobile-menu">
                    <div className="mobile-nav-header">
                        <h2 className="mobile-nav-title">
                            Niwax Menu
                        </h2>
                        <label className="nav-mobile-close" for='nav-mobile-input'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                        </label>
                    </div>
                    
                    <ul className="nav-mobile-list">
                        <li>
                            <a className="nav-mobile-link">Home</a>
                        </li>
                        <li>
                            <a className="nav-mobile-link">Pages</a>
                        </li>
                        <li>
                            <a className="nav-mobile-link">Shortcodes</a>
                        </li>
                        <li>
                            <a className="nav-mobile-link">Portfolio</a>
                        </li>
                        <li>
                            <a className="nav-mobile-link">Blog</a>
                        </li>
                    </ul>
                </div>
                

            </div>

            <div className="header-background">
                <div className="bread-inner container">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="" id="career">Career</a></li>
                    </ul>
                    <div className="bread-title">
                        <h3>Job Openings</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
        
}

export default Header