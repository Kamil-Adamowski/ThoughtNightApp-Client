import React from 'react'
import NewThought from './newThought'

const Header = () => (
    <div className="w-full, h-16 flex items-end justify-end" >
        <nav className="h-full w-6/12 flex justify-between items-center mr-20">
            <h1 className=" text-5xl font-thin text-main" >THVTS</h1>
            <NewThought />
        </nav>
    </div>
);
export default Header
