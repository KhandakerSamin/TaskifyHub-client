import React from 'react';
import Banner from '../Components/Banner';
import UserTypesSection from '../Components/UserTypesSection ';
import FAQ from '../Components/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UserTypesSection></UserTypesSection>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;