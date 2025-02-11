import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='./video/video-2.mp4' autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Get Started
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Watch <FontAwesomeIcon icon={faPlayCircle} className='fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection