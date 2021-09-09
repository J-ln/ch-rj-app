import React from 'react'
import './Footer.scss'
import SocialButton from './FooterElements/SocialButton/SocialButton'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

const Footer = () => {
  return (
        <footer className="Footer">
            <div className="FooterContainer"></div>
            <div className="SocialList">
                <SocialButton link={''} icon={InstagramIcon} />
                <SocialButton link={''} icon={FacebookIcon} />
                <SocialButton link={''} icon={TwitterIcon} />
            </div>
        </footer>
  )
}

export default Footer
