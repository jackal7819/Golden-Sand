import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-gray-100 py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
                <div className='sm:flex text center justify-between items-center'>
                    <h1>GOLDEN SAND</h1>
                    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook className='icon' /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter className='icon' /></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube className='icon' /></a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FaPinterestP className='icon' /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram className='icon' /></a>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <ul className='lg:flex'>
                        <li>About</li>
                        <li>Parnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>
                    <ul className='text-right lg:flex'>
                        <li><a href="#navbar">Home</a></li>
                        <li><a href="#destinations">Destinations</a></li>
                        <li><a href="#travel">Travel</a></li>
                        <li><a href="#view">View</a></li>
                        <li><a href="#search">Book</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
