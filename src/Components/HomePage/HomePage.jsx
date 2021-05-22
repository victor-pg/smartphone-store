import React from 'react';

import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="homepage container">
            <div className="section section1">
                <div className="section1-text">
                    <div className="section-subtitle">
                        The new iPhone 12
                    </div>
                    <div className="section-title">
                        Now In Purple.
                    </div>
                </div>
                <div className="section1-img">
                    <img src={process.env.PUBLIC_URL + '/img/s1.png'} alt="da" />
                </div>
            </div>

            <div className="homepage-arrow-down">
                <div className="homepage-arrow-down-text">
                    scroll to explore
                </div>
                <span class="material-icons-outlined">arrow_downward</span>
            </div>

            <div className="section section2">
                <div className="section2-text">
                    <div className="section-subtitle">
                        The new iPad Pro
                    </div>
                    <div className="section-title">
                        Powered by M1.
                    </div>
                </div>
                <div className="section2-img">
                    <img src={process.env.PUBLIC_URL + '/img/s2.png'} alt="da" />
                </div>
            </div>

            <div className="section section3">
                <div className="section3-text">
                    <div className="section-subtitle">
                        The super smooth Galaxy Tab S7
                    </div>
                    <div className="section-title">
                        Work Hard.
                        Play Harder.
                    </div>
                </div>
                <div className="section3-img">
                    <img src={process.env.PUBLIC_URL + '/img/s3.png'} alt="da" />
                </div>
            </div>


        </div>
    );
}

export default HomePage;