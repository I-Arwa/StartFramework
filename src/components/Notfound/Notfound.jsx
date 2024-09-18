/* eslint-disable no-unused-vars */
import React from 'react'

export default function Notfound() {
  
    return <>
    

    <div className="min-h-screen pt-24 flex justify-center items-center">
        <div className="container">
          <div className="w-fit mx-auto">
          <h2 className={`text-center text-[#2c3e50] my-6 text-4xl font-bold `}>
          NOT FOUND PAGE
      </h2>
      <div className='flex justify-center gap-5 items-center text-lg mt-4 mb-5'>
                    <div className="line w-20 h-1 bg-[#2c3e50]"></div>
                    <i className="fa-solid fa-star text-[#2c3e50]"></i>
                    <div className="line w-20 h-1 bg-[#2c3e50]"></div>
                </div>
          </div>
          <p className="text-center text-6xl text-[#2c3e50] font-semibold">This page not found <i className="fa-solid fa-ban text-[#1abc9c]"></i></p>
        </div>
      </div>
    
    
    </>

}
