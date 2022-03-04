import React from "react";
import { Button } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import styles from "../../../styles/button/Button.module.scss";

function RoundButtonComponent({props}){

    const { label, href, style, withIcon } = props;
    
    return (
        <Button to={href} key={label} variant="contained" className={style}>
            {label}
            {withIcon && <PlayCircleIcon className={styles.playButton}/>}
        </Button>
    )
}

export default RoundButtonComponent;