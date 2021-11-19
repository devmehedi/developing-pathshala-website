import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const { title, discription, img, id, price } = props.service;
    const url = `/service/${id}`;
    // console.log(id)
    // const history = useHistory();
    // const handleClick = () => {
    //     history.push(`${id}`);
    // }
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{discription}</p>
            <Link to={url}><Button>More Details</Button> </Link>
            <h3>Price: ${price}</h3>
        </div>
    );
};

export default Service;