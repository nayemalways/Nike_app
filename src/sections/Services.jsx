import React from 'react';
import { services } from '../constants';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
    return (
        <section className='max-container flex-center flex-wrap gap-9'>
             {
                services.map((service) => {
                    return <ServiceCard key={service.label} {...service} />
                })
             }
        </section>
    );
};

export default Services;