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
                             Hello! I am Shivanshu Shrivastava, a B.Tech student specializing in Automobile Engineering at <strong>Madhav Institute of Technology & Science</strong>.<br />
    I completed my higher education at <strong>Time School</strong> and have gained valuable experience through three internships with reputable companies.</p>
    
    <p>In my first internship as a Front-End Developer, I worked on designing CV builder and job portal websites.<br />
    This experience significantly enhanced my coding skills, especially in writing well-documented code and improving time management.</p>
    
    <p>During my second internship as a Full-Stack Developer, I developed an email sender application using the <code>Nodemailer</code> package.<br />
    Though short in duration, this internship further solidified my backend development skills.</p>
    
    <p>My third internship was particularly exciting, as I designed a real-time dashboard and integrated REST APIs and MongoDB databases.<br />
    Additionally, I implemented IoT functionality using <code>Mqtt.js</code>, combining both backend and IoT systems seamlessly.
                        </p>
                        <div>
                            {/* <h3 className='my-3'>My Skills are :-</h3> */}






                        </div>
                        <div>
                            <a target='_blank' href='https://drive.google.com/file/d/1CHL66aA41mNwl7e5U55lt-1ah9Dl3vlS/view?usp=sharing' className='linkB '>See Resume</a><br />

                        </div>
                        <div className='mt-2'>
                            <a target='_blank' href='https://drive.google.com/file/d/1cENM5IOzPbma1JXCfoU4sMqFXOul4BKa/view?usp=share_link' className='linkB '>See Portfolio</a><br />

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About
