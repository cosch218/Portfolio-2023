import React, { useEffect, useState } from 'react'
import './ThemeMode.style'
import { ThemeBox, ThemeBtn } from './ThemeMode.style'

export default function ThemeMode() {
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        setTimeout(() => {setIsVisible(true)}, 3500);
    }, [])

    return (
        <div id='ThemeMode'>
            <ThemeBox
                className={ isVisible? "visible" : "" }
            >
                <ThemeBtn className='light'>○</ThemeBtn>
                <ThemeBtn className='dark'>●</ThemeBtn>
            </ThemeBox>
        </div>
    )
}
