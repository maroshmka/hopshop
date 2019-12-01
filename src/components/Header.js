import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-medkit"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>HopShop</h1>
                <p>Povedzte zbohom všetkým chorobám!</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('prokrastinol')}}>Prokrastinol</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('homeocukor')}}>Homeocukor</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>O nás</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Kontakt</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
