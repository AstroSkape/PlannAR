import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/PlannAR.mp4" autoPlay loop muted />
            <h1>Design any event</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch video <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
