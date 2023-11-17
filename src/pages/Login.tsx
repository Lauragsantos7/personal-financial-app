import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Forms from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const redirectToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <Card className="mx-auto mt-5" style={{ width: "28rem" }}>
        <Card.Header>Login</Card.Header>

        <Card.Body>
          <Forms className="">
            <Forms.Group className="mb-3" controlId="formEmail">
              <Forms.Label>Email</Forms.Label>
              <Forms.Control
                placeholder="Digite seu email"
                type="email"
                name="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              ></Forms.Control>
            </Forms.Group>

            <Forms.Group className="mb-3 " controlId="formPass">
              <Forms.Label>Senha </Forms.Label>
              <Forms.Control
                name="password"
                type="password"
                placeholder="Digite sua senha"
              ></Forms.Control>
            </Forms.Group>
            <div className="btn btn-primary btn-block">
            <Button
              type="button"
              
              onClick={redirectToHome}
             
            >
              Entrar
            </Button>

            </div>
            
          </Forms>
        </Card.Body>

        <div className="text-center">
          <Link to="/create-account" className="d-block small mt-3">
            Criar conta{" "}
          </Link>
          <Link to="/recoverpass" className="d-block small">
            Esqueceu a senha?
          </Link>
        </div>
      </Card>
    </>
  );
}

export default Login;
