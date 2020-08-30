import React, { useState } from "react";

import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
  //const categorias = ["goku", "one piece", "vegeta"];

  const [categories, setCategories] = useState(["goku"]);

  //const hadleAdd = () => {
  //setCategories([...categories, "hola"]);
  //};

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />

      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
