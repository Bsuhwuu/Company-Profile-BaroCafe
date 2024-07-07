import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Produk = () => {
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

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <Link
        to="/add"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
      >
        Add New
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl bg-white shadow-md relative group max-w-[300px]"
          >
            <img
              src={product.url}
              alt="Product Image"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <p className="text-xl font-bold">{product.name}</p>
              <p className="text-gray-500 text-sm line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/edit/${product.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produk;
