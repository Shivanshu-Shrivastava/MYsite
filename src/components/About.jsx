import React from 'react'
import img from './../Img/succ.jpg'

function About() {
    return (
        <div id='about' data-aos="fade-right" >
            {/* <h1 style={{fontSize:3+'rem'}} className='text-center heading'>About Me</h1> */}
            <div className='row'>
                <div className='col-md-4 col-sm-12'>
                    {/* <img className='img-fluid' src={img} /> */}
                    <h1 style={{ fontSize: 3 + 'rem' }} className='text-center heading'>About Me</h1>
                    {/* <hr /> */}

                </div>
                <div className='col-md-6 mx-auto  col-sm-12'>
                    <div className='d-flex pt-md-4  px-md-4 p-0 flex-column'>
                        <p className='text-justify'>
                            Hi! I am Shivanshu Shrivastava, I've completed my Higher Education from Time School and currently pursuing B.Tech in Automobile Engineering from Madhav Institute of Technology & Science.<br />
                            I've done three internships from reputated companines.
                            In my first internship I was a front end developer and it was a great experience, learned how to manage time and how to write code with comments<b>(*most important)</b>.Here my job was to design CV builder and job portal websites. <br />
                            From my first internship experience, I survived the trauma of time management in my next internships(😁 just kidding).<br />
                            In my second internship I was a full stack developer and designed an email sender app using the nodemailer package. It was only a one month internship so nothing much happened here.<br />
                            Third internship was quite dangerous with fun here i designed a real-time dashboard and handled the integration of REST API and Database (MongoDB). And also Used Mqtt.Js for the implementation of the IoT part.
                            
                        </p>
                        <div>
                            {/* <h3 className='my-3'>My Skills are :-</h3> */}






                        </div>
                        <div>
                            <a target='_blank' href='https://drive.google.com/file/d/1VLILHdM0MOuK7bM8gODY8rD4e6eZsh3x/view?usp=sharing' className='linkB '>See Resume</a><br />

                        </div>
                        <div className='mt-2'>
                            <a target='_blank' href='https://drive.google.com/file/d/17vvbhM1mPqsJIQ2D3BHWupyCdrVg6Wvw/view?usp=share_link' className='linkB '>See Portfolio</a><br />

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About
