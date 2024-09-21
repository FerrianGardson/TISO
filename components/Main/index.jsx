"use client";
import React from 'react';
import { Hero } from './Hero';
import { News } from './News';
import { Slider } from './Slider';

export const Main = () => {
    return (
        <div>
            <Hero />
            <News />
            <Slider />
        </div>
    );
};

