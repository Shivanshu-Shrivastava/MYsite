import React from 'react'
import img from './../Img/s.png'

function Logo() {
    return (
        <div style={{height:100+'vh',display:'flex'}} classname='d-flex '>
            <img className='logo' src={img}  />
        </div>
    )
}

export default Logo
