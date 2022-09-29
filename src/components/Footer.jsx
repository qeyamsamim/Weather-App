import React from 'react'
import { FaGithub } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date();
    return <footer>
        <p className="mb-1">Weather Application - Copyright © {currentYear.getFullYear()}</p>
        <h6>Ahmad Samim Qeyam <a href="https://github.com/qeyamsamim" target="_blank"><FaGithub /></a></h6>
    </footer>
}

export default Footer;