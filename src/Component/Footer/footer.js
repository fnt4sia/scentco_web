import { Link } from 'react-router-dom'
import '../../index.css'

export default function Footer() {
    return (
        <div className='bg-black text-white py-8 md:py-16 lg:pb-60 lg:pt-20'>
            <h3 className='bona-nova-regular text-2xl text-center md:text-3xl lg:text-4xl'>SCENTCo</h3>
            <div className='px-6 md:flex justify-center md:px-18 gap-10 lg:gap-24'>
                <div className='mt-8 lg:mt-16'>
                    <h4 className='font-semibold text-sm lg:text-xl'>EXPLORE SCENTCO</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light lg:text-lg'>
                        <Link to="/bodymist"><li className='pt-1'>Body Mist</li></Link>
                        <Link to="/fragrance"><li className='pt-1'>Fragrance</li></Link>
                        <Link to="/"><li className='pt-1'>About Us</li></Link>
                    </ul>
                </div>
                <div className='mt-8 lg:mt-16'>
                    <h4 className='font-semibold text-sm lg:text-xl'>ONLINE STORE</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light lg:text-lg'>
                        <Link to="https://www.tokopedia.com/scentcoparfums"><li className='pt-1'>Tokopedia</li></Link>
                        <Link to="https://shopee.co.id/scentcoparfums"><li className='pt-1'>Shopee</li></Link>
                        <Link to=""><li className='pt-1'>Tiktok Shop</li></Link>
                    </ul>
                </div>
                <div className='mt-8 lg:mt-16'>
                    <h4 className='font-semibold text-sm lg:text-xl'>SOCIAL MEDIA</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light lg:text-lg'>
                        <Link to="https://www.instagram.com/scentcoparfums/"><li className='pt-1'>Instagram</li></Link>
                        <Link to="https://www.tiktok.com/@scentcoparfums"><li className='pt-1'>Tiktok</li></Link>
                        <Link to="wa.me/6295405230184"><li className='pt-1'>WhatsApp</li></Link>
                    </ul>
                </div>
                <div className='mt-8 lg:mt-16'>
                    <h4 className='font-semibold text-sm lg:text-xl'>CONTACT US</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light lg:text-lg'>
                        <li className='pt-1'>scentco@gmail.com</li>
                        <li className='pt-1'>+62 879 7463 0982</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}