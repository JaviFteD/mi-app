import React from 'react'
import logo from '../img/Capa_1-2.png'
import '../css/header.css'
function Header () {
    return(
        <section>
        <div className="position">
            <div className="logo">
                <img className="img1" src={logo} alt=""/>
            </div>
        </div>
    </section>
    )
}


export default Header