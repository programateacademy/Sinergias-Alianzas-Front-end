import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter, Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    CardHeader,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

import { FaEdit } from "react-icons/fa";
class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>{this.props.buttonLabel}<FaEdit color="green" size={15} /></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Editar perfil</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name" style={{ color: "#161616" }}>
                                    Nombre
                                </Label>

                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    
                                    
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email" style={{ color: "#161616" }}>
                                    Correo
                                </Label>

                                <Input
                                    id="email"
                                    name="email"
                                    type="text"
                                    
                                    
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="Rol" style={{ color: "#161616" }}>
                                    Rol
                                </Label>

                                <Input
                                    id="Rol"
                                    name="rol"
                                    type="text"
                                    
                                    
                                />
                            </FormGroup>
                            </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Actualizar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;