import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddGallery = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveGallery = async (e) => {
    e.preventDefault();

    if (!title || !file) {
      setError("Title and image are required.");
      return;
    }

    setLoading(true);
    setError("");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:5000/galeri", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      setError("Failed to save gallery. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-md">
        <form onSubmit={saveGallery} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="galleryTitle">
              Image Title
            </label>
            <input
              type="text"
              id="galleryTitle"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Image Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="galleryDescription">
              Description
            </label>
            <textarea
              id="galleryDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Image Description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="galleryImage">
              Image
            </label>
            <input
              type="file"
              id="galleryImage"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={loadImage}
            />
          </div>
          {preview && (
            <div className="mb-4">
              <img src={preview} alt="Preview" className="block w-32 h-32 object-cover mx-auto" />
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGallery;
