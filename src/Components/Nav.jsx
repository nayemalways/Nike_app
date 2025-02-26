import React, { useEffect, useRef, useState } from 'react';
import { navLinks } from '../constants';
import { hamburger } from '../../public/assets/icons';


const Nav = () => {

    const navbarRef = useRef();
    const [prevScrollPos, setPrivScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

 

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
            setVisible(visible);
    
            if (navbarRef.current) {
                navbarRef.current.style.boxShadow = visible ? '1px 0px 4px #000' : 'none';
            }

            setPrivScrollPos(currentScrollPos);

        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
        

    }, [prevScrollPos])



    return (
        <header ref={navbarRef} id='mynav' className={`fixed top-0 w-full padding-x py-8 z-50  bg-white transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img 
                        src="assets/images/header-logo.png" 
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


//  className='padding-x py-8 bg-white shadow-sm  fixed top-0 w-full z-50'