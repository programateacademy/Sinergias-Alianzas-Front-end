// Dependencias
import React from "react";
import { useDispatch } from "react-redux";

// Funciones de Redux
import {
  RESET,
  sendVerificationEmail,
} from "../../store/actions/auth/authSlice";

// Estilos
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Row,
  Container,
} from "reactstrap";

const Notification = () => {
  //* Hooks Redux
  const dispatch = useDispatch();

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */
  //* Función para enviar el email cuando se registre un usuario
  const sendVerEmail = async () => {
    await dispatch(sendVerificationEmail());

    await dispatch(RESET());
  };
  
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col sm="12">
          <Card className="p-4">
            <CardTitle tag="h5">Verificar Cuenta</CardTitle>
            <CardText>
              Para confirmar tu cuenta, por favor revisa tu correo.
            </CardText>
            <Button color="success" onClick={sendVerEmail}>
              Reenviar Correo
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Notification;
