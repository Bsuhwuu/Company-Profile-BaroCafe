import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/galeri");
      setGalleryItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-10 bg-gray-100" id="galeri">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Galeri Kita
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center justify-center">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white shadow-md relative group w-[300px] h-[450px] flex flex-col justify-center"
            >
              <img
                src={item.url}
                alt=""
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="text-gray-500 text-sm ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
