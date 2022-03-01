import React from "react";
import { Button } from "@mui/material";
import styles from "../../../styles/button/Button.module.scss";

function RoundButtonComponent(props){

    const { label, to } = props
    
    return (
        <Button to={to} key={label} className={styles.searchButton}>{label}</Button>
    )
}

export default RoundButtonComponent;