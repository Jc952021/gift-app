import React from "react";

import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { loading, data:images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;

//vid9
//crear una funcion para hacer un fetch
//la doc de giphy https://developers.giphy.com/docs/api/endpoint#search - buscar en search
//por cada gif/img que me devuelva un obj
//se peude poner un ? despues de images ya que puede ser otra fetch a otra api para traer las img-si no llegan entonces daria error
//con ? se previene

//vi10
//cuando enviamos una prop a un compon. este lo recibe en sus props.loque enviaste
//pero se puede enviar como props un obj y al que le mandemos,este recibira como props este mismo obj que le enviamos
