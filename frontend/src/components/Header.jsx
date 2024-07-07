import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/website/coffee_logo.png";
import { FaUserShield } from "react-icons/fa";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Product",
    link: "/#produk",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Testimoni",
    link: "/#testimoni",
  },
  {
    id: 5,
    name: "Galeri",
    link: "/#gallery",
  },
];

const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <Link to="/" className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive">
                <img src={Logo} alt="Logo" className="w-14" />
                Baro Cafe
              </Link>
            </div>

            {/* Link section */}
            <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a href={menu.link} className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Admin button dengan link */}
              <Link to="/login" className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                Admin
                <FaUserShield className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
