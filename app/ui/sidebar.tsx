import React, { FC } from 'react';
import { Button, ButtonGroup } from "@nextui-org/button";
import {
    faSearch,
    faUser,
    faUsers,
    faCartShopping,
    faList,
    faCircleInfo,
    faBlog,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Poppins } from "next/font/google";
// import Image from "next/image";
// import * as LoginImg from './assets/login/login.svg';

interface navbarProps {
    userInfo: string,
    userIcon: any,  /* passing any so in future i can pass a JSX element as a prop using the object imageDashBoard below */
    navUsers: string,
    navSales: string,
    navTickets: string;
    navInfo: string,
    navDeadlines: string
}

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

/*
/======================================/
/ Object created in date 02/09/24 to map the profile images of the users dynamically 

const imageDashBoard = () => {
    return (
        <Image src={LoginImg} alt="404"></Image>   
    )

/======================================/
}
*/
const Sidebar: FC<navbarProps> = ({ userInfo, userIcon, navUsers, navSales, navTickets, navInfo, navDeadlines }) => {
    return (
        <div className={poppins.className}>
            <div className='flex w-60 h-screen bg-white'>
                <div className='flex flex-col w-full pt-8'>
                    <div className='flex justify-center'>
                        <h1 className='text-sky-500 mb-4 text-4xl font-bold'>
                            AARGON
                            <FontAwesomeIcon icon={faBlog} className='ml-3 align-top'></FontAwesomeIcon>
                        </h1>
                    </div>
                    <div className='flex justify-center p-4'>
                        <Button fullWidth color='primary' variant='flat' radius='full'>
                            {userInfo}
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        </Button>
                    </div>
                    <div className='flex justify-center p-4'>
                        <Button fullWidth color='primary' variant='flat' radius='full'>
                            {navDeadlines}
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </Button>
                    </div>
                    <div className='flex justify-center p-4'>
                        <Button fullWidth color='primary' variant='flat' radius='full'>
                            {navUsers}
                            <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                        </Button>
                    </div>
                    <div className='flex justify-center p-4'>
                        <Button fullWidth color='primary' variant='flat' radius='full'>
                            {navSales}
                            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        </Button>
                    </div>
                    <div className='flex justify-center p-4'>
                        <Button fullWidth color='primary' variant='flat' radius='full'>
                            {navTickets}
                            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                        </Button>
                    </div>
                    <div className='flex justify-center p-4'>
                        <Button fullWidth color='primary' variant='flat' radius='full'>
                            {navInfo}
                            <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar