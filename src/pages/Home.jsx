import React from 'react';
import MainBanner from '../components/MainBanner';
import MainProducts from '../components/MainProducts';

export default function Home() {
    return (
        <div className='mt-24 md:mt-12 overflow-x-hidden'>
            <MainBanner />
            <MainProducts />
        </div>
    );
}
