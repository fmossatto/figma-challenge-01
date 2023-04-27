import Navbar from '@/components/navbar/Navbar';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Home() {
    return (
        <div className={`relative h-[100vh] ${poppins.className}`}>
            <Image
                className="
                    z-0                    
                    min-w-[100vw]                
                "
                src="/images/landpage.png"
                alt="Picture of a giant bug in a valley"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <Navbar />
            <div className="absolute gap-4 bottom-12 flex flex-col w-full items-center">
                <p className="text-defaultBeige">
                    Find out everything about every bug you're interested in
                </p>
                <div className="flex items-center px-3 py-2 text-sm bg-defaultOrange text-defaultBeige tracking-widest rounded-2xl cursor-pointer">
                    START HERE
                </div>
            </div>
        </div>
    );
}
