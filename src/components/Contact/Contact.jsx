import React, { forwardRef } from 'react'
import './Contact.style'
import { ContactBox, Form, Title } from './Contact.style';

const Contact = forwardRef((props, ref) => {

    return (
        <ContactBox id='Contact' ref={ref}>
            <Title>Contact</Title>

            <Form
                method='POST'
                target='frAttachFiles'
                data-email='cosch218@gmail.com'
                action="https://script.google.com/macros/s/AKfycbyLbtp5sbY_97q5LixZcXJf9Eu5zymc7p8vuE5NlWaq2PJCOR3S8KYRyCtJGOZojqbUWA/exec"
            >
                <ul>
                    <li>
                        <p>Name</p>
                        <input type="text" name='name' required />
                    </li>
                    <li>
                        <p>Email</p>
                        <input type="email" name='email' required />
                    </li>
                    <li>
                        <p>Message</p>
                        <textarea name='message' required />
                    </li>
                </ul>
                <button type='submit'>send</button>
            </Form>
            <iframe 
                title="sendEmail"
                name='frAttachFiles'
                style={{display: "none"}}
            />
        </ContactBox>
    )
})

export default Contact;