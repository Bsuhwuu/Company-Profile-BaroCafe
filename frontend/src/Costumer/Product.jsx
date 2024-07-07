import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-10 bg-gray-100" id="produk">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Minuman Kita
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white shadow-md relative group w-[300px] h-[450px] flex flex-col justify-center"
            >
              <img
                src={product.url}
                alt=""
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{product.name}</h1>
                <p className="text-gray-500 text-sm ">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
