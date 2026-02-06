"use client";

import React from 'react';
import PortfolioServices from './PortfolioServices';
import DesignSection from '@/components/design/DesignSection';

const page = () => {
    return (
        <div>
            <DesignSection>            <PortfolioServices></PortfolioServices>
</DesignSection>
        </div>
    );
};

export default page;