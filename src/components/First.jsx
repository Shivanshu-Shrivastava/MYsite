import React from 'react'
import img from './../Img/int.png'


function First() {
    return (
        
            <div className='row'>
                    
                    <div className='col-sm-12 my-auto col-md-6'>

                        <h2 className='text-center'>Hello I am </h2>
                        <h1 className='text-center'>Shivanshu</h1>
                <div className='trian'></div>
                    
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <img className='img-fluid' src={img} />
                    </div>
                </div>
    )
}

export default First
