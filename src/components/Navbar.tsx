import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const Navbar = ()=>{
    return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30 bg-nav mb-10">
      <div className="relative container py-3 flex justify-between transition-all">
        <Logo />
        <nav>

        </nav>
      </div>
    </header>
    
    )
}

export default Navbar;