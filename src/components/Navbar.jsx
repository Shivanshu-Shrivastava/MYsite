import React from 'react'
import img from './../Img/s.png'

function Navbar() {
    function menu() {
        console.log('hi');
        const menu = document.getElementById('menu')
        const writ = document.getElementById('writ')
        menu.classList.toggle('canmenu')
        if (menu.classList.contains('canmenu')) {
            writ.innerText = 'close'
        } else {
            writ.innerText = 'menu'
        }
    }
    return (
        <nav data-aos="fade-down" class=" sticky-top navbar navbar-expand-lg navbar-light f-600">
            {/* <div class="navbar-brand " href="#">Shivanshu</div> */}
            <a class="navbar-brand" href="#">
                <img src={img} width="45" height="45" alt="" />
            </a>
            <button onClick={menu} id='menu' class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span id='writ' class=" material-icons">
                    menu
                </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <div className='d-flex justify-content-center w-100'>
                    <a href='#contact' className='linkB pb-1 mr-4'>Contact Me</a>
                    <a href='#about' className='linkB pb-1'>About Me</a>
                </div> */}
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item  ">
                        <a class="nav-link linkB  px-0 px-md-4 d-inline-block"  href="#exper">Projects </a>
                    </li>
                    
                    <li class="nav-item  ">
                        <a class="nav-link linkB px-0 px-md-4 d-inline-block" href="#about">About Me </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link linkB px-0 pl-md-4 pr-md-5 d-inline-block" href="#contact">Contact Me</a>
                    </li>
                    <li class="nav-item  ">
                        <a class="nav-link linkB px-2 px-md-3 glwbtn d-inline-block" target='_blank' 
                        href="https://drive.google.com/file/d/1e6wwWGPK3uuG5STIWZImbq6DBXIStd3H/view?usp=share_link">Resume </a>
                    </li>


                </ul>

            </div>
        </nav>
    )
}

export default Navbar
