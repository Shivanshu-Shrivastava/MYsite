import React from 'react'
import img from './../Img/succ.jpg'

function About() {
    return (
        <div id='about' data-aos="fade-right" >
            <h1 style={{fontSize:3+'rem'}} className='text-center heading'>About Me</h1>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <div className='d-flex pt-md-4  px-md-4 p-0 flex-column'>
                        <h5 className='text-justify'>
                            Hi! I am Shivanshu Shrivastava student at MITS currently pursuing B.Tech in Automobile Engineering
                            I've done two Internships , first from Protrainy where I've done front End Development and design CV Builder or Job Portal websites and Second Internship from
                            Stickman Technology where I was a Full stack Deveoloper and design Email sender app using Nodemailer package.
                        </h5>
                        <div>
                            <h3 className='my-3'>My Skills are :-</h3>
                                
                                <table class="table table-borderless">

                                    <tbody>
                                        <tr>
                                            <td className=''>Python</td>
                                            <td className=''>Html</td>
                                            <td className=''>CSS</td>
                                        </tr>
                                        <tr>
                                            <td className=''>JavaScript</td>
                                            <td className=''>Django</td>
                                            <td className=''>AWS</td>
                                        </tr>
                                        <tr>
                                            <td className=''>ReactJS</td>
                                            <td className=''>MangoDB</td>
                                            <td className=''>ExpressJS</td>
                                        </tr>
                                        <tr>
                                            <td className=''>NodeJS</td>
                                            <td className=''>Bootstrap</td>
                                            <td className=''>Tailwind CSS</td>
                                        </tr>
                                    </tbody>
                                </table>



                            
                        </div>
                        <div>
                        <a target='_blank' href='https://drive.google.com/file/d/1SgAQMx1gDCERQtGfKLj26b60e5cBU6az/view?usp=sharing' className='linkB '>See Resume</a><br/>

                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img className='img-fluid' src={img} />
                </div>

            </div>
        </div>
    )
}

export default About
