import React, { useState } from 'react';
import axios from 'axios';
import "../popularManage/addAnime.css";

const AddAnime = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend API to add the anime
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      formData.append('description', description);
      const response = await axios.post('http://localhost:3000/api/addAnime', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Anime added successfully:', response.data);
      // Reset form fields
      setImage('');
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding anime:', error);
    }
  };

  return (
    <div className="add-anime-container">
      <h2>Add New Anime</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Anime</button>
      </form>
    </div>
  );
};

export default AddAnime;
