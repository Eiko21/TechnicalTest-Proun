import React from "react";
import Image from "next/image";
import { logo, phone, mail, facebook, twitter, linkedin, youtube } from "../constants/imagesConstants";
import { Grid, Typography } from "@mui/material";
import styles from "../../styles/Footer.module.scss";
import { Copyright } from "@mui/icons-material";

function Footer(){

    return (
        <div className={styles.contactSection}>

            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.phoneEmailInformation}>
                <Grid item>
                    <Image key={Math.random()} width={209} height={55} src={logo} />
                </Grid>
                <Grid item className={styles.contactInfo}>
                    <Image key={Math.random()} width={60} height={60} src={phone} />
                    <Typography key={Math.random()} variant="h6">911 123 456</Typography>
                    <Image key={Math.random()} width={60} height={60} src={mail} />
                    <Typography key={Math.random()} variant="h6">info@clicasa.com</Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className={styles.copyrightSection}>
                <Grid item justifyContent="center" className={styles.copyrightInfo}>
                    <Copyright className={styles.copyrightIcon}/>
                    <Typography key={Math.random()} variant="h6" className={styles.copyright}>
                        2017 CLICASA. TODOS LOS DERECHOS RESERVADOS
                    </Typography>
                </Grid>
                <Grid item xs={2} className={styles.legalInfoContainer}>
                    <Typography key={Math.random()} variant="h6" className={styles.legalInfo}>Mapa web</Typography>
                    <Typography key={Math.random()} variant="h6" className={styles.legalInfo}>Contacto</Typography>
                    <Typography key={Math.random()} variant="h6" className={styles.legalInfo}>Aviso legal</Typography>
                </Grid>
                <Grid item>
                    <Image key={Math.random()} width={30} height={30} src={facebook} />
                    <Image key={Math.random()} width={30} height={30} src={twitter} />
                    <Image key={Math.random()} width={30} height={30} src={linkedin} />
                    <Image key={Math.random()} width={30} height={30} src={youtube} />
                </Grid>
            </Grid>

        </div>
    )
}

export default Footer;