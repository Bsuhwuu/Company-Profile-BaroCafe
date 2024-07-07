import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 z-40 flex justify-center items-center bg-green-900 bg-opacity-50">
        <div className="bg-white w-64 p-4 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold mb-4 text-center">MENU</h1>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/massage" className="block w-full py-2 text-center hover:text-gray-700 focus:outline-none border border-gray-300 rounded-md">
                  Message
                </Link>
              </li>
              <li>
                <Link to="/text" className="block w-full py-2 text-center hover:text-gray-700 focus:outline-none border border-gray-300 rounded-md">
                  TEXT BARO
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="block w-full py-2 text-center hover:text-gray-700 focus:outline-none border border-gray-300 rounded-md">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/produk" className="block w-full py-2 text-center hover:text-gray-700 focus:outline-none border border-gray-300 rounded-md">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/testimoni" className="block w-full py-2 text-center hover:text-gray-700 focus:outline-none border border-gray-300 rounded-md">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link to="/" className="block w-full py-2 text-center hover:text-gray-700 focus:outline-none border border-gray-300 rounded-md">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-24 z-50">
        <div className="bg-gray-700 bg-opacity-50 rounded-lg p-2">
          <p className="text-white font-semibold">HANYA ADMIN</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
