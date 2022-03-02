import React from "react";
import styles from "../../styles/Section.module.scss";
import SearchSection from "./Subsections/SearchSectionComponent";
import AdvantagesSection from "./Subsections/AdvantagesSectionComponent";
import ConditionsSection from "./Subsections/ConditionsSectionComponent";
import CompaniesSection from "./Subsections/CompaniesSectionComponent";
import OffersSection from "./Subsections/OffersSectionComponent";
import TestimonialsSection from "./Subsections/TestimonialsSectionComponent";
import StepsSection from "./Subsections/StepsSectionComponent";

function Section(){

    return (
        <div>
            <SearchSection/>
            <AdvantagesSection/>
            <StepsSection/>
            <div className={styles.emptySection}>
                {/* <div className={styles.steps}></div> */}
                <div className={styles.stepsImage}></div>
            </div>
            <ConditionsSection/>
            <CompaniesSection/>
            <OffersSection/>
            <TestimonialsSection/>
            
        </div>
    )
}

export default Section;