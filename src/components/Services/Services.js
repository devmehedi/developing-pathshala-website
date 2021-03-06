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
        <div>
            <div>
                <h2 className="service-header my-5 p-3 bg-warning">Our Services</h2>
            </div>
            <div className='container service-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;