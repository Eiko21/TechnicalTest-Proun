import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAllTestimonialsService } from '../../service/apiService';
import TestimonialCard from '../Card/TestimonialCard';
import styles from "../../../styles/subsections/TestimonialsSection.module.scss";

function getTestimonialCards(testimonials){
    if(testimonials.length > 0){
        return testimonials.map(testimonial => {
            return <TestimonialCard testimonial={testimonial}/>;
        });
    }
}

function TestimonialsSection(){

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        getAllTestimonialsService(testimonials, setTestimonials);
    }, [])

    return (
        <div className={styles.testimonials}>
            <Typography variant="body1" className={styles.title}>
                Nuestra mejor referencia, nuestros clientes
            </Typography>
            <Typography variant="body2" className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <div className={styles.cards}>
                {getTestimonialCards(testimonials)}
            </div>
        </div>
    )
}

export default TestimonialsSection;