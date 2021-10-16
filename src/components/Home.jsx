import React, { Component } from 'react'
import Navbar from './Navbar'
import './../css/Home.css'
import First from './First'
import About from './About'
import Contact from './Contact'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='circle'></div>

                <div className='p-33'>
                <First />
                <About />
                

                </div>
                <Contact />
             
            </div>
        )
    }
}
