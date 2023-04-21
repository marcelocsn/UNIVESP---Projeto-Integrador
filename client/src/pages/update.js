//Quando for editar um usuário carrega esta página com os dados

import React, {useState, useEffect} from "react";
import "../App.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";
import { useParams } from "react-router-dom";
//import {BrowserRouter} from 'react-router-dom'
//import Routes from './Routes'
//import logo from "../images/logo.png";
//import { useState } from "react";

    const handleUpdate = (values) => {
      Axios.put("http://localhost:3001/edit", {
        email: values.email,
        password: values.password,
      }).then((response) => {
        alert(response.data.msg);
        console.log(response);
      });
    };
  
    const validationsLogin = yup.object().shape({
      email: yup
        .string()
        .email("email inválido")
        .required("O email é obrigatório"),
      password: yup
        .string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .required("A senha é obrigatória"),
    });
  
    const validationsRegister = yup.object().shape({
      email: yup
        .string()
        .email("email inválido")
        .required("O email é obrigatório"),
      password: yup
        .string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .required("A senha é obrigatória"),
      confirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "As senhas são diferentes")
        .required("A confirmação da senha é obrigatória"),
    });



function Update(){
  
    
    //Captura o id do aluno passado por parâmetro na URL
    const emailAluno = useParams();
    
    //console.log(emailAluno);

    const [dadosAluno, setDadosAluno] = useState([]);


    //Busca os dados do aluno com o id passado por parâmetro
    useEffect (() =>{
      Axios.get(`http://localhost:3001/getById/${emailAluno.email}`)
        .then((response) => {
        setDadosAluno(response.data);
        })
      }, []);

    //Testar se esta recebendo os dados
    console.log(dadosAluno.email);
    console.log(dadosAluno);
    
    //Não estou conseguindo atribuir os valores aos campos do formulário, o formulário é somente representativo

    return (
        <div className="container">
          <h1>Cadastro</h1>
          <Formik
            enableReinitialize={true} 
            initialValues={{profissao: 'op1', email: dadosAluno.email}}
            onSubmit={handleUpdate}
            //validationSchema={validationsRegister}
            
          >
            {props => (
            <Form className="register-form">
              <div className="register-form-group">
                <Field name="email" className="form-field" placeholder="Email" /*onChange={(e)=>{
                  setEmail(e.target.value);
                }} */
                />
    
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>

              <label>Informações profissionais</label>
    
              <div className="form-group">
                <Field as='select' name="profissao" className="form-field" placeholder="Profissão">
                  <option value="op1">Opção 1</option>
                  <option value = "op2">Opção 2</option>
                </Field>

                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>
              {props.values.profissao === 'op1'&& (
              <div className="form-group">
                <Field
                  name="password"
                  className="form-field"
                  placeholder="Senha"
                  //value={props.values.profissao}
                  //disabled={props.values.profissao == "op1"}
                />
    
                <ErrorMessage
                  component="span"
                  name="confirmation"
                  className="form-error"
                />
              </div>
              )}
              <div className="form-group">
                <Field
                  name="confirmation2"
                  className="form-field"
                  placeholder="Senha"
                />
    
                <ErrorMessage
                  component="span"
                  name="confirmation2"
                  className="form-error"
                />
              </div>

              <button  /*onClick={handleUpdate(props.values)} /*disabled ={!isValid}*/ className="button" type="submit">
                Salvar
              </button>
            </Form>
            )}
          </Formik>
    
          <footer className="footer">
          <a href="https://github.com/paulocp-tech"><i className="fab fa-github"></i> paulocp-tech </a>
          <a href="https://github.com/marcelocsn"><i className="fab fa-github"></i> marcelocsn </a> © 2023 - Todos os direitos reservados.
        </footer>
        </div>
      );
}

export default Update;