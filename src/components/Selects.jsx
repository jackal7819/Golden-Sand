import React from 'react';

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';

const Selects = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='relative'>
                <img src={BoraBora} alt="Maldives" />
                <div className='bg-gray-900/30 absolute top-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Bora Bora</p>
                </div>
            </div>
            <div className='relative'>
                <img src={BoraBora2} alt="Maldives" />
                <div className='bg-gray-900/30 absolute top-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Bora Bora</p>
                </div>
            </div>
            <div className='relative'>
                <img src={Maldives} alt="Maldives" />
                <div className='bg-gray-900/30 absolute top-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Maldives</p>
                </div>
            </div>
            <div className='relative'>
                <img src={Maldives2} alt="Maldives" />
                <div className='bg-gray-900/30 absolute top-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Maldives</p>
                </div>
            </div>
            <div className='relative'>
                <img src={Maldives3} alt="Maldives" />
                <div className='bg-gray-900/30 absolute top-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Maldives</p>
                </div>
            </div>
            <div className='relative'>
                <img src={KeyWest} alt="Maldives" />
                <div className='bg-gray-900/30 absolute top-0 w-full h-full'>
                    <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Key West</p>
                </div>
            </div>
        </div>
    )
};

export default Selects;
