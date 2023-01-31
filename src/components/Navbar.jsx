import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    };
    return (
        <div
            className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'
            id='navbar'>
            <div>
                <h1>GOLDEN SAND</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>
                    <a href='#navbar'>Home</a>
                </li>
                <li>
                    <a href='#destinations'>Destinations</a>
                </li>
                <li>
                    <a href='#travel'>Travel</a>
                </li>
                <li>
                    <a href='#view'>View</a>
                </li>
                <li>
                    <a href='#search'>Book</a>
                </li>
            </ul>
            <div className='hidden md:flex'>
                <BsSearch className='mr-2' size={20} />
                <BsPerson size={20} />
            </div>

            {/* Hamburger */}
            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? (
                    <AiOutlineClose className='text-black' size={20} />
                ) : (
                    <HiOutlineMenuAlt3 size={20} />
                )}
            </div>

            {/* Mobile menu dropdown */}
            <div
                onClick={handleNav}
                className={
                    nav
                        ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'
                        : 'absolute left-[-100%]'
                }>
                <ul>
                    <li>
                        <a href='#navbar'>Home</a>
                    </li>
                    <li>
                        <a href='#destinations'>Destinations</a>
                    </li>
                    <li>
                        <a href='#travel'>Travel</a>
                    </li>
                    <li>
                        <a href='#view'>View</a>
                    </li>
                    <li>
                        <a href='#search'>Book</a>
                    </li>
                    <div className='flex flex-col'>
                        <button className='my-6'>Search</button>
                        <button>Account</button>
                    </div>
                    <div className='flex justify-between my-6'>
                        <a
                            href='https://www.facebook.com/'
                            target='_blank'
                            rel='noreferrer'>
                            <FaFacebook className='icon' />
                        </a>
                        <a
                            href='https://twitter.com/'
                            target='_blank'
                            rel='noreferrer'>
                            <FaTwitter className='icon' />
                        </a>
                        <a
                            href='https://www.youtube.com/'
                            target='_blank'
                            rel='noreferrer'>
                            <FaYoutube className='icon' />
                        </a>
                        <a
                            href='https://www.pinterest.com/'
                            target='_blank'
                            rel='noreferrer'>
                            <FaPinterestP className='icon' />
                        </a>
                        <a
                            href='https://www.instagram.com/'
                            target='_blank'
                            rel='noreferrer'>
                            <FaInstagram className='icon' />
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
