import React, { useState } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import iconDelete from "./Assets/icono borrar.png";

function Example(args) {
  const [modal, setModal] = useState(false);


  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{padding:"0"}} color="none" onClick={toggle}>
        <img src={iconDelete} alt="" />
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>¿Está seguro de eliminar este componente?</ModalHeader>        
        
        <ModalFooter>
          <Button style={{backgroundColor:"red", border:"none"}} onClick={toggle}>
            Borrar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
