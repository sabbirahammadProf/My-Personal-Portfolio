import React from 'react';
import img from '../../../images/headerBg.jpg';

const HeroArea = () => {
    return (
        <section className="hero-area">
            <div class="hero-body d-flex align-items-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <h1 className="text-black custom-fs-1">I am Sabbir Ahmmad</h1>
                            <h4 className="text-black">Junior Web Developer</h4>
                        </div>
                        <div class="col-md-4">
                            <img src={img} alt="" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroArea;