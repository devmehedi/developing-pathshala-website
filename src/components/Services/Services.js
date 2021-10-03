import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="service-container">

            <div className='service-container'>
                {
                    services.map(service => <Service
                        key={service.title}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;