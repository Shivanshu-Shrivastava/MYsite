import React from 'react'
import img from './../Img/succ.jpg'

function About() {
    return (
        <div id='about' data-aos="fade-right" >
            {/* <h1 style={{fontSize:3+'rem'}} className='text-center heading'>About Me</h1> */}
            <div className='row'>
            <div className='col-md-4 col-sm-12'>
                    {/* <img className='img-fluid' src={img} /> */}
            <h1 style={{fontSize:3+'rem'}} className='text-center heading'>About Me</h1>
            {/* <hr /> */}

                </div>
                <div className='col-md-6 mx-auto  col-sm-12'>
                    <div className='d-flex pt-md-4  px-md-4 p-0 flex-column'>
                        <p className='text-justify'>
                            Hi! I am Shivanshu Shrivastava, I've completed my Higher Education from Time School and currently pursuing B.Tech in Automobile Engineering from Madhav Institute of Technology & Science.<br/>
                            I've done two Internships , first from Protrainy where I've done front End Development and design CV Builder or Job Portal websites and Second Internship from
                            Stickman Technology where I was a Full stack Deveoloper and design Email sender app using Nodemailer package.
                        </p>
                        <div>
                            {/* <h3 className='my-3'>My Skills are :-</h3> */}
                                
                              



                            
                        </div>
                        <div>
                        <a target='_blank' href='https://drive.google.com/file/d/1SgAQMx1gDCERQtGfKLj26b60e5cBU6az/view?usp=sharing' className='linkB '>See Resume</a><br/>

                        </div>
                        <div className='mt-2'>
                        <a target='_blank'  href='https://drive.google.com/file/d/1OKv4wUMA4n7pFIyx0wKaqsxhW8yT707G/view?usp=drivesdk' className='linkB '>See Protfolio</a><br/>

                        </div>
                    </div>
                </div>
               

            </div>
        </div>
    )
}

export default About
