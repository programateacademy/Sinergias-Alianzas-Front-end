import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,  
  Input,
} from "reactstrap";

import { FaEdit } from "react-icons/fa";
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>
          {this.props.buttonLabel}
          <FaEdit color="green" size={15} />
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Editar perfil</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <p>Nombre</p>
                <Input id="name" name="name" type="text" />
              </FormGroup>

              <FormGroup>
                <p>Correo</p>
                <Input id="email" name="email" type="text" />
              </FormGroup>

              <FormGroup>
                <p>Rol</p>
                <Input id="Rol" name="rol" type="text" />
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Actualizar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
