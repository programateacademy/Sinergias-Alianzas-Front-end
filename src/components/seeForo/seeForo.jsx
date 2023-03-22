import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./css/seeForo.css";

//Redux actions
import { getComponent } from "../../store/actions/componentSlice";


import ViewForo from "./ViewForo";
import { getQuestions } from "../../store/thunks/foroThunks";

const SeeComponent = () => {
  //Dispatch action
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getComponent(id));
      dispatch(getQuestions(id));
    }
  }, [id]);
  const { foro } = useSelector((state) => ({ ...state.foro }));
  const { componente } = useSelector((state) => ({ ...state.componente }));
  console.log(foro)
  return (
    <div className="cards">
      {foro.map((item) => (
        <ViewForo key={item._id} {...item} {...componente}/>
      ))}
    </div>
  );
};
export default SeeComponent;
