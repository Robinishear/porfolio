"use client";

import React from 'react';
import ServiceCard from './ServiceCard';
import DesignSection from '@/components/design/DesignSection';

const page = () => {
    return (
        <div>
            <DesignSection>            <ServiceCard></ServiceCard>
</DesignSection>
        </div>
    );
};

export default page;