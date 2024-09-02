import React, { FC } from 'react';

interface navbarProps {
    nav_one: string,
    nav_second: string,
    nav_third: string,
    nav_fourth: string
}

const Navbar: FC<navbarProps> = ({ nav_one, nav_second, nav_third, nav_fourth }) => {
    return (
        <>
            <div className='flex flex-row w-screen p-8'>
                <ul>
                    <li>
                        <h1 className='text-5xl font-bold hover:shadow-[rgba(255,255,255,0.2)_0px_0px_0px_1px_inset,rgba(0,0,0,0.9)_0px_0px_0px_1px];'>
                            <a className='group' href='#'>{nav_one}
                                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500">
                                </div>
                            </a>
                        </h1>
                    </li>
                </ul>
                <div className='flex justify-end w-screen items-center'>
                    <ul className='font-semibold text-center'>
                        <li className='inline-block mr-3'>
                            <a className='group' href="#">{nav_second}
                                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                            </a>
                        </li>
                        <li className='inline-block mr-3'>
                            <a className='group' href="#">{nav_third}
                                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500">
                                </div>
                            </a>
                        </li>
                        <li className='inline-block mr-3'>
                            <a className='group' href="#">{nav_fourth}
                                <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500">
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar