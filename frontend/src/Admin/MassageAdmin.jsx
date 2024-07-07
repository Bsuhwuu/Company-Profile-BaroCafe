import React, { useState, useEffect } from "react";
import axios from "axios";

const MassageAdmin = () => {
  const [massageList, setMassageList] = useState([]);
  const [newMassage, setNewMassage] = useState("");

  useEffect(() => {
    fetchMassageList();
  }, []);

  const fetchMassageList = async () => {
    try {
      const response = await axios.get("http://localhost:5000/massage");
      setMassageList(response.data);
    } catch (error) {
      console.error("Error fetching massage: ", error);
    }
  };

  const handleAddMassage = async () => {
    try {
      await axios.post("http://localhost:5000/massage", { text: newMassage });
      fetchMassageList();
      setNewMassage("");
    } catch (error) {
      console.error("Error adding massage: ", error);
    }
  };

  const handleDeleteMassage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/massage/${id}`);
      // Filter out the deleted massage from the massage list
      setMassageList(massageList.filter((massage) => massage.id !== id));
    } catch (error) {
      console.error("Error deleting massage: ", error);
    }
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="mb-10">
          <h1 className="text-center text-4xl font-bold font-cursive">
            Message Admin
          </h1>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value={newMassage}
            onChange={(e) => setNewMassage(e.target.value)}
            placeholder="Masukkan massage baru"
            className="border rounded-md py-2 px-3 mr-2"
          />
          <button
            onClick={handleAddMassage}
            className="bg-gradient-to-r from-primary  border-2  hover:scale-105 duration-200 text-black py-2 px-4 rounded-full"
          >
            Tambah
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {massageList.map((massage) => (
            <div
              key={massage.id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <p className="text-gray-600">{massage.text}</p>
              <button
                onClick={() => handleDeleteMassage(massage.id)}
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

export default MassageAdmin;
