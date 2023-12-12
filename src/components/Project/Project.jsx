import React, { forwardRef } from 'react'
import './Project.style'

const Project = forwardRef((props, ref) => {
    return (
        <div id='Project' ref={ref}>
            Project
        </div>
    )
})

export default Project;