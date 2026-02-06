"use client";

import React from 'react';
import MyPortfolio from './MyPortfolio';
import DesignSection from '@/components/design/DesignSection';

const page = () => {
    return (
        <div>
            <DesignSection>            <MyPortfolio></MyPortfolio>
</DesignSection>
        </div>
    );
};

export default page;