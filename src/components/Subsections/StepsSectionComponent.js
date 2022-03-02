import React from 'react';
import { Typography } from '@mui/material';
import styles from "../../../styles/subsections/StepsSection.module.scss";

function StepsSection(){
    return (
        <div className={styles.steps}>
            <Typography variant="body1" className={styles.title}>
                Vender tu piso nunca fue tan fácil
            </Typography>
            <Typography variant="body2" className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
        </div>
    )
}

export default StepsSection;