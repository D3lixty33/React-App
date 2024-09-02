import React, { FC } from 'react';
// import Image from "next/image";
// import * as LoginImg from './assets/login/login.svg';

interface navbarProps {
    userInfo: string,
    userIcon: any,  /* passing any so in future i can pass a JSX element as a prop using the object imageDashBoard below */
    
    
}
/*

/======================================/
/ Object created in date 02/09/24 to map the profile images of the users dynamically 

const imageDashBoard = () => {
    return (
        <Image src={LoginImg} alt="404"></Image>   
    )

/======================================/
}*/
const Sidebar: FC<navbarProps> = ({ userInfo, userIcon }) => {
    return (
        <>
            <div>{userInfo}</div>
            <div>{userIcon}</div>
        </>
    )
}

export default Sidebar