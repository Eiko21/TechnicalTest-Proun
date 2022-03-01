import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ButtonComponent from "./Button/ButtonComponent";
import styles from "../../styles/Header.module.scss";
import { logo, phone, whatsapp, mail } from "../constants/imagesConstants";

function getHeaderButtons(choices){
    return choices.map( ({ label, href }) => {
        return (
            <ButtonComponent key={label} label={label} to={href} />
        )
    })
}

function Header({choices}){

    return (
        <AppBar position="fixed" className={styles.header}>
            <Toolbar>
                <Image key={Math.random()} width={209} height={55} src={logo} />

                {choices.length > 0 && getHeaderButtons(choices)}
                
                <Image key={Math.random()} width={60} height={60} src={phone} className={styles.phoneImg} />
                
                <Typography key={Math.random()} variant="h6" sx={{ flexGrow: 1 }} className={styles.phoneSection}>911 123 456</Typography>
                
                <Image key={Math.random()} width={60} height={60} src={whatsapp} className={styles.whatsappImg} />
                
                <Image key={Math.random()} width={60} height={60} src={mail} className={styles.mailImg} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;