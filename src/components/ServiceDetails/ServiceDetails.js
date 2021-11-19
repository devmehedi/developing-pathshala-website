import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [singleService, setSingleService] = useState();
    useEffect(() => {
        const url = `/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [serviceId])
    return (
        <div>
            <h2>Detail coming soon: {serviceId} </h2>

        </div>
    );
};

export default ServiceDetails;