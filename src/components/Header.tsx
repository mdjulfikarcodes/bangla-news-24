
import Image from 'next/image';
import React from 'react';
import NavLinks from '../components/NavLinks';
import Marquee from '../components/Marquee';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="relative mx-auto max-w-7xl w-full px-4 py-4">
            <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
                <Image src="/logo.webp" alt="Logo" width={50} height={50} />
                <div>
                    <h2 className="ml-2 text-2xl font-bold text-[#C10007]">Bangla News 24</h2>
                    <p className="ml-2 font-semibold">{date}</p>
                </div>
            </div>
            <div className= "absolute right-4 top-4 flex items-center gap-3 text-sm">
                <button className="btn">সাইন ইন</button>
                <button className="btn bg-[#C10007] text-white">সাইন আপ</button>
            </div>

            <NavLinks/>
            

        </header>
    );
};

export default Header;