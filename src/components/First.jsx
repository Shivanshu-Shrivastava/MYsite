import React from 'react'
import img from './../Img/int.png'


function First() {
    return (
        
            <div data-aos="" className='row'>
                    
                    <div className='col-sm-12 mt-md-5 mt-sm-0 d-flex flex-column col-md-6'>

                        <h4 className='text-center'>Hello I'm </h4>
                        <h1 className='text-center'>Shivanshu Shrivastava</h1>
                        <h4 className='text-center'>a Full Stack Developer</h4>
                <div className='trian m-auto'></div>
                    
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <img className='img-fluid' src={img} />
                    </div>
                </div>
    )
}

export default First
