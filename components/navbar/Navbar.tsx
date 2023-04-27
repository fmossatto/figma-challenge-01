import Image from 'next/image';

import { HiOutlineSearch } from 'react-icons/hi';

const Navbar = () => {
    return (
        <div className="h-17 z-10 relative pl-4 pr-12 pt-3 flex items-center justify-between gap-6">
            <nav className="flex flex-row justify-between items-center flex-1">
                <Image
                    className="text-black"
                    height={55}
                    width={153}
                    alt="logo"
                    src="images/logo.svg"
                />
                <ul className="flex flex-row gap-8 text-defaultBeige">
                    <li>HOME</li>
                    <li>FAVOURITES</li>
                </ul>
            </nav>
            <div className="flex gap-1 items-center px-4 py-1 bg-defaultBeige rounded-2xl cursor-pointer">
                BROWSE
                <HiOutlineSearch size={18} />
            </div>
        </div>
    );
};

export default Navbar;
