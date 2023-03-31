import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import './Formulario.css';

const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
});

function Formulario() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;
    if (username.value === "admin" && password.value === "admin") {
      setAuthenticated(true);
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <div>
      {authenticated ? (
        <div>
          <h2>Formulário</h2>
          <Formik
            initialValues={{ name: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {({ values, errors, touched }) => (
              <Form>
                <div>
                  <label htmlFor="name">Nome</label>
                  <Field type="text" id="name" name="name" value={values.name} />
                  <ErrorMessage name="name">{msg => <div className="error">{msg}</div>}</ErrorMessage>
                </div>
                <div>
                  <label htmlFor="email">E-mail</label>
                  <Field type="email" id="email" name="email" value={values.email} />
                  <ErrorMessage name="email">{msg => <div className="error">{msg}</div>}</ErrorMessage>
                </div>
                <button type="submit">Enviar</button>
              </Form>
            )}
          </Formik>
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Usuário</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Formulario;
