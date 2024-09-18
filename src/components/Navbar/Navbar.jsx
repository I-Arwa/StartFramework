/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [show, setShow] = useState(false);
  
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  
    return <>
    

    <div className={`bg-[#2c3e50] z-50 text-white fixed w-full top-0 left-0 duration-500 ${scrolled ? 'py-5' : 'py-7'}`}>
            <div className='container px-11 mx-auto flex justify-between font-bold flex-wrap items-center gap-8'>
                <h1 className='sm:text-3xl text-2xl'>
                    <Link to={""}>START FRAMEWORK</Link>
                </h1>

                <div
                    onClick={() => {
                        setShow(!show);
                    }}
                    className="icon px-3 py-1 border rounded-md cursor-pointer md:hidden "
                >
                    <i className="fa-solid fa-bars text-2xl"></i>
                </div>


                <ul className={`md:flex flex-col items-start  w-full md:gap-7 md:flex-row md:w-auto  gap-7 text-lg ${show ? "flex" : "hidden"}`}>
                    <li>
                        <NavLink className="p-2" to={"about"}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink className="p-2" to={"portfolio"}>PORTFOLIO</NavLink>
                    </li>
                    <li>
                        <NavLink className="p-2" to={"contact"}>CONTACT</NavLink>
                    </li>
                </ul>

            </div>
        </div>

    
    
    </>

}
