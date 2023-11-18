import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

function CreateAccount() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthday: "",
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [target.name]: [target.value],
    });
  };

  return (
    <>
      <Card className="mx-auto mt-5" style={{ width: "28rem" }}>
        <Card.Header>Crie sua conta</Card.Header>

        <Card.Body>
          <Form className="">
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                className="form-control"
                placeholder="Digite seu nome completo"
                type="text"
                name="name"
                id="name"
                value={userData.name}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="form-control"
                placeholder="Digite seu email"
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Data de nascimento </Form.Label>
              <Form.Control
                className="form-control"
                type="date"
                name="birthday"
                id="birthday"
                value={userData.birthday}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label>Senha </Form.Label>
              <Form.Control
                className="form-control"
                placeholder="Digite sua senha"
                type="password"
                name="password"
                id="password"
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 " >
              <Form.Label>Confirme a senha </Form.Label>
              <Form.Control
                className="form-control"
                placeholder="Digite novamente sua senha"
                type="password"
                id="password-confirm"
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                <Form.Check
                  type="checkbox"
                  name="termo"
                  className="mb-2"
                  label="Li e concordo com os termos"
                ></Form.Check>
              </Form.Label>
            </Form.Group>

            <div className="btn btn-primary btn-block">
              <Button type="button">Criar conta</Button>
            </div>
            <div className="text-center">
              <Link to="/" className="d-block small mt-3">
                Página de Login
              </Link>
              <Link to="/recoverpass" className="d-block small">
                Esqueceu a senha?
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreateAccount;
