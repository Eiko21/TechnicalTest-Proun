import React from "react";
import { Typography } from "@mui/material";
import styles from "../../../styles/subsections/AdvantagesSection.module.scss";
import { advantages } from '../../constants/advantagesConstants';
import Advantage from "../AdvantageComponent";

function getAdvantages(){
    return advantages.map(advantage => {
        return <Advantage advantage={advantage} />
    });
}

function AdvantagesSection(){
    return (
        <div className={styles.container}>
            <div className={styles.advantagesSection}>
                <div className={styles.titleSubtitle}>
                    <Typography variant="body1" className={styles.title}>
                        En Clicasa sólo hay ventajas
                    </Typography>
                    <Typography variant="body2" className={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                </div>
                {getAdvantages()}
            </div>
        </div>
    );
}

export default AdvantagesSection;