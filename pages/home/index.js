import React from "react";
import Header from "../../src/components/HeaderComponent";
import Footer from "../../src/components/FooterComponent";
import Section from "../../src/components/SectionComponent";
import { headerChoices } from "../../src/constants/headerChoicesConstants";

function Home(){

    return (
        <div>
            <Header choices={headerChoices} />
            <Section/>
            <Footer/>
        </div>
    )
}

export default Home;