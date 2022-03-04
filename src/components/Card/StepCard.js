import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from "../../../styles/card/StepCard.module.scss";

function StepCard({props}){

    const { stepNumber, title, description } = props

    return (
        <Card variant="outlined" className={styles.cardContainer}>
            <CardContent>
                <Typography color="text.secondary" className={styles.number}>{stepNumber}</Typography>
                <Typography variant="h5" component="div" className={styles.title}>{title}</Typography>
                <Typography variant="body2" className={styles.description}>{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default StepCard;