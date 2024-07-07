import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminText = () => {
  const [content, setContent] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getText();
  }, []);

  const getText = async () => {
    try {
      const response = await axios.get("http://localhost:5000/text");
      setContent(response.data.content);
    } catch (error) {
      console.error("Error fetching text: ", error);
    }
  };

  const handleEdit = () => {
    setEditedContent(content);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:5000/text", { content: editedContent });
      setIsEditing(false);
      getText(); // Refresh content after saving
    } catch (error) {
      console.error("Error updating text: ", error);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Admin Text</h1>
        {!isEditing && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
      </div>
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={handleChange}
          className="w-full h-48 border rounded-lg p-2"
        />
      ) : (
        <p className="whitespace-pre-line">{content}</p>
      )}
      {isEditing && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleSave}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default AdminText;
