import React from 'react'
import img from './../Img/res.png'

function Contact() {
    return (
        <div id='contact' data-aos="flip-up" className='footer'>
            <div className='mb-3'>
                <h1 className='text-center pt-2 '>Contact Me</h1>

            </div>
            <div className='row justify-content-around'>
                <div className='col-sm-12 my-auto d-flex align-item-center flex-column col-md-4'>
                    <div className='mt-3 '>
                        <h4>My Email Address</h4>
                        <a  className='linkB'>ssshrivastava2@gmail.com</a>,<br />
                        <a className='linkB'>19AU1057@mitsgwl.ac.in</a>
                    </div>
                    <div className='mt-3 '>
                        <h4>My LinkedIn Profile</h4>
                        To see ,<a href='https://www.linkedin.com/in/shivanshu-shrivastava-b1a0091b7/' target='_blank' className='linkB'>Click Here</a>

                    </div>
                    <div className='mt-3 '>
                        <h4>My GitHub Profile</h4>
                        To see ,<a href='https://github.com/Shivanshu-Shrivastava?tab=repositories' target='_blank' className='linkB'>Click Here</a>

                    </div>
                </div>
                <div className='col-sm-12 mx-auto col-md-4'>
                    <img className='img-fluid' src={img} />
                </div>
            </div>


        </div>
    )
}

export default Contact
