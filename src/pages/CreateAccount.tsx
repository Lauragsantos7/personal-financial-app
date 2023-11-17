import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import {Card, Form, Button} from "react-bootstrap"

function CreateAccount() {

  const {userData, handleChange} = useContext(UserContext);

  return (
    <>
    <Card className="mx-auto mt-5" style={{ width: "28rem" }}>
        <Card.Header>Login</Card.Header>

        <Card.Body>
          <Form className="">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="Digite seu email"
                type="email"
                name="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formPass">
              <Form.Label>Senha </Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Digite sua senha"
              ></Form.Control>
            </Form.Group>
            <div className="btn btn-primary btn-block">
            <Button
              type="button"
              
              
             
            >
              Entrar
            </Button>

            </div>
            
          </Form>
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


      <div className="card card-register mx-auto mt-5">
        <div className="card-header">Crie sua conta</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                className="form-control"
                placeholder="Digite seu nome completo"
                type="text"
                name="name"
                id="name"
                value={userData.name}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="address-street">Endereço</label>
              <input
                className="form-control"
                placeholder="Ex.: Av., Rua..."
                type="text"
                name="street"
                id="address-street"
                value={userData.street}
                onChange={handleChange}
              ></input>
              <br />
              <div className="form-row">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Número"
                    type="number"
                    name="houseNumber"
                    id="address-number"
                    value={userData.houseNumber}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Complemento"
                    type="text"
                    name="complement"
                    id="address-complement"
                    value={userData.complement}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Cidade"
                    type="text"
                    name="city"
                    id="address-city"
                    value={userData.city}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Estado"
                    type="text"
                    name="state"
                    id="address-state"
                    value={userData.state}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="birthday">Data de nascimento</label>
              <input
                className="form-control"
                placeholder="Digite sua data de nascimento"
                type="date"
                name="birthday"
                id="birthday"
                value={userData.birthday}
                onChange={handleChange}
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                placeholder="Digite seu email"
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group form-row">
              <div className="col-md-6">
                <label htmlFor="password">Senha</label>
                <input
                  className="form-control"
                  placeholder="Digite sua senha"
                  type="password"
                  name="password"
                  id="password"
                ></input>
              </div>
              <div className="col-md-6">
                <label htmlFor="password">Redigite a senha</label>
                <input
                  className="form-control"
                  placeholder="Confirme sua senha"
                  type="password"
                  name="password"
                  id="password"
                ></input>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" /> Lembrar
                  minha senha
                </label>
              </div>
            </div>
            <button className="btn btn-primary btn-block" type="button">Criar conta</button>
            <div className="text-center">
              <Link to="/" className="d-block small mt-3">
                Página de Login
              </Link>
              <Link to="/recoverpass" className="d-block small">
                Esqueceu a senha?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
