import React from 'react'
import { ArrowBox, ArrowBtn, ArrowContainer } from './Arrow.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Arrow({ onClickHandler }) {

    return (
        <ArrowBox>
            <ArrowContainer>
                <ArrowBtn type='button'></ArrowBtn>
                <FontAwesomeIcon 
                    icon={faCaretDown}
                    onClick={onClickHandler}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        width: "50%",
                        height: "50%",
                        cursor: "pointer"
                    }}
                />
            </ArrowContainer>
        </ArrowBox>
    )
}
