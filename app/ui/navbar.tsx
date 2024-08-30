import React, { FC } from 'react';

interface navbarProps {
    home: string,
    aboutUs: string,
    newsItem: string,
    contactUs: string
}

const Navbar: FC<navbarProps> = ({ home, aboutUs, newsItem, contactUs }) => {
    return (
        <>
            <div className='flex flex-row w-screen p-8'>
                <h1 className='text-5xl font-bold'>{home}</h1>
                <div className='flex justify-end w-screen items-center'>
                    <ul className='font-semibold text-center'>
                        <li className='inline-block mr-3'><a>{aboutUs}</a></li>
                        <li className='inline-block mr-3'><a>{newsItem}</a></li>
                        <li className='inline-block mr-3'><a>{contactUs}</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar