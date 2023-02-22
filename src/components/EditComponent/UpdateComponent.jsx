import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import "./editComponent.css";

//Redux actions
import {getComponent} from "../../store/actions/componentSlice"

import EditComponent from './EditComponent';

const UpdateComponent = () => {

  //Dispatch action
  const dispatch = useDispatch()

  const {componente} = useSelector((state) => ({...state.componente}))

  const {id} = useParams()

  useEffect(() =>{
    if(id){
      dispatch(getComponent(id))
    }
  }, [id])

  return (
    <div>
      <EditComponent {...componente}/>
    </div>
  );
};

export default UpdateComponent;