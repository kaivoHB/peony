import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer >
            <h5 className='ms-5'>&copy; by Kai 2023</h5>
            <div className='me-5'>
            <a href='https://www.linkedin.com/in/kaivo/' target='_blank'><i className="fs-5 fa-brands fa-linkedin-in"></i></a>
                <a href='https://github.com/kaivoHB' target='_blank'><i className="fs-5 fa-brands fa-github ms-3"></i></a>
            </div>
        </footer>
    )
}

export default Footer