import Navbar from '../Component/Navbar/navbar.js'
import Footer from '../Component/Footer/footer.js'
import '../index.css'
import React, { useState } from 'react';

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
                <div className='relative w-full flex justify-center items-center h-80 xl:h-140'>
                    <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/f22a/2543/45e5df9ac65f5d27af827080dd784483?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QeeLifgTEB43xFEZ3Jb~YGHW-iK7aY7TqoG7kdTl6Y9QPl1GngOLloRUz--FtRx8GP~OByKMojEuv54UPE9Sz~-Ej5UdG~7UfluYPhhGN9ps~tTjtV~NqMSyXlGMbZskBTOv7CMPxACdeU7EuF0Bp~CUgmN1X3S~V-Wc2G1RCIH7AxzwAGp7YxvZOoAdQmMqPrlIQez~61QC0XOeRLMR8wdtGPOf-m0ZivBfiwgJ840~fxA362mmGxIbasNwq-BsuPnugH3itCLxAbBw7jte7Uv2UKzQZpdJwJZS0n3lKI98Yg3V4Qb2dCzBj9dNYE3lTHo-3-u6i5HSszop6OAMyw__'/>
                    <p className='absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2'>Fragrance</p>
                </div>
                <div className='relative w-full flex justify-center items-center h-80 xl:h-140'>
                    <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/67c7/0e08/a6603f6130380d32462fe2b052cc7ce2?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CGUcOjuCBjEA7zpEUA1w7zYgmJEXhKw3bg2sC15909eucfvj0K~OlLEv5ojFTwgalN0FafVxIU8eWPPcAju03bysc9TsY~DVwEcsjeZWwfAw6vpE9f9XYm7grghUmrulxURMwWX3XOuAyVJfzc9JEFnkykZN1elmJykexGjxD5hbpZhN9dYTDEYjC2WyiPEjQh~oAO6TufrmCn4yRjHc18f1uv9umMRKTN1Vo6TDeIUl21v6EbOSjE7wxRyTvEJmiZnFxx0II4RyCqAjJARJPcsxCZ1BkJQBIW~AHQs0H941obdzyoDTO~w0XWV2d9AFuxzWTTg8ttvnzS94PV8wrQ__'/>
                    <p className='absolute top-1/2 left-1/2 text-black -translate-x-1/2 -translate-y-1/2'>Body Mist</p>
                </div>
            </div>
            <div className='relative h-96 lg:h-128 xl:h-140 flex py-4'>
                <div className='flex flex-nowrap w-full duration-500' style={{transform : `translateX(-${slide * 100}%)`}}>
                    <div className='min-w-full flex justify-center items-center'>Slider 1</div>
                    <div className='min-w-full flex justify-center items-center'>Slider 2</div>
                    <div className='min-w-full flex justify-center items-center'>Slider 3</div>
                    <div className='min-w-full flex justify-center items-center'>Slider 4</div>
                </div>
               <div className='absolute right-10 bottom-8 flex items-center w-1/2 justify-between'>
                    <button className='text-2xl' onClick={prevSlide}>&lt;</button>
                    <button className='text-2xl' onClick={nextSlide}>&gt;</button>
                    <div className=' relative bg-gray-300 rounded-lg' style={{height: '2px', width: '70%'}}>
                        <div className='absolute h-full w-1/4 bg-black duration-500' style={{left: `${(slide) * 25}%`}}></div>
                    </div>
               </div>
            </div>
            <Footer />
        </div>
    );
}