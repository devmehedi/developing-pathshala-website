import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div>
            <div className=" banner-heading">
                <div className="my-5 p-5 header-div">
                    <h2>Web Design and Development Services</h2>
                    <p className="my-5">
                        We have technology experts who have mastered everything from
                        documentation to custom mobile app development & custom web design
                        and development to deployment. Be it a website, mobile app or
                        software, we bet, you will not get a better solution from anywhere
                        else!
                    </p>
                    <Link as={Link} to="/services">
                        <button className="btn" onClick="">
                            Services
                        </button>
                    </Link>
                </div>
                <div className="img-div">
                    <img
                        src="https://www.8therate.com/wp-content/uploads/2021/05/above-fold-mockup.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;