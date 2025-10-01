import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function Header() {
    return (
        <header className="bg-black shadow-md w-full h-[60px] pt-2">
            <div className="grid grid-cols-3 h-full">
            <div className="flex items-center px-5">
                <div className="hover:scale-110 transition-colors duration-300">
                <Link href='/'>
                    <img 
                    src="/N.png"
                    width={50}
                    height={50}
                    alt="logo"
                    />
                </Link>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className="hover:scale-110 transition-colors duration-300 cursor-pointer">
                    <div className="relative group ">
                        <Link href="/">
                        <img
                            src="/home.png"
                            width={45}
                            height={45}
                            alt="home button"
                        />
                        </Link>
                        <div className="font-bold absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#1f1f1f] text-white text-sm rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
                        Home
                        </div>
                    </div>
                </div>
                <div>
                    <Popover>
                    <PopoverButton className="flex px-3 gap-2 items-center bg-[#1f1f1f] h-[50px] rounded-4xl w-[500px] text-lg font-semibold text-white/50 border-3 border-transparent focus:outline-none data-active:text-white data-active:border-white data-focus:border-white data-hover:text-white">                    <div className="hover:scale-110 transition-colors duration-300">
                        <img
                            src="/search.png"
                            width={25}
                            height={25}
                            alt="search button"
                            />
                        </div>
                        Check out my projects!
                    </PopoverButton>
                    
                    <PopoverPanel
                        transition
                        anchor="bottom"
                        className="w-(--button-width) divide-y divide-white/5 rounded-xl bg-[#1f1f1f] text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                    >
                        <div className="p-3">
                        <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
                            <p className="font-semibold text-white">Work in Progress</p>
                            <p className="text-white/50">-----</p>
                        </a>
                        </div>
                    </PopoverPanel>
                    </Popover>
                </div>
                </div>
            <div className="flex items-center justify-end px-5 gap-2">
                <div className="flex px-5">
                <div className="flex gap-2 hover:scale-105 transition-colors duration-300 opacity-80 hover:opacity-100">
                    <Link className="flex items-center gap-1" href='/message'>
                    <img 
                        src="/message.png"
                        width={25}
                        height={25}
                        alt="mail"
                        />
                    <h1 className="font-serif">send me a message!</h1>
                    </Link>
                </div>
                </div>
                <div className="hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100">
                <div className="relative group">
                    <Link href='https://github.com/natesasapan'>
                    <img 
                        src="/github.png"
                        width={35}
                        height={35}
                        alt="github logo"
                        />
                    </Link>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#1f1f1f] text-white text-sm rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
                    Github
                    </div>
                </div>
                </div>
                <div className="hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100">
                <div className="relative group">
                    <Link href='https://www.linkedin.com/in/nate-sasapan-901115255/'>
                    <img 
                        src="/linkedin.png"
                        width={30}
                        height={30}
                        alt="linkedin logo"
                        />
                    </Link>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#1f1f1f] text-white text-sm rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
                    Linkedin
                    </div>
                </div>
                </div>
                <div className="hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100 pl-2">
                    <Link href='/kittycats'>
                    <img 
                        src="/kittycat.png"
                        width={50}
                        height={50}
                        alt="logo"
                        />
                    </Link>
                </div>
            </div>
            </div>
        </header>
    );
}

export function MobileHeader() {
    return (
    <header className="bg-linear-to-b from-[#121212] to-[#1700b4] shadow-md w-full h-[80px] pt-2">
            <div className="grid grid-cols-2 h-full">
                <div className="flex items-center px-5">
                    <h1 className="font-bold">nateify</h1>
                </div>
                <div className="flex items-center justify-end px-5 gap-2">
                    <div className="hover:scale-110 transition-colors duration-300">
                        <Link className="flex items-center gap-1" href='/message'>
                            <img 
                                src="/message.png"
                                width={35}
                                height={35}
                                alt="mail"
                            />
                        </Link>
                    </div>
                    <div className="hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100">
                        <Link href='https://github.com/natesasapan'>
                        <img 
                            src="/github.png"
                            width={40}
                            height={40}
                            alt="github logo"
                            />
                        </Link>
                    </div>
                    <div className="hover:scale-110 transition-colors duration-300 opacity-80 hover:opacity-100">
                        <Link href='https://www.linkedin.com/in/nate-sasapan-901115255/'>
                        <img 
                            src="/linkedin.png"
                            width={35}
                            height={35}
                            alt="linkedin logo"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}