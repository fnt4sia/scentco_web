import '../../index.css'

export default function Navbar() {
    return (
      <div className="flex p-4 justify-between ">
        <h3 className='bona-nova-regular text-2xl'>SCENTCo</h3>
        <ul className='flex justify-center items-center gap-3 bona-nova-regular'>
            <li className='text-sm'>Products</li>
            <li className='text-sm'>About Us</li>
        </ul>
      </div>
    );
}
