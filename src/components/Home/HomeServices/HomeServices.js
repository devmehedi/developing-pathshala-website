import React, { useEffect, useState } from 'react';
import Service from '../../../Service/Service';
import './HomeServices.css';
const HomeServices = (props) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className="container">
            <div className="my-5">
                <h2>Services we offer</h2>
                <p>
                    Your business has its unique strengths and that should also be
                    reflected in your online presence. Our team of experts will give you
                    the solution that is best for your business and mirrors your vision.
                </p>
            </div>
            <div className="service-container">
                {
                    services?.slice(0, 3)?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeServices;