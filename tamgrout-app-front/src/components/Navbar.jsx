import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/images/logo.png";

// eslint-disable-next-line react/prop-types
const Navbar = ({ Header }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        if (Header) {
            setLinks(Header);
        }
    }, [Header]);

    return (
        <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-lg fixed w-full z-50">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className="h-16" />
                <span className="text-xl md:text-2xl font-bold text-black">PETRI & CERAMICS
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
                {links.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className="text-lg text-gray-700 hover:text-black hover:border-b-2 hover:border-black transition-all duration-200"
                    >
                        {item.title}
                    </a>
                ))}
            </div>

            {/* Right Section - Search, Cart, Buttons */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 focus-within:border-gray-600 w-40 lg:w-60">
                    <FaSearch className="w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 pl-2 w-full"
                    />
                </div>
                <FaShoppingBag className="w-6 h-6 text-black cursor-pointer hover:text-gray-700 transition-all duration-200" />
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200">
                    Sign Up
                </button>
                <button className="px-4 py-2 text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200">
                    Sign In
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX className="w-6 h-6 text-black" /> : <HiMenu className="w-6 h-6 text-black" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40`}>
                <div className="flex flex-col items-center py-10 space-y-6">
                    {links.map((item) => (
                        <a key={item.id} href={item.link} className="text-lg font-medium text-black hover:text-gray-700 transition-all duration-200">{item.title}</a>
                    ))}
                    <div className="relative flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 focus-within:border-gray-600 w-48">
                        <FaSearch className="w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500 pl-2 w-full"
                        />
                    </div>
                    <FaShoppingBag className="w-6 h-6 text-black cursor-pointer hover:text-gray-700 transition-all duration-200" />
                    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200">Sign Up</button>
                    <button className="px-6 py-2 text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-all duration-200">Sign In</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
