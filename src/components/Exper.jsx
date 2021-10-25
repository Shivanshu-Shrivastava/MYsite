import React from 'react'
import img from './../Img/prot.png'
import img2 from './../Img/stick.jpg'

function Exper() {
    return (
        <div id='exper' data-aos="fade-left" >
            <h1 style={{ fontSize: 3 + 'rem' }} className='text-center heading'>Experience</h1>
            <section className='container'>
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
                        <div className='col-md-3 col-sm-12 d-flex'>
                            <img className='img-fluid m-auto' src={img2} />

                        </div>

                    </div>
                </aside>
            </section>
        </div>
    )
}

export default Exper
