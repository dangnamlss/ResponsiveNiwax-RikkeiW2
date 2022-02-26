import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'

function Footer() {
    return(
        <div classNameName="footer-wrapper">
            <section className="footer">
                <div className="footer-container">
                    <div className="brand-logo">
                        <a href=""><i className="fab fa-facebook"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                        <a href=""><i className="fab fa-linkedin"></i></a>
                        <a href=""><i className="fab fa-youtube"></i></a>
                        <a href=""><i className="fab fa-pinterest-p"></i></a>
                        <a href=""><i className="fab fa-vimeo-v"></i></a>
                        <a href=""><i className="fab fa-dribbble"></i></a>
                        <a href=""><i className="fab fa-behance"></i></a>
                    </div>
                    <br/>
                    <br/>
                    <p>© 2020-2022. All Rights Reserved By Rajesh Doot</p>
                </div>
            </section>
        </div>
    )
}

export default Footer