import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from "../../styles/Advantage.module.scss";
import Image from 'next/image';

function Advantage({advantage}){

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.advantage}>
            <Grid item>
                <Image key={Math.random()} width={60} height={60} src={advantage.image} />
            </Grid>
            <Grid item>
                <Typography key={Math.random()} variant="h6" className={styles.advantageTitle}>
                    {advantage.title}
                </Typography>
                <Typography key={Math.random()} variant="subtitle1" className={styles.advantageSubtitle}>
                    {advantage.description}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Advantage;