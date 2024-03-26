import React from "react";
import Footer from "../Component/Footer/footer";
import Navbar from "../Component/Navbar/navbar";
import world from "../Assets/world.png";
import clas from "../Assets/clas.png";
import tipsy1 from "../Assets/tipsy1.jpg";
import tipsy2 from "../Assets/tipsy2.jpg";
import pleasant from "../Assets/pleasant.png";
import blur1 from "../Assets/blur1.png";
import blur2 from "../Assets/blur2.png";
import thumbs1 from "../Assets/thumbsup1.jpg";
import thumbs2 from "../Assets/thumbsup2.jpg";
import warm1 from "../Assets/warm1.jpg";
import warm2 from "../Assets/warm2.jpg";

export default function Fragrance(){
    return(
        <>
            <Navbar/>
            <div className="px-9 md:px-20 lg:px-24 overflow-hidden bona-nova-regular">
                <section class="flex justify-between gap-5 items-end lg:items-center md:gap-16 md:justify-center">
                    <div class="flex flex-col gap-2 mb-5">
                        <div class="flex flex-row items-center justify-between">
                            <h1 class="text-2xl lg:text-5xl md:text-3xl">World Class</h1>
                            <span class="lg:text-xl lg:translate-y-1">&#10022;</span> 
                            <hr class="w-16 lg:w-28 lg:translate-y-1 shrink bg-black" style={{height:'2px'}}/>
                        </div>
                        <div class="flex justify-between items-center gap-5">
                            <img class="h-10 w-full rounded-full object-cover" src={world}/>
                            <h1 class="text-2xl lg:text-5xl md:text-3xl">Fragrance</h1>
                        </div>
                        <div class="mt-2 lg:text-base text-xs md:text-sm">
                            <p>Perfect harmony of delicate touches and warmth, creating an unforgettable trail of luxury.</p>
                        </div>
                    </div>
                    <div>
                        <img class="h-44 lg:h-64 lg:w-56 rounded-full object-cover" src={clas}/>
                    </div>
                </section>

                <section class="flex flex-col justify-center">
                    <div class="flex flex-col gap-5 lg:flex-row mt-20">
                        <img class="h-64 lg:h-96 xl:h-108 w-full lg:w-2/3 rounded-lg md:h-80 object-cover " src={tipsy1}/>
                        <div class="flex gap-5 lg:flex-col justify-start">
                            <img class="w-1/2 lg:w-full lg:h-60 xl:h-80 rounded-lg object-cover " src={tipsy2}/>
                            <div>
                                <h1 class="text-2xl lg:text-3xl">T.I.P.S.Y</h1>
                                <p class=" p-1 text-xs lg:text-sm">
                                T.I.P.S.Y merupakan parfum male perfume dan dupe dari Jean Paul Gaultier Ultra Male yang
                                bisa digunakan unisex karena memiliki opening wangi manis dan fruity berpadu dengan
                                hangatnya amber dan vanilla yang tetap menjaga kesan maskulin dari T.I.P.S.Y
                                </p>
                                <button class="lg:ml-1 text-sm lg:text-base mt-2 bg-gray-800 text-white px-3 py-0.5 rounded-full lg:rounded-lg">Details</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="my-16 lg:my-24 relative">
                    <div class="flex justify-between items-center md:justify-center md:gap-4">
                        <div class="lg:text-3xl md:text-2xl">
                            <h1>A Fragrance Is A Delightful Aroma.</h1>
                            <h1>Often Characterized By Its</h1>
                        </div>
                        <img class="w-20 h-10 lg:w-40 lg:h-16 rounded-full" src={pleasant}/>
                    </div>
                    <div class="flex justify-between items-center md:justify-center md:gap-4">
                        <hr class="w-32 lg:w-64 bg-black" style={{height:'2px'}}/>
                        <p class="text-xs lg:text-base">&#10022; </p>
                        <h1 class="lg:text-3xl md:text-2xl">Pleasant Or Sweet Scent.</h1>
                    </div>
                    <div class="">
                        <img class="h-24 w-24 object-cover absolute -top-10 -rotate-45 -z-10 -right-10" style={{filter: 'blur(1px)'}} src={blur2}/>
                        <img class="h-24 w-24 object-cover absolute top-0 rotate-12 -z-10 -left-20" style={{filter: 'blur(1px)'}} src={blur1}/>
                    </div>
                </section>

                <section class="my-12 flex flex-col justify-center">
                    <div class="flex flex-col-reverse gap-5 lg:flex-row">
                        <div class="flex gap-5 lg:flex-col justify-start">
                            <img class="w-1/2 lg:w-full lg:h-60 xl:h-80 rounded-lg object-cover" src={thumbs2}/>
                            <div>
                                <h1 class="text-2xl lg:text-3xl">Thumbs Up</h1>
                                <p class=" p-1 text-xs lg:text-sm">
                                THUMBS UP merupakan male perfume sebagai dupe dari Tom Ford Tobacco Vanille yang
                                memiliki aroma warm dan masculine.
                                Dibuka dengan hangatnya tobacco leaf berpadu dengan aroma spicy yang menambah kesan
                                masculine. 
                                </p>
                                <button class="lg:ml-1 text-sm lg:text-base mt-2 bg-gray-800 text-white px-3 py-0.5 rounded-full lg:rounded-lg">Details</button>
                            </div>
                        </div>
                        <img class="h-64 lg:h-96 xl:h-128 w-full lg:w-2/3 object-cover rounded-lg md:h-80" src={thumbs1}/>
                    </div>
                    
                    <div class="flex flex-col gap-5 lg:flex-row mt-20">
                        <img class="h-64 lg:h-96 xl:h-108 w-full lg:w-2/3 object-cover rounded-lg md:h-80" src={warm2}/>
                        <div class="flex gap-4 lg:flex-col justify-start">
                            <img class="w-1/2 lg:w-full lg:h-60 xl:h-80 rounded-lg object-cover" src={warm1}/>
                            <div>
                                <h1 class="text-2xl lg:text-3xl">Warm Intense</h1>
                                <p class=" p-1 text-xs lg:text-sm">
                                    WARM WINTER INTENSE adalah the only dupe of Emporio Armani Stronger With YouIntensely.
                                    WARM WINTER INTENSE merupakan sebuah male perfume yang memiliki aroma sweet,
                                    warm, caramelly dan ambery.
                                </p>
                                <button class="lg:ml-1 text-sm lg:text-base mt-2 bg-gray-800 text-white px-3 py-0.5 rounded-full lg:rounded-lg">Details</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}