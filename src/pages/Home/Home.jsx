import React from 'react';
import About from './About/About.jsx';
import Services from './Services/Services.jsx';
import Contact from './Contact/Contact.jsx';
import HeroArea from './HeroArea/HeroArea.jsx';

const Home = () => {
    return (
        <div>
            <HeroArea />
            <About />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;