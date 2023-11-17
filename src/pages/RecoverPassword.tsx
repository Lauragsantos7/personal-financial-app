import { Link, useNavigate, } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useState } from "react";

function RecoverPassword() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const redirectToLogin = () => {
    navigate("/")
  }

  
  if (showAlert) {
    return (
        <>
      <Alert variant="warning">
        <Alert.Heading>Email enviado com sucesso!</Alert.Heading>
        <p>
          Um email para alteração da senha foi enviado para a sua caixa de
          entrada.
        </p>
      </Alert>
      <Button onClick={ redirectToLogin}>Retornar à pagina de login</Button>
      </>
    )
  }

  return (
    <>
      <Card
        className="mx-auto mt-5"
        style={{ width: "28rem", marginTop: "150rem" }}
      >
        <Card.Header>Recuperar senha</Card.Header>

        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="form-control"
                placeholder="Digite seu email"
                type="email"
                name="email"
                id="email"
              ></Form.Control>
            </Form.Group>

            <div className="btn btn-primary btn-block">
              <Button type="button" onClick={() => setShowAlert(true)}>
                Recuperar senha
              </Button>
            </div>
          </Form>
          <div className="text-center">
            <Link to="/create-account" className="d-block small mt-3">
              Criar conta{" "}
            </Link>
            <Link to="/" className="d-block small">
              Página de Login
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default RecoverPassword;
