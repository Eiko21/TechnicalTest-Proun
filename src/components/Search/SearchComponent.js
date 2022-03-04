import React from 'react';
import Image from 'next/image';
import { TextField } from '@mui/material';
import ButtonComponent from '../Button/ButtonComponent';
import styles from "../../../styles/search/Search.module.scss";
import buttonStyles from "../../../styles/button/Button.module.scss";
import { home } from '../../constants/imagesConstants';

function Search(){
    return (
        <div className={styles.searchContainer}>
            <div className={styles.homeImgContainer}>
                <Image width={30} height={26} src={home} />
            </div>
            <TextField 
                id="outlined-basic"
                variant='standard' 
                InputProps={{
                    disableUnderline: true
                }}  
                label="Introduce la dirección de tu casa o piso" 
                className={styles.textField} 
            />
            <ButtonComponent label={"VENDER MI INMUEBLE"} to={"/sellProperty"} style={buttonStyles.buttonIntoSearcher} />
        </div>
    )
}

export default Search;