import Navbar from '../Component/Navbar/navbar.js'
import Footer from '../Component/Footer/footer.js'
import '../index.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className='flex justify-between py-4'>
                <div className='w-full flex justify-center items-center'>
                    Image 1 
                </div>
                <div className='w-full flex justify-center items-center'>
                    Image 2
                </div>
            </div>
            <div className='flex flex-nowrap py-4 overflow-hidden'>
                <div className='min-w-full flex justify-center items-center'>Slider 1</div>
                <div className='min-w-full flex justify-center items-center'>Slider 2</div>
                <div className='min-w-full flex justify-center items-center'>Slider 3</div>
                <div className='min-w-full flex justify-center items-center'>Slider 4</div>
            </div>
            <Footer />
        </>

    );
}