import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getComponents } from "../../store/actions/componentSlice";

import ListCourses from "../../components/ListCourses/ListCourses";

import { Spinner } from "reactstrap";

const Home = () => {
  const { componentes, loading } = useSelector((state) => ({
    ...state.componente,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComponents());
  }, []);

  if (loading) {
    return <Spinner>Cargando</Spinner>;
  }
  return (
    <>
      <div style={{ backgroundColor: "green" }}>Hola x2
        <div style={{backgroundColor: "red"}}>
          Hola{componentes &&
            componentes.map((item, index) => 
              <>
                <ListCourses key={index} {...item} />
              </>
            )}
        </div>
      </div>
    </>
  );
};

export default Home;
