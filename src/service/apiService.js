import axios from "axios";
import { ALL_TESTIMONIALS } from "../constants/uriConstants";

export function getAllTestimonialsService(testimonials, setTestimonials){
    axios.get(ALL_TESTIMONIALS)
    .then(response => {
        setTestimonials(...testimonials, response.data);
    })
    .catch(error => {
        console.log('error == ',error);
    })
}