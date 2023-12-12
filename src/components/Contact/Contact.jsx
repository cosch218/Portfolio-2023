import React, { forwardRef } from 'react'
import './Contact.style'

const Contact = forwardRef((props, ref) => {
    return (
        <div id='Contact' ref={ref}>
            Contact
        </div>
    )
})

export default Contact;