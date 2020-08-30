import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
//import { geetGifs } from "./helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  //useEffect(() => {
  //  geetGifs(category).then((imgs) => setImages(imgs));
  // }, [category]);

  const { data, loading } = useFetchGifs(category);
  //geetGifs();
  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading...</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
