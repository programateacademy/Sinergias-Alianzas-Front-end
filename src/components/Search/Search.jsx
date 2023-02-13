// Dependencias
import React from "react";

// Estilos
import { Input } from "reactstrap";

const Search = ({ value, onChange }) => {
  return (
    <Input placeholder="Buscar" type="text" value={value} onChange={onChange} />
  );
};

export default Search;
