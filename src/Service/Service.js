import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';
const Service = (props) => {
    const { title, discription, img, learnMore, price } = props.service;
    console.log(learnMore)
    const history = useHistory();
    const handleClick = () => {
        history.push(`${learnMore}`);
    }
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{discription}</p>
            <button onClick={handleClick}>Lets Go</button>
            <h3>Price: ${price}</h3>
        </div>
    );
};

export default Service;