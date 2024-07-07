import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditGallery = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // Menambah state untuk deskripsi
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGalleryById();
  }, []);

  const getGalleryById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/galeri/${id}`);
      if (response.data) {
        setTitle(response.data.title || "");
        setDescription(response.data.description || ""); // Mengatur deskripsi dari respons data
        setFile(response.data.image || "");
        setPreview(response.data.url || "");
      } else {
        console.error("Data tidak ditemukan");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateGallery = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description); // Menambah deskripsi ke FormData
    try {
      await axios.patch(`http://localhost:5000/galeri/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-1/2">
        <form onSubmit={updateGallery}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Judul Gambar
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Judul Gambar"
            />
          </div>

          {/* Input untuk deskripsi */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Deskripsi
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi Gambar"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gambar
            </label>
            <div className="flex items-center justify-center">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-400 hover:text-white">
                <input
                  type="file"
                  className="hidden"
                  onChange={loadImage}
                />
                <span className="mt-2">Pilih file...</span>
              </label>
            </div>
          </div>

          {preview && (
            <figure className="mb-4">
              <img src={preview} alt="Preview Image" className="w-32 h-32" />
            </figure>
          )}

          <div className="mb-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGallery;
