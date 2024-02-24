import '../../index.css'

export default function Footer() {
    return (
        <div className='bg-black text-white py-8'>
            <h3 className='bona-nova-regular text-2xl text-center'>SCENTCo</h3>
            <div className='px-6'>
                <div className='px-18'>
                    <h4 className='font-semibold text-sm mt-8 '>EXPLORE SCENTCO</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light'>
                        <li className='pt-1'>Body Mist</li>
                        <li className='pt-1'>Fragrance</li>
                        <li className='pt-1'>About Us</li>
                    </ul>
                </div>
                <div className='px-18'>
                    <h4 className='font-semibold text-sm mt-8'>ONLINE STORE</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light'>
                        <li className='pt-1'>Tokopedia</li>
                        <li className='pt-1'>Shopee</li>
                        <li className='pt-1'>Tiktok Shop</li>
                    </ul>
                </div>
                <div className='px-18'>
                    <h4 className='font-semibold text-sm mt-8'>SOCIAL MEDIA</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light'>
                        <li className='pt-1'>Instagram</li>
                        <li className='pt-1'>Tiktok</li>
                    </ul>
                </div>
                <div className='px-18'>
                    <h4 className='font-semibold text-sm mt-8'>CONTACT US</h4>
                    <hr/>
                    <ul className='text-gray-400 font-light'>
                        <li className='pt-1'>scentco@gmail.com</li>
                        <li className='pt-1'>+62 879 7463 0982</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}