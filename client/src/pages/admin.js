import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import {Table, Button} from 'react-bootstrap';
import {Container, Nav, Navbar, Navdropdown} from 'react-bootstrap';
import "../App.css";
//import {BrowserRouter} from 'react-router-dom'
//import Routes from './Routes'
//import logo from "../images/logo.png";
//import * as yup from "yup";
//import { ErrorMessage, Formik, Form, Field } from "formik";
//import 'bootstrap/dist/css/bootstrap.min.css';

 
const handleDelete = (email) => {
    Axios.delete(`http://localhost:3001/delete/${email}`)
 }

function Cadastro(){

 const [listAlunos, setListAlunos] = useState([]);



    useEffect (() =>{
      Axios.get("http://localhost:3001/getData").then((response) => {
        setListAlunos(response.data);
      });
    }, []);



    return (
// Está buscando os dados de login, mas na versão final como são muitos dados a ideia é exibir somente os principais e ao clicar carregar a página com todos os dados     
      <div>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {listAlunos.map((aluno) =>
            <tr>
              <td>1</td> 
              <td> {aluno.email}</td>
              <td>{aluno.password}</td>
              <td>  
                <Button variant="success" onClick={() => window.open(`http://localhost:3000/update/${aluno.email}`, "_self")}>Atualizar</Button>
                <Button variant="danger" onClick={() => handleDelete(aluno.email)}>Excluir</Button>
              </td>
            </tr>
        )}
      </tbody>
      </Table>
          
          <footer className="footer">
          <a href="https://github.com/paulocp-tech"><i className="fab fa-github"></i> paulocp-tech </a>
          <a href="https://github.com/marcelocsn"><i className="fab fa-github"></i> marcelocsn </a> © 2023 - Todos os direitos reservados.
        </footer>
    </div>
    )      
}

export default Cadastro;