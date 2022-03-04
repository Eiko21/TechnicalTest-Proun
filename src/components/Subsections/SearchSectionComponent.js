import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { arrow } from "../../constants/imagesConstants";
import styles from "../../../styles/subsections/SearchSection.module.scss";
import Search from "../Search/SearchComponent";
import RoundButtonComponent from "../Button/RoundButtonComponent";
import { buttonData } from "../../constants/buttonsConstants";

function SearchSection(){

    return (
        <div className={styles.searchSection}>
            <Typography variant="subtitle1" className={styles.title}>
                Vende tu casa en un <b>clic</b>
            </Typography>
            <div className={styles.arrowImage}>
                <Image width={74} height={70} src={arrow} />
            </div>
            <div className={styles.searcher}>
                <Search/>
            </div>
            <Typography variant="subtitle1" className={styles.subtitle}>
                Compramos tu casa directamente sin complicaciones ni preocupaciones.
            </Typography>
            <RoundButtonComponent props={buttonData[0]} />
        </div>
    )
}

export default SearchSection;