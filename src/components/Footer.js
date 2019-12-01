import React from 'react'
import PropTypes from 'prop-types'
import Social from './Social'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <Social></Social>
        <p className="copyright">&copy; Content by HopŠup Tim. Design by: <a href="https://html5up.net">HTML5 UP</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
