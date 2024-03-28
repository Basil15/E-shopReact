import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <img src={category.image} alt={category.name} />
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
