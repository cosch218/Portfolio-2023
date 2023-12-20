import React, { forwardRef } from 'react'
import './Project.style'
import Arrow from '../Arrow/Arrow';
import { ProjectBox } from './Project.style';

const Project = forwardRef(({ onClickContact }, ref) => {
    return (
        <ProjectBox id='Project' ref={ref}>
            <Arrow onClickHandler={onClickContact}/>
            
        </ProjectBox>
    )
})

export default Project;