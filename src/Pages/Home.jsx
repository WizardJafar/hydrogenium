import React from 'react'
import Header from '../Componets/MainComponents/Navbar';
import Footer from '../Componets/MainComponents/Footer';
import Navbar from '../Componets/MainComponents/Navbar';
import Section1 from '../Componets/HomeComponents/Sections/Section1';
import Section4 from '../Componets/HomeComponents/Sections/Section4';
import Section5 from '../Componets/HomeComponents/Sections/Section5';
import Section6 from '../Componets/HomeComponents/Sections/Section6';
import Section7 from '../Componets/HomeComponents/Sections/Section7';
import Section8 from '../Componets/HomeComponents/Sections/Section8';
import Section9 from '../Componets/HomeComponents/Sections/Section9';
import { Section10 } from '../Componets/HomeComponents/Sections/Section10';
import { Section11 } from '../Componets/HomeComponents/Sections/Section11';
import { Section12 } from '../Componets/HomeComponents/Sections/Section12';
import { Section13 } from '../Componets/HomeComponents/Sections/Section13';
import Section14 from '../Componets/HomeComponents/Sections/Section14';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Section1 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 />
            <Section14 />
            <Footer />
        </div>
    )
}

export default Home