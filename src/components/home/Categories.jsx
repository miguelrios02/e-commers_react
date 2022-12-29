import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = ({ setCategory }) => {
  const [categoris, setCategoris] = useState([]);
  const handleClickCategory = (id) => {
    setCategory(id);
  };

  useEffect(() => {
    const URL =
      "https://e-commerce-api.academlo.tech/api/v1/products/categories";
    axios
      .get(URL)
      .then((res) => setCategoris(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <ul>
        <li onClick={() => handleClickCategory("")}>All product</li>
        {categoris.map((categori) => (
        <li onClick={() => handleClickCategory(categori.id)}
            key={categori.id}>
            {categori.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
