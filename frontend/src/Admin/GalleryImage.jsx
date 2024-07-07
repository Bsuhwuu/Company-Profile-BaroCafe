import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Galeri = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    getGalleries();
  }, []);

  const getGalleries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/galeri");
      setGalleries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGallery = async (galleryId) => {
    try {
      await axios.delete(`http://localhost:5000/galeri/${galleryId}`);
      getGalleries();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <Link
        to="/addGaleri"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
      >
        Tambah Baru
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleries.map((gallery) => (
          <div
            key={gallery.id}
            className="rounded-2xl bg-white shadow-md relative group max-w-[300px]"
          >
            <img
              src={gallery.url}
              alt="Gambar Galeri"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <p className="text-xl font-bold">{gallery.title}</p>
              <p className="text-gray-500 text-sm line-clamp-2">
                {gallery.description}
              </p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/edit/${gallery.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteGallery(gallery.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
