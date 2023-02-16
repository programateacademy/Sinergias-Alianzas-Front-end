import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getComponents } from "../../store/actions/componentSlice";

import ListCourses from "../../components/ListCourses/ListCourses";

import { Spinner } from "reactstrap";

const Home = () => {
  const { componentes, loading } = useSelector((state) => ({
    ...state.componentes
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
      <div>
        <div>
          {componentes &&
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
