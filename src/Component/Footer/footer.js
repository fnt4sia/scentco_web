import '../../index.css'

export default function Footer() {
    return (
        <div className='bg-black text-white py-8 md:py-16'>
            <h3 className='bona-nova-regular text-2xl text-center md:text-3xl lg:text-4xl'>SCENTCo</h3>
            <div className='px-6 md:flex justify-center md:px-20 gap-10 lg:gap-20'>
                <div className='mt-8'>
                    <h4 className='font-semibold text-sm lg:text-xl'>EXPLORE SCENTCO</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light lg:text-lg'>
                        <li className='pt-1'>Body Mist</li>
                        <li className='pt-1'>Fragrance</li>
                        <li className='pt-1'>About Us</li>
                    </ul>
                </div>
                <div className='mt-8'>
                    <h4 className='font-semibold text-sm lg:text-xl'>ONLINE STORE</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light lg:text-lg'>
                        <li className='pt-1'>Tokopedia</li>
                        <li className='pt-1'>Shopee</li>
                        <li className='pt-1'>Tiktok Shop</li>
                    </ul>
                </div>
                <div className='mt-8'>
                    <h4 className='font-semibold text-sm lg:text-xl'>SOCIAL MEDIA</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light lg:text-lg'>
                        <li className='pt-1'>Instagram</li>
                        <li className='pt-1'>Tiktok</li>
                        <li className='pt-1'>WhatsApp</li>
                    </ul>
                </div>
                <div className='mt-8'>
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