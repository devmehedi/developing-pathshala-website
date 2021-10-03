import React from 'react';
import './Service.css';
const Service = (props) => {
    const { title, discription, img, learnMore, price } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{discription}</p>
            <button onClick={learnMore}>Lets Go</button>
            <h3>Price: ${price}</h3>
        </div>
    );
};

export default Service;