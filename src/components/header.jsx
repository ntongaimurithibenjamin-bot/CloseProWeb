
import Navbar from './navbar';

function Header() {
  return (
    <header className="items-center justify-between w-auto -mb-2  bg-amber-100 -mt-20">
       <Navbar />
       <p className='text-5xl font-sans font-medium -mt-20 ml-5 animate-wave-stop'>
            Become a <span className='text-red-500'>Trusted</span> <strong>Real Estate</strong> Agent<span className='bounce'> ...</span>
       </p>
    </header>
  );
}
export default Header

