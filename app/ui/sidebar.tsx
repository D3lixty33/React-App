import React, { FC } from 'react';

interface navbarProps {
    userInfo: string,
    
}

const Sidebar: FC<navbarProps> = ({ userInfo }) => {
    return (
        <>
            <div>{userInfo}</div>
        </>
    )
}

export default Sidebar