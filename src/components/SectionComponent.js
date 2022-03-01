import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import TestimonialCard from "./Card/TestimonialCard";
import styles from "../../styles/Section.module.scss";
import { getAllTestimonialsService } from "../service/apiService";
import Image from "next/image";
import { mapfre, inmoseguros, arrow } from "../constants/imagesConstants";

function getTestimonialCards(testimonials){
    if(testimonials.length > 0){
        return testimonials.map(testimonial => {
            return <TestimonialCard testimonial={testimonial}/>;
        });
    }
}

function Section(){

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        getAllTestimonialsService(testimonials, setTestimonials);
    }, [])

    return (
        <div>
            <div className={styles.searchSection}>
                <Typography variant="subtitle1" className={styles.principalTitle}>
                    Vende tu casa en un <b>clic</b>
                </Typography>
                <div className={styles.arrowImage}>
                    <Image width={74} height={70} src={arrow} />
                </div>
                <div className={styles.searcher}>

                </div>
                <Typography variant="subtitle1" className={styles.blueSectionSubtitle}>
                    Compramos tu casa directamente sin complicaciones ni preocupaciones.
                </Typography>
            </div>
            <div className={styles.emptySection}>
                <div className={styles.advantages}>
                    {"fjisfaigvbfiuvndfnvisnbiubnxnbifdninjaibiuenfeoinfviusngoasfjisfaigvbfiuvndfnvisnbiubnxnbifdninjaibiuenfeoinfviusngoas"}
                </div>
            </div>
            <div className={styles.stepsSection}>
                <Typography variant="body1" className={styles.titleSubSection}>
                    Vender tu piso nunca fue tan fácil
                </Typography>
                <Typography variant="body2" className={styles.subtitleSection}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>
            <div className={styles.emptySection}>
                <div className={styles.stepsImage}>
                    {"fjisfaigvbfiuvndfnvisnbiubnxnbifdninjaibiuenfeoinfviusngoasfjisfaigvbfiuvndfnvisnbiubnxnbifdninjaibiuenfeoinfviusngoas"}
                </div>
            </div>
            <div className={styles.blueSectionCondiciones}>
                <Typography variant="body1" className={styles.blueSectionTitle}>
                    Las mejores condiciones del mercado inmobiliario
                </Typography>
                <Typography variant="body2" className={styles.blueSectionSubtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>
            <div className={styles.companySection}>
                <Typography variant="body1" className={styles.titleSubSection}>
                    Trabajamos con las mejores empresas
                </Typography>
                <Typography variant="body2" className={styles.subtitleSection}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <div className={styles.companiesImages}>
                    <Image width={370} height={192} src={inmoseguros}/>
                    <Image width={370} height={192} src={mapfre}/>
                </div>
            </div>
            <div className={styles.blueSection}>
                <Typography variant="body1" className={styles.blueSectionTitle}>
                    ¿Buscas casa? También tenemos las mejores ofertas
                </Typography>
                <Typography variant="body2" className={styles.blueSectionSubtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </div>
            <div className={styles.testimonialsSection}>
                <Typography variant="body1" className={styles.titleSubSection}>
                    Nuestra mejor referencia, nuestros clientes
                </Typography>
                <Typography variant="body2" className={styles.subtitleSection}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <div className={styles.testimonialCards}>
                    {getTestimonialCards(testimonials)}
                </div>
            </div>
            
        </div>
    )
}

export default Section;