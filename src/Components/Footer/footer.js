import React from 'react'
import { Link } from 'react-router-dom'
import "../../Styles/footer.css"

function Footer(props) {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5 className='linksHeader'>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link  className="footerLinks" to='/about'>About</Link></li>
                            <li><Link  className="footerLinks" to='/gallery'>Gallery</Link></li>
                            <li><Link  className="footerLinks" to='/contact'>Contact</Link></li>
                            <li><Link  className="footerLinks" to='/events'>Events</Link></li>
                            <li><Link  className="footerLinks" to='/contact'>Make an Order</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5 className='socialHeader'>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a role="button" className="btn btn-link btn-tiktok" href="https://www.tiktok.com/en/"><i className="fa-brands fa-tiktok" /> tik<br />tok</a>                     
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btnPhone btn btn-link" href="tel:+12065551234"><i className="fa fa-phone fa-lg" /> 1-206-555-1234</a><br />
                        <a role="button" className="btnEmail btn btn-link" href="mailto:deesDesserts@gmail.com"><i className="fa fa-envelope-o fa-lg" /> deesDesserts@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer