// dependencies
import React from "react";

// styles
import { Input } from "reactstrap";

const Search = ({ value, onChange }) => {
  return (
    <Input placeholder="Buscar" type="text" value={value} onChange={onChange} />
  );
};

export default Search;
