import React, { forwardRef } from 'react'
import './About.style'

const About = forwardRef((props, ref) => {
    return (
        <div id='About' ref={ref}>
            About
        </div>
    )
})

export default About;
