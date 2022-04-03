import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["goku"]);

  // const handleAdd = () => {
  //   //setCategories([...categories, "xd"]);
  //   //segunda forma
  //  // setCategories(cats=>[...cats,"xd"])
  // };

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GiftExpertApp;

//vid4
//crear tu api key en giphy  - mi contra es giphy4849541
//la doc https://developers.giphy.com/docs/sdk

//vid5
//crear un nuevo arch gift y que renderize eso esn vez de app
//modificar el css
//paginas para estructurar el react
//https://es.reactjs.org/docs/faq-structure.html
//https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

//vid6
//crear un usestate de categoria donde es un []
//crear un ol y mapear dentro el categori
//crear un boton y que añada otra categ

//vid7
//crear un nuevo comp-donde tendra un form y un input

//vid8
//llevar el setcat al comp add para que lo use - ir ahi

//vid9
//crear un comp gifgrid donde mostrara la categoria en el mapeo - ir ahi

//vid10
//usar el useefect para ahecr el fecth

//vid11
//en gifgrid mapear cada imagen y que me devuelva un nuevo comp-ir a gifgrid

//vid12 añadir css

//vid13
//crear una carp helpers y pasar ahi la log del fetch
//usarlo en el useefect del gifgrid para luego setear el res al setitems
//al ahcer un fecth la url se puede poner encondeuri-significa que si el usuario pone espacios u otra cosa
//este valida que sea una url

//vid14
//crear una carp hooks/useFEcth - un customhooks son como funciones que dentro tendra una logica
//con un usestate que retornaran

//vid15
//dentro del custom hok llevar el useefect y hacer ahi la logica

//vid16
//usar https://animate.style/ en lagunas classname

//secion7
//vid3
//hacer npm run build
//descargar https://www.npmjs.com/package/http-server ya que react debe correr en un servidor
//usar http-server -o en tu proyecto
//la carp que me crea con build renombrarla a docs para que github lo suba
//al subir dara error ya que el html del build ,algunos href se iban a otra ruta