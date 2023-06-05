import React from 'react'
import CV from '.././../assets/CPA.pdf'

const CTA =() => {
    return(
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Lets's Discuss</a>
        </div>
    )
}

export default CTA