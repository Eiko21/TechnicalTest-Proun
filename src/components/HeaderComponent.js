import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ButtonComponent from "./Button/ButtonComponent";
import styles from "../../styles/Header.module.scss";
import buttonStyles from "../../styles/button/Button.module.scss";
import { logo, phone, whatsapp, mail } from "../constants/imagesConstants";

function getHeaderButtons(choices){
    return choices.map( ({ label, href }) => {
        return (
            <ButtonComponent label={label} to={href} style={buttonStyles.searchButton} />
        )
    })
}

function Header({choices}){

    return (
        <AppBar position="fixed" className={styles.header}>
            <Toolbar className={styles.toolbar}>
                <div className={styles.logoContainer}>
                    <Image key={Math.random()} width={180} height={55} src={logo} />
                </div>

                <div className={styles.choicesContainer}>
                    {choices.length > 0 && getHeaderButtons(choices)}
                </div>
                
                <div className={styles.contactContainer}>
                    <Image key={Math.random()} width={50} height={50} src={phone} className={styles.phoneImg} />
                    <Typography key={Math.random()} variant="h6" className={styles.phoneSection}>911 123 456</Typography>
                    <div className={styles.contactFormsContainer}>
                        <Image key={Math.random()} width={50} height={50} src={whatsapp} className={styles.whatsappImg} />
                        <Image key={Math.random()} width={50} height={50} src={mail} className={styles.mailImg} />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;