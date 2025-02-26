import React from 'react';
import { footerLogo } from '../../public/assets/images';
import { footerLinks, socialMedia } from '../constants';
import { copyrightSign } from '../../public/assets/icons';

const Footer = () => {
    return (
        <section className='max-container'>
             <div className="flex justify-between items-start gap-20
             flex-wrap maxolg:flex-col ">
                <div className='flex flex-col items-start'>
                    <a href="/">
                        <img src={footerLogo} alt="Logo" width={150} height={46} />
                    </a>
                    <p className='mt-5 text-base leading-7 font-montserrat sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In store Get Rewards</p>
                    <div className="flex items-center gap-4 mt-8">
                        {
                            socialMedia.map((icon, i) => {
                                return <div key={i} className='flex-center w-12 h-12 bg-white rounded-full'> 
                                            <img className='' src={icon.src} alt={icon.alt} width={24} height={24} />
                                        </div>
                            })
                        }
                    </div>
                </div>

                <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap pb-10'>
                        {
                            footerLinks.map((section, i) => {
                                return <div key={i}>
                                            <h4 className='font-medium font-montserrat leading-normal text-2xl'> {section.title} </h4>

                                            <ul>
                                                {section.links.map((link, i) => {
                                                   return   <li key={i} className='mt-3 text-white-400
                                                   font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'> 
                                                                <a href={link.link}>  {link.name}</a>
                                                            </li>
                                                })}
                                            </ul>
                                        </div>
                            })
                        }
                </div>
             </div>

             <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                        <div className='flex justify-start flex-1 gap-2 font-montserrat cursor-pointer'>
                            <img 
                                className='rounded-full m-0' 
                                src={copyrightSign} alt="Copyright" 
                                width={20}  
                                height={20}/>
                            <p className='max-sm:text-sm'>Copyright. All rights reserved</p>
                            
                        </div>
                        <p className='font-montserrat cursor-pointer max-sm:text-sm my-2'>Terms & Conditions</p>
             </div>
        </section>
    );
};

export default Footer;