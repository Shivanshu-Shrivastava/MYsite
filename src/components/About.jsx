import React from 'react'
import img from './../Img/succ.jpg'

function About() {
    return (
        <div id='about' data-aos="fade-right" >
            <h1 className='text-center'>About Me</h1>
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
                                            <td className='fixco'>Python</td>
                                            <td className='fixco'>Html</td>
                                            <td className='fixco'>CSS</td>
                                        </tr>
                                        <tr>
                                            <td className='fixco'>JavaScript</td>
                                            <td className='fixco'>Django</td>
                                            <td className='fixco'>AWS</td>
                                        </tr>
                                        <tr>
                                            <td className='fixco'>ReactJS</td>
                                            <td className='fixco'>MangoDB</td>
                                            <td className='fixco'>ExpressJS</td>
                                        </tr>
                                        <tr>
                                            <td className='fixco'>NodeJS</td>
                                            <td className='fixco'>Bootstrap</td>
                                            <td className='fixco'>Tailwind CSS</td>
                                        </tr>
                                    </tbody>
                                </table>



                            
                        </div>
                        <div>
                        <a target='_blank' href='https://drive.google.com/file/d/1OMYDp8XoqGPaOTf3i6HnZNyQ5rE-4_Wk/view?usp=sharing' className='linkB pb-2'>See Resume</a><br/>

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
