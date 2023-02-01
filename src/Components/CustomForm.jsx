import { Component } from 'react';
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


const CustomForm = () => {
  console.log('create custom form')
  // Creación variables formulario
  // Creación variable nombre de usuario
  const [username, setUsername] = useState("")
  // Creación variable contraseña
  const [password, setPassword] = useState("")
  // DisabledButton
  const [disabledButton, setDisabledButton] = useState(true)
  // Error
  const [error, setError] = useState(false)

  // Función para validar el formulario
  const login = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (username === "" || password === "") {
      setError(true)
      return
    }

    setError(false);
  };

  return (
    <div  style={{ maxWidth: "700px", margin: '0 auto', alignItems: "center", justifyContent: "center", marginTop: '20px', marginBottom: '20px' }}>
      {error ? <Alert key='danger' variant='danger' >Los datos son incorrectos. !</Alert>: null}
      <Form noValidate validated={!error} onSubmit={login} >
        <Form.Group as={Row} className="mb-3" controlId="txt.usernameInput">
          <Form.Label className='ml-auto'>USERNAME</Form.Label>
          <Form.Control type="text" placeholder="" name='username' onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="txt.passInput">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control type="password" placeholder="" name='password' onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
      </Form>
      {!disabledButton ? <Button type="submit" variant="dark">Iniciar Sesión</Button> : null}
    </div>
  );
};

export default CustomForm;