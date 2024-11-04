import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    image: "",
    "highest medal achieved": "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      image: "",
      "highest medal achieved": "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} />
      <input name="weight" placeholder="Weight" type="number" value={formData.weight} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <input name="highest medal achieved" placeholder="Highest Medal" value={formData["highest medal achieved"]} onChange={handleChange} />
      <label>
        Greased:
        <input type="checkbox" name="greased" checked={formData.greased} onChange={handleChange} />
      </label>
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
