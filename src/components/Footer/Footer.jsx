import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="Youtube" className='icon'/>
        <img src={facebook_icon} alt="Facebook" className='icon'/>
        <img src={instagram_icon} alt="Instagram" className='icon'/>
        <img src={twitter_icon} alt="Twitter" className='icon'/>
      </div>
      <ul >
        <li>Audio Description</li>
        <li>help Center</li>
        <li>Gift cards</li>
        <li>Media center</li>
        <li>Investor relation</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal notices</li>
        <li>Cookie preferences</li>
        <li>Corporate information</li>
        <li>Contact us</li>
        
      </ul>
      <p className="copyright-text">&copy; 1997-2023, Netflix, Inc</p>

      
    </div>

  )
}

export default Footer
