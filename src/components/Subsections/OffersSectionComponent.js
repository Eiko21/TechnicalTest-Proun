import React from 'react';
import { Typography } from '@mui/material';
import styles from "../../../styles/subsections/OffersSection.module.scss";
import RoundButtonComponent from '../Button/RoundButtonComponent';
import { buttonData } from "../../constants/buttonsConstants";

function OffersSection(){
    return (
        <div className={styles.offers}>
            <Typography variant="body1" className={styles.title}>
                ¿Buscas casa? También tenemos las mejores ofertas
            </Typography>
            <Typography variant="body2" className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <RoundButtonComponent props={buttonData[2]} />
        </div>
    )
}

export default OffersSection;