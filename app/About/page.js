"use client";

import React from 'react';
import About from './About';
import DesignSection from '@/components/design/DesignSection';

const page = () => {
    return (
        <div>
            <DesignSection>            <About></About>
</DesignSection>
        </div>
    );
};

export default page;