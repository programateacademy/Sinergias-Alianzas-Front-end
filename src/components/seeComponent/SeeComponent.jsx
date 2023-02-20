import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import "./seeComponent.css";

//Redux actions
import {getComponent} from "../../store/actions/componentSlice"

import ViewComponent from './ViewComponent';

const SeeComponent = () => {

  //Dispatch action
  const dispatch = useDispatch()

  const {componentes} = useSelector((state) => ({...state.componentes}))

  const {id} = useParams()

  useEffect(() =>{
    if(id){
      dispatch(getComponent(id))
    }
  }, [id])

  return (
    <div>
      <ViewComponent {...componentes}/>
    </div>
  );
};

export default SeeComponent;
