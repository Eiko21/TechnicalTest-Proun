import React from 'react';
import { Typography } from '@mui/material';
import styles from "../../../styles/subsections/StepsSection.module.scss";
import { steps } from "../../constants/stepsConstants";
import StepCard from '../Card/StepCard';

function getSteps(){
    return steps.map(step => {
        return <StepCard props={step} />
    })
}

function StepsSection(){
    return (
        <div className={styles.stepsContainer}>
            <div className={styles.steps}>
                <Typography variant="body1" className={styles.title}>
                    Vender tu piso nunca fue tan fácil
                </Typography>
                <Typography variant="body2" className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <div className={styles.stepsContainer}>
                    {getSteps()}
                    <div className={styles.stepsImage}></div>
                </div>
            </div>
        </div>
    )
}

export default StepsSection;