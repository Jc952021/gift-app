import React, { useState } from "react";
import  PropTypes  from "prop-types";

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length>2){
      setCategories(cats=>[inputValue,...cats])
      setInputValue("")
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes={
setCategories:PropTypes.func
}

export default AddCategory;

//vid8
//usar el setcategories para actualziar el estado agregando nuevo valor del input
//como no tengo el estado de categories,que tranquilamente se peude traer
//usar la funcion de setcat,que dentro tendra el estado anterior
//hacer un if y que sea mayor de 2
//con el proptype,verificar que el setcate sea una funcion