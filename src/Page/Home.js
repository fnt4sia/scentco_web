import Navbar from '../Component/Navbar/navbar.js'
import Footer from '../Component/Footer/footer.js'
import '../index.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fragrance from '../Assets/fragrance.jpg';
import bodymist from '../Assets/bodymist.jpg';
import slider1 from "../Assets/tipsy1.jpg";
import slider2 from "../Assets/thumbsup2.jpg";
import slider3 from "../Assets/tipsy3.jpg";
import slider4 from "../Assets/warm1.jpg";

export default function Home() {

    const [slide, setSlide] = useState(0);

    function nextSlide(){
        if(slide == 3){
            setSlide(0);
        }else{
            setSlide(slide + 1)
        }
    }

    function prevSlide(){
        if(slide == 0){
            setSlide(3);
        }else{
            setSlide(slide - 1);
        }
    }

    return (
        <div className='overflow-hidden'>
            <Navbar />
            <div className='flex justify-between flex-col md:flex-row'>
                <Link to="/fragrance" className='w-full'>
                    <div className='relative w-full flex justify-center items-center h-80 xl:h-140 lg:h-128 bg-black cursor-pointer overflow-hidden'>
                        <img className='w-full h-full object-cover hover:opacity-60 hover:scale-125 duration-500' src={fragrance}/>
                        <p className='absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-xl'>Fragrance</p>
                    </div>
                </Link>
                <Link to="/bodymist" className='w-full'>
                    <div className='relative w-full flex justify-center items-center h-80 xl:h-140 lg:h-128 bg-black cursor-pointer overflow-hidden'>
                        <img className='w-full h-full object-cover hover:opacity-60 hover:scale-125 duration-500' src={bodymist}/>
                        <p className='absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-xl'>Body Mist</p>
                    </div>
                </Link>
            </div>
            <div className='relative h-96 md:h-128 lg:h-140 xl:h-180 flex py-4 my-4 md:my-8 lg:my-16 xl:my-20'>
                <div className='flex flex-nowrap w-full duration-500' style={{transform : `translateX(-${slide * 100}%)`}}>
                    <div className='min-w-full flex justify-center items-center bg-black'>
                        <img src={slider1} className='w-full h-full object-cover opacity-60'/>
                    </div>
                    <div className='min-w-full flex justify-center items-center bg-black'>
                        <img src={slider2} className='w-full h-full object-cover opacity-60'/>
                    </div>
                    <div className='min-w-full flex justify-center items-center bg-black'>
                        <img src={slider3} className='w-full h-full object-cover opacity-60'/>
                    </div>
                    <div className='min-w-full flex justify-center items-center bg-black'>
                        <img src={slider4} className='w-full h-full object-cover opacity-60'/>
                    </div>
                </div>
               <div className='absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center w-full justify-between px-8 md:px-16 lg:px-32'>
                    <button className='text-2xl lg:text-3xl text-white' onClick={prevSlide}>&lt;</button>

                    <div className=' relative bg-gray-300 rounded-lg lg:w-4/5' style={{height: '2px', width: '70%'}}>
                        <div className='absolute h-full w-1/4 bg-black duration-500' style={{left: `${(slide) * 25}%`}}></div>
                    </div>

                    <button className='text-2xl lg:text-3xl text-white' onClick={nextSlide}>&gt;</button>
               </div>
            </div>
            <Footer />
        </div>
    );
}