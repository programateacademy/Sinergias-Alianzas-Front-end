import React from 'react'
import './addComponent.css'

import { Button, Col, FormText,Form, FormGroup, Label, Input } from "reactstrap";

const AddComponent = ()=>{
    return(
<>
<h1 className='principalComponente'>Información del Componente</h1>

  <Form>
    <Form className='form1'>
    <FormGroup>
    <Label for="exampleUrl">
      Url
    </Label>
    <Input
      id="exampleUrl"
      name="url"
      placeholder="url imagen"
      type="url"
      
    />
  </FormGroup>

  <FormGroup >
    <Label>
      Titulo Componente
    </Label>
      <Input
        placeholder="Titulo componente"
        type="text"
      />
  </FormGroup>

  <FormGroup>
    <Label>
      Definición
    </Label>
      <Input
        placeholder="Definición"
        type="text"
      />
  </FormGroup>

  <FormGroup>
    <Label for="exampleUrl">
      Url Video
    </Label>
    <Input
      id="exampleUrl"
      name="url"
      placeholder="url Video"
      type="url"
    />
  </FormGroup>

  <FormGroup>
    <Label>
      Descripción Componente
    </Label>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
  </FormGroup>
  </Form>

<Form className='form2'>
<FormGroup >
    <Label>
      Imagen 1
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        Archivos soportados con formato jpg y png
      </FormText>
  </FormGroup>

  <FormGroup >
    <Label>
      Imagen 2
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        Archivos soportados con formato jpg y png
      </FormText>
  </FormGroup>

  <FormGroup >
    <Label>
      Imagen 3
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        Archivos soportados con formato jpg y png
      </FormText>
  </FormGroup>

</Form>


<Form className='Objetivos'>
  <FormGroup>
    <Label>
      Objtivo 1
    </Label>
      <Input
        placeholder="Objetivo"
        type="text"
      />
  </FormGroup>

  <FormGroup>
    <Label>
      Objtivo 2
    </Label>
      <Input
        placeholder="Objetivo"
        type="text"
      />
  </FormGroup>

  <FormGroup>
    <Label>
      Objtivo 3
    </Label>
      <Input
        placeholder="Objetivo"
        type="text"
      />
  </FormGroup>

  </Form>

  <Form className='lineasTrabajo'>
  <FormGroup>
    <Label>
      Lineas de Trabajo 1
    </Label>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
  </FormGroup>

  <FormGroup>
    <Label>
      Lineas de Trabajo 2
    </Label>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
  </FormGroup>
  </Form>

  <h2 className='principalComponente'>Recursos</h2>

<Form className='Recursos'>
<FormGroup >
    <Label>
      Metodologia
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
        Cargue los documentos
      </FormText>
  </FormGroup>

  <FormGroup >
    <Label>
      Formatos e Instructivos
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
      Cargue los documentos
      </FormText>
  </FormGroup>

  <FormGroup >
    <Label>
      Formatos e Instructivos
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
      Cargue los documentos
      </FormText>
  </FormGroup>

  <FormGroup >
    <Label>
      Diagnosticos de Salud
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
      Cargue los documentos
      </FormText>
  </FormGroup>

  <FormGroup >
    <Label>
     Herramientas y Manuales de Protocolo
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
      Cargue los documentos
      </FormText>
  </FormGroup>

  
  <FormGroup >
    <Label>
     Material Educativo
    </Label>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      <FormText>
      Cargue los documentos
      </FormText>
  </FormGroup>
</Form>
</Form>

</>
    )
}

export default AddComponent;
