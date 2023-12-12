import React, { forwardRef } from 'react'
import './Main.style'

const Main = forwardRef((props, ref) => {
    return (
        <div id='Main' ref={ref}>
            Main
        </div>
    )
})

export default Main;