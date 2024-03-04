import '../../index.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <div className="flex px-6 py-4 justify-center items-center z-40 bg-white">
        <Link to='/'><h3 className='bona-nova-regular text-2xl  md:text-3xl lg:text-4xl'>SCENTCo</h3></Link>
      </div>
    );
}
