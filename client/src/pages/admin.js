//Melhorias: Incluir filtragem de dados e barra de busca

import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import {Table, Button} from 'react-bootstrap';
import {Container, Nav, Navbar, Navdropdown} from 'react-bootstrap';
import "../App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

 function Admin(){

  const handleDelete = (id) => {
    if (window.confirm("Deseja realmente excluir o registro selecionado?")){
       Axios.delete(`http://localhost:3001/delete/${id}`);
       const newState = listAlunos.filter((data)=>data.idalunos!==id);
       setListAlunos(newState);
    }
  }

  
  const [listAlunos, setListAlunos] = useState([]);

  
  useEffect (() =>{
    Axios.get("http://localhost:3001/getData").then((response) => {
      setListAlunos(response.data);
    });
  }, []);


  return (
      <div>   
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Nascimento</th>
          <th>RG</th>
          <th>Pelotão</th>
          <th>N° Aluno</th>
          <th>RE</th>
          <th>Nome de Guerra</th>
          <th>Celular</th>
          <th>Telefone Contato</th>
          <th>Email</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {listAlunos.map((aluno) =>
            <tr>
              <td>{aluno.nomeCompleto}</td> 
              <td>{aluno.cpf}</td>
              <td>{aluno.dataDeNascimento}</td>
              <td>{aluno.rg}</td>
              <td>{aluno.pelotao}</td>
              <td>{aluno.numeroAluno}</td>
              <td>{aluno.re}</td>
              <td>{aluno.nomeDeGuerra}</td>
              <td>{aluno.telefoneCelular}</td>
              <td>{aluno.telefoneContato}</td>
              <td>{aluno.emailPessoal}</td>
              <td>  
                <Button variant="success" onClick={() => window.open(`http://localhost:3000/cadastro/${aluno.idalunos}`, "_self")}>Atualizar</Button>
                <Button variant="danger" onClick={() => handleDelete(aluno.idalunos)}>Excluir</Button>
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

export default Admin;