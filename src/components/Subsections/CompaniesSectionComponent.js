import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { inmoseguros, mapfre } from "../../constants/imagesConstants";
import styles from "../../../styles/subsections/CompaniesSection.module.scss";

function CompaniesSection(){
    return (
        <div className={styles.companies}>
            <Typography variant="body1" className={styles.title}>
                Trabajamos con las mejores empresas
            </Typography>
            <Typography variant="body2" className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <div className={styles.companiesImages}>
                <Image width={370} height={192} src={inmoseguros}/>
                <Image width={370} height={192} src={mapfre}/>
            </div>
        </div>
    )
}

export default CompaniesSection;