import React from "react";
import { Typography } from "@mui/material";
import styles from "../../../styles/subsections/ConditionsSection.module.scss";

function ConditionsSection(){
    return (
        <div className={styles.conditions}>
            <Typography variant="body1" className={styles.title}>
                Las mejores condiciones del mercado inmobiliario
            </Typography>
            <Typography variant="body2" className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
        </div>
    )
}

export default ConditionsSection;