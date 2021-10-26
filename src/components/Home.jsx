import React, { Component } from 'react'
import Navbar from './Navbar'
import './../css/Home.css'
import First from './First'
import About from './About'
import Contact from './Contact'
import Logo from './Logo'
import Exper from './Exper'
import Skill from './Skill'


export default class Home extends Component {
    constructor(){
        super()
        this.state={
            logo:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
               logo:false
            })
        },2500)
    }
    render() {
        return (
            <>
            {
            this.state.logo?<Logo />: <div>
                <Navbar />
                <div className='circle'></div>

                <div className='p-33'>
                <First />
                <About />
                

                </div>
                <Skill />
                <div className="p-33">
                <Exper />

                </div>

                <Contact />
             
            </div>
            }
           
            </>
        )
    }
}
