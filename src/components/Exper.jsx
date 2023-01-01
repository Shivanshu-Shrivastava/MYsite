import React from 'react'
import img from './../Img/prot.png'
import img2 from './../Img/stick.jpg'

function Exper() {
    return (
        <div id='exper' data-aos="fade-left" >
            {/* <h1 style={{ fontSize: 3 + 'rem' }} className='text-center heading'>Projects</h1> */}
            {/* <section className='container'>
                <aside style={{ width: 'unset' }} className='card my-4'>
                    <div className='row '>
                        <div className='col-md-4 col-sm-12 d-flex'>
                            <img width='150px' className='img-fluid m-auto' src={img} />

                        </div>
                        <div className='m col'>
                            <div className='d-flex   px-md-4 p-0 flex-column'>
                                <h5 style={{ lineHeight: 1.5 }} className='text-justify'>
                                    I did Internship at <a className='linkB ' href='https://protrainy.com/' target='_blank'>Protrainy</a> where I was a Front End Developer.
                                    at that time me and my teammate designed <a href='http://jobportal.protrainy.com/accounts/login?next=/
' target='_blank' className='linkB'>Job Portal </a> Site where students can submit their resume and search job of their choice and the recruiter gets the skilled student easily.<br /> And the second project I created is <a href='https://cvbuilder.protrainy.com/' target='_blank' className='linkB'>CV Builder  </a> site where anybody can create resume and download as PDF.



                                </h5>
                                <div>

                                </div>

                            </div>
                        </div>

                    </div>
                </aside>
                <aside style={{ width: 'unset' }} className='card my-4'>
                    <div className='row'>

                        <div className='col my-auto'>
                            <div className='d-flex   px-md-4 p-0 flex-column'>
                                <h5 style={{ lineHeight: 1.5 }} className='text-justify'>
                                    I was a Full stack Developer when I'm at <a className='linkB ' href='https://stickmantechnologies.com/' target='_blank'>Stickman Technology</a>.In this
                                    Internship I created Email sender App where admin can Email upto 1000 persons.




                                </h5>
                                <div>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 d-flex'>
                            <img className='img-fluid m-auto' src={img2} />

                        </div>

                    </div>
                </aside>
            </section> */}
            <div className='row'>
                <div className='col-md-4 col-sm-12'>
                    {/* <img className='img-fluid' src={img} /> */}
                    <h1 style={{ fontSize: 3 + 'rem' }} className='text-center heading'>Projects</h1>
                    {/* <hr /> */}

                </div>
                <div className='col-md-6 mx-auto col-sm-12'>
                    <div className='d-flex shadow-sm p-3 mb-5 bg-white rounded pt-md-4  px-md-4 p-0 flex-column'>
                        <a target='_blank' href='https://cellar23.netlify.app/' className='linkB'>Data Stored in MongoDB</a>
                        <span className='text-muted'>May 2022 - May 2022</span>
                        <p>Here you can create a account and login to landing page.</p>



                    </div>
                    <div className='d-flex shadow-sm p-3 mb-5 bg-white rounded pt-md-4  px-md-4 p-0 flex-column'>
                        <a target='_blank' href='https://ritual23.netlify.app/' className='linkB'>Health Related Site</a>
                        <span className='text-muted'>Jun 2022 - Jun 2022</span>
                        <p>It's a front end design where you can see all health related medicine.</p>



                    </div>
                    <div className='d-flex shadow-sm p-3 mb-5 bg-white rounded pt-md-4  px-md-4 p-0 flex-column'>
                        <a target='_blank' href='http://jobportal.protrainy.com/accounts/login?next=/' className='linkB'>Job Portal Site</a>
                        <span className='text-muted'>Mar 2021 - Apr 2021</span>
                        <p>This is my internship based project where I was a front end developer. In this site students can submit their resume and search for the job of their choice and due to this recruiters can easily find skilled students.</p>

                    </div>
                    <div className='d-flex shadow-sm p-3 mb-5 bg-white rounded pt-md-4  px-md-4 p-0 flex-column'>
                        <a target='_blank' href='https://cvbuilder.protrainy.com/' className='linkB'>CV Builder</a>
                        <span className='text-muted'>Feb 2021 - Mar 2021</span>
                        <p>This is also my internship based project,Here anyone can create resume and download as PDF.</p>



                    </div>


                </div>


            </div>
        </div>
    )
}

export default Exper
