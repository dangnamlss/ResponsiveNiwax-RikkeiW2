import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'
import '../main/Main.css'

function Main() {
    return(
        <div className="main-wrapper">
            <section className="introduce">
                <div className="container">
                    <div className="row justify-content-between sec1-content">
                        <div className="heading-text col-lg-6">
                            <h1>Career and Culture at Niwax</h1>
                            <br />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <br />
                            <div className="sec1-button">
                                <a href="">View Opening</a>
                            </div>
                        </div>
                       
                        <div className="sec1-pic col-lg-5" >
                            <img src="./office-1.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </section>
            <br />

            <section className="sec2">
                <div className="container">
                    <div className="head-content row">
                            <span>welcome to niwax</span>
                            <br />
                            <br />
                            <h2 style={{fontSize: '46px', fontWeight: '600px'}}>Perks To Work With Niwax</h2>
                            <br />
                            <br />
                            <p>Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="grid-item">
                                <div className="sec2-icon">
                                    <img src="./teama.svg"></img>
                                </div>
                                <div className="sec2-content-block">
                                    <h4>Reliable Service. In House Team</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="grid-item ">
                                <div className="sec2-icon">
                                    <img src="./teama.svg"></img>
                                </div>
                                <div className="sec2-content-block">
                                    <h4>Reliable Service. In House Team</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="grid-item ">
                                <div className="sec2-icon">
                                    <img src="./teama.svg"></img>
                                </div>
                                <div className="sec2-content-block">
                                    <h4>Reliable Service. In House Team</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="grid-item ">
                                <div className="sec2-icon">
                                    <img src="./teama.svg"></img>
                                </div>
                                <div className="sec2-content-block">
                                    <h4>Reliable Service. In House Team</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="grid-item ">
                                <div className="sec2-icon">
                                    <img src="./teama.svg"></img>
                                </div>
                                <div className="sec2-content-block">
                                    <h4>Reliable Service. In House Team</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-sm-6">
                            <div className="grid-item">
                                <div className="sec2-icon">
                                    <img src="./teama.svg"></img>
                                </div>
                                <div className="sec2-content-block">
                                    <h4>Reliable Service. In House Team</h4>
                                    <p>In vel hendrerit nisi. Vestibulum eget risus velit.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="sec3">
                <div className="container">
                    <div className="head-content">
                        <span>JOBS</span>
                        <br />
                        <br />
                        <h2 style={{fontSize: '46px', fontWeight: '600px'}}>Current Openings</h2>
                        <br />
                        <p>08 Sep 2020 Latest Jobs</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="button-container">
                            <div className="extent-button" style={{borderBottom: 'none'}}>
                                <a href="">Web & Visual Designer - 2 Post</a>
                            </div>
                            <div className="extent-button">
                                <a href="">Head of UX and Design - 3 Post</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sec4">
                <div className="container">
                    <div className="row sec4-form">
                        <div className="sec4-heading-text col-lg-6">
                            <h2>Get New Insights Weekly</h2>
                            <br />
                            <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your email</p>
                        </div>
                        <div className="col-lg-6 v-center">
                            <form>
                                <div className="email-form">
                                    <input type="text" className="email-input" placeholder="Email Your Address" />
                                    <button className="sub-button">Subcribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec5">
                <div className="container">
                    <div className="row" style={{marginTop: '80px'}}>
                        <div className="sec5-grid-item col-lg-3 col-sm-6">
                            <img src="./logo.png" alt="" />
                            <br />
                            <br />
                            <br />
                            <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your email</p>
                            <div className="sec1-button">
                                <a href="" style={{color: 'black'}}>Become Partner</a>
                            </div>
                        </div>

                        <div className="sec5-grid-item col-lg-3 col-sm-6">
                            <h4>Contact Us</h4>
                            <br />
                            <ul>
                                <li>
                                    <div className="contact-list">
                                        <i className="fas fa-envelope"></i>
                                        <div className="contact-content">
                                            <h5>Email</h5>
                                            <a href="">info@businessname.com</a>
                                        </div>
                                    </div>
                                </li>
                                <br />
                                <li>
                                    <div className="contact-list">
                                        <i className="fas fa-phone-alt"></i>
                                        <div className="contact-content">
                                            <h5>Phone</h5>
                                            <a href="">+1 0000 000 000</a>
                                        </div>
                                    </div>
                                </li>
                                <br />
                                <li>
                                    <div className="contact-list">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div className="contact-content">
                                            <h5>Address</h5>
                                            <a href="">123 Business Centre London SW1A 1AA</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="sec5-grid-item col-lg-3 col-sm-6">
                            <h4>Company</h4>
                            <br />
                            <div className="company-list">
                                <ul>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">Customer's FAQ</a></li>
                                    <li><a href="">Refund Policy</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">Terms and Conditions</a></li>
                                    <li><a href="">License & Copyright</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="sec5-grid-item col-lg-3 col-sm-6">
                            <h4>Latest Blogs</h4>
                            <div className="blog-list">
                                <ul>
                                    <li>
                                        <img src="./blog-small.jpg" alt="" />

                                        <div className="blog-content">
                                            <div className="blog-time">
                                                <i className="far fa-clock" style={{padding: '4px 4px 0px 0px'}}></i>
                                                <p>April 15, 2020</p>
                                            </div>
                                            <a href="">We Provide you Best & Creative Consulting Service</a>
                                        </div>
                                    </li>

                                    <li>
                                        <img src="./blog-small.jpg" alt="" />
                                        <div className="blog-content">
                                            <div className="blog-time">
                                                <i className="far fa-clock" style={{padding: '4px 4px 0px 0px'}}></i>
                                                <p>April 15, 2020</p>
                                            </div>
                                            <a href="">We Provide you Best & Creative Consulting Service</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="sec6">
                <div className="container">
                    <div className="row v-center">
                        <div className="sec6-content col-lg-4 v-center">
                            <h5>Top App Development Companies</h5>
                            <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your email</p>
                        </div>

                        <div className="col-lg-8 v-center row badge-container">
                            <ul>
                                <li><img src="./badges-a.png" alt="" /></li>
                                <li><img src="./badges-a.png" alt="" /></li>
                                <li><img src="./badges-a.png" alt="" /></li>
                                <li><img src="./badges-a.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main