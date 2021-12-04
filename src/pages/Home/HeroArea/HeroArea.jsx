import React from 'react';
import img from '../../../images/headerMain.svg';
import TypeAnimation from 'react-type-animation';

const HeroArea = () => {
    return (
        <section className="hero-area">
            <div class="hero-body d-flex align-items-center">
                <div class="container-lg">
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            <h1 className="text-black fs-1">Me, <span className="ct-text-primary fw-bold">Sabbir Ahmmad</span></h1>
                            <h4 className="text-black mt-4 mb-4">I am a <TypeAnimation
                                cursor={true}
                                className="fw-bold"
                                sequence={[
                                    'Junior web developer.',
                                    2000,
                                    'React Js Developer.',
                                    2000, '']}
                                wrapper="span"
                                repeat={Infinity}
                            /></h4>
                            <button className="btn ct-btn-primary px-4 py-2 text-white shadow-none rounded-pill">Download Resume</button>
                        </div>
                        <div class="col-md-7">
                            <img src={img} alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;