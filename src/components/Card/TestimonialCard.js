import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { client } from "../../constants/imagesConstants";
import styles from "../../../styles/card/Card.module.scss";

function TestimonialCard({testimonial}){
    return (
        <Card key={testimonial.id} className={styles.card}>
            <CardMedia
                component="img"
                height="140"
                image={client}
                alt="CliCasa client"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">{testimonial.description}</Typography>
                <Typography gutterBottom variant="h5" component="div">{testimonial.clientName}</Typography>
            </CardContent>
        </Card>
    )
}

export default TestimonialCard;