import React from 'react'
import './Footer.css'
import footer_logo from '../../photo/logo_big.png'
import instagram_icon from '../../photo/instagram_icon.png'
import pintester_icon from '../../photo/pintester_icon.png'
import whatsapp_icon from '../../photo/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt='' />
            <p>Myshopper</p>
        </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contect</li>

      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
            <img src={instagram_icon} alt=''/>
            

        </div>
        <div className="footer-icon-container">
            <img src={pintester_icon} alt=''/>
            

        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_icon} alt=''/>
            

        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024-All right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
