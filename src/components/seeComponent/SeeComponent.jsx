import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./seeComponent.css";

//Redux actions
import { getComponent } from "../../store/actions/componentSlice";

import ViewComponent from "./ViewComponent";

const SeeComponent = () => {
  //Dispatch action
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getComponent(id));
    }
  }, [id]);

  const { componente } = useSelector((state) => ({ ...state.componente }));

  return (
    <div>
      <ViewComponent {...componente} />
    </div>
  );
};
export default SeeComponent;
