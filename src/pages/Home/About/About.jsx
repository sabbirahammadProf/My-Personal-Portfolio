import React from 'react';
import about from '../../../images/about.png';

const About = () => {
    return (
        <section className="my-5" id="about">
            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <img src={about} alt="" className="w-75" />
                    </div>
                    <div className="col-md-6">
                        <h5 className="fw-lighter">Who I am?</h5>
                        <h1 className="text-black text-uppercase fw-bolder">About Me</h1>
                        <p className="h5 fw-lighter mt-4 lh-base">I am Sabbir Ahammad a Junior front end web developer. I have skills in HTML5, CSS3, Vanilla Javascript and also I am familiar with Javascript ES6. Recently I completed some projects using React Js, Express Js, MongoDB. I created many projects using React JS and I am quite familiar with the Firebase Authentication system.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;