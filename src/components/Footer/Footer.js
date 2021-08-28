import React from 'react';


const Footer = () => (
    <footer>
        <div className="footer__bottom-logos">
            <a target="_blank" href="https://vk.com/startup__club"> <img className="footer-logo" src="/img/vk.svg" /></a>
            <a target="_blank" href="https://www.instagram.com/startup__club/"> <img className="footer-logo" src="/img/instagram.svg" /></a>
        </div>
        <div className="footer__bottom-text">Exchance © {new Date().getFullYear()} |&nbsp;<a href="mailto:exchance@ssau.ru">exchance@ssau.ru</a>
        </div>
    </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
