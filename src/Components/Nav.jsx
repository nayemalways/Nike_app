import React from 'react';
import { navLinks } from '../constants';
import { hamburger } from '../../public/assets/icons';


const Nav = () => {
    return (
        <header className='padding-x py-8 absolute w-full z-10'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img 
                        src="assets/images/header-logo.svg" 
                        alt="logo"
                        width={130}
                        height={29} />
                </a>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                     {
                        navLinks.map((item, i) => {
                            return <li key={i}>
                                        <a 
                                            href={item.href}
                                            className='font-montserrat leading-normal text-slate-gray text-lg' >
                                                {item.label}
                                            </a>
                                    </li>
                        })
                     }
                </ul>

                <div className='hidden max-lg:block'>
                    <img src={hamburger} alt="hamburger" width={25} height={25} />
                </div>
            </nav>
        </header>
    );
};

export default Nav;