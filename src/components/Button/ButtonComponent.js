import React from "react";
import { Button } from "@mui/material";
import styles from "../../../styles/button/Button.module.scss";

function ButtonComponent(props){

    const { label, to, style } = props
    
    return (
        <Button to={to} key={label} className={style}>{label}</Button>
    )
}

export default ButtonComponent;