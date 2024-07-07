import React, { useState, useEffect } from "react";
import axios from "axios";

const TestimoniAdmin = () => {
  const [testimoniList, setTestimoniList] = useState([]);
  const [newTestimoni, setNewTestimoni] = useState({ name: "", text: "" });

  useEffect(() => {
    fetchTestimoniList();
  }, []);

  const fetchTestimoniList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/testimoni");
      setTestimoniList(response.data);
    } catch (error) {
      console.error("Error fetching testimonial: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimoni({ ...newTestimoni, [name]: value });
  };

  const handleAddTestimoni = async () => {
    try {
      await axios.post("http://localhost:5000/testimoni", newTestimoni);
      fetchTestimoniList(); // Ambil daftar testimoni terbaru setelah menambahkan testimonial baru
      setNewTestimoni({ name: "", text: "" });
    } catch (error) {
      console.error("Error adding testimonial: ", error);
    }
  };

  const handleDeleteTestimoni = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/testimoni/${id}`);
      fetchTestimoniList(); // Ambil daftar testimoni terbaru setelah menghapus testimonial
    } catch (error) {
      console.error("Error deleting testimonial: ", error);
    }
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="mb-10">
          <h1 className="text-center text-4xl font-bold font-cursive">
            Testimoni Admin
          </h1>
        </div>

        <div className="mb-6">
          <input
            type="text"
            name="name"
            value={newTestimoni.name}
            onChange={handleInputChange}
            placeholder="Nama"
            className="border rounded-md py-2 px-3 mr-2"
          />
          <input
            type="text"
            name="text"
            value={newTestimoni.text}
            onChange={handleInputChange}
            placeholder="Testimoni"
            className="border rounded-md py-2 px-3 mr-2"
          />
          <button
            onClick={handleAddTestimoni}
            className="bg-gradient-to-r  from-primary  border-2  hover:scale-105 duration-200 text-black py-2 px-4 rounded-full"
          >
            Tambah
          </button>
          {/* from-primary  border-2  hover:scale-105 duration-200 text-black */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimoniList.map((testimoni) => (
            <div
              key={testimoni.id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h2 className="text-xl font-bold mb-2">{testimoni.name}</h2>
              <p className="text-gray-600">{testimoni.text}</p>
              <button
                onClick={() => handleDeleteTestimoni(testimoni.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md mt-4"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimoniAdmin;
