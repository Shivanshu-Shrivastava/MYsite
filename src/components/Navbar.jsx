import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light f-600">
            <div class="navbar-brand " href="#">Shivanshu</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className='d-flex justify-content-center w-100'>
                    <a href='#contact' className='linkB pb-1 mr-4'>Contact Me</a>
                    <a href='#about' className='linkB pb-1'>About Me</a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
