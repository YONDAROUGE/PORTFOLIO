import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/changer.png'
import AVTR2 from '../../assets/img2.png'
import AVTR3 from '../../assets/img9.png'
import AVTR4 from '../../assets/changer.png'

// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
    {
        avatar: AVTR1,
        name: 'Michelle',
        review: 'I was so happy with the data analysis NICCI conducted when I carried out my survey. No regrets.'
    },
    {
        avatar: AVTR2,
        name: 'Kelton',
        review: 'NICCI knows exactly what he is doing he is the absolute best.'
    },
    {
        avatar: AVTR3,
        name: 'Jake Allen',
        review: 'I was very happy with the work that NICCI did on my website. He was able to take my vision and turn it into a reality. The website is exactly what I wanted and it looks great.'
    },
    {
        avatar: AVTR4,
        name: 'Hacynth',
        review: 'NICCI is very easy to work with. He was always responsive to my feedback and was always willing to make changes to the content until I was satisfied'  
    }
]

const Testimonials = () => {
    return (
        <section id='testimonial'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container" // install Swiper modules
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                navigation>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials