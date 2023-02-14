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
    CardText
} from 'reactstrap';

import {  FaTrash } from "react-icons/fa";
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
                <Button onClick={this.toggle}>{this.props.buttonLabel}<FaTrash color="red" size={15} /></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Eliminar perfil</ModalHeader>
                    <ModalBody>
                    <CardText> Esta seguro de Eliminar este perfil?</CardText>  
                        <Button color="success">Confirmar</Button>{' '}
                        <Button color="danger">Eliminar</Button>{' '}
                    
                        
                    </ModalBody>
                    <ModalFooter>
                        
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;