/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Contact() {

    const [name, setName] = useState(false);
    const [age, setAge] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    return <>
    

    <div className="contacts mb-14 pt-32">
            <div className="container mx-auto px-5">
                <h2 className='text-[#2c3e50] font-bold text-4xl text-center'>CONTACT SECTION</h2>

                <div className='flex justify-center gap-5 items-center text-lg mt-4 mb-5'>
                    <div className="line w-20 h-1 bg-[#2c3e50]"></div>
                    <i className="fa-solid fa-star text-[#2c3e50]"></i>
                    <div className="line w-20 h-1 bg-[#2c3e50]"></div>
                </div>

                <div className="form w-full md:w-3/5 lg:w-1/2 mx-auto mt-16">
                    <div className="my-2 relative">
                        <label htmlFor="name" className={`block text-left text-[#1abc9c] relative duration-500 ${name ? "top-0 z-10" : "top-10 -z-10"}`}>userName :</label>
                        <input onInput={(e) => {
                            e.target.value == "" ? setName(false) : setName(true)
                        }} type="text" id="name" placeholder='userName' name="name" className="z-30 w-full border-b p-4 focus:outline-none placeholder:text-gray-500" />
                    </div>
                    <div className="my-2">
                        <label htmlFor="age" className={`block text-left text-[#1abc9c] relative duration-500 ${age ? "top-0 z-10" : "top-10 -z-10"}`}>userAge :</label>
                        <input onInput={(e) => {
                            e.target.value == "" ? setAge(false) : setAge(true)
                        }} type="text" id="age" placeholder='userAge' name="age" className="z-30 w-full border-b p-4 focus:outline-none placeholder:text-gray-500" />
                    </div>
                    <div className="my-2">
                        <label htmlFor="email" className={`block text-left text-[#1abc9c] relative duration-500 ${email ? "top-0 z-10" : "top-10 -z-10"}`}>userEmail :</label>
                        <input onInput={(e) => {
                            e.target.value == "" ? setEmail(false) : setEmail(true)
                        }} type="email" id="email" placeholder='userEmail' name="email" className="z-30 w-full border-b p-4 focus:outline-none placeholder:text-gray-500" />
                    </div>
                    <div className="my-2">
                        <label htmlFor="password" className={`block text-left text-[#1abc9c] relative duration-500 ${password ? "top-0 z-10" : "top-10 -z-10"}`}>userPassword :</label>
                        <input onInput={(e) => {
                            e.target.value == "" ? setPassword(false) : setPassword(true)
                        }} type="password" id="password" placeholder='userPassword' name="password" className="z-30 w-full border-b p-4 focus:outline-none placeholder:text-gray-500" />
                    </div>
                    <div className='text-left'>
                        <button className='bg-[#1abc9c] px-3 py-2 rounded-md text-white mt-4'>Send Message</button>
                    </div>
                </div>



            </div>
        </div>
    
    
    </>

}
