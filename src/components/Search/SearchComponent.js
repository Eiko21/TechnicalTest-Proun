import React from 'react';
import { TextField } from '@mui/material';
import styles from "../../../styles/search/Search.module.scss";

function Search(){
    return (
        <div className={styles.search}>
            <TextField id="outlined-basic" variant="outlined" fullWidth label="Introduce la dirección de tu casa o piso" />
        </div>
    )
}

export default Search;