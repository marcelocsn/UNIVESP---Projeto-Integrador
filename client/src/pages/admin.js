//Melhorias: Incluir filtragem de dados e barra de busca

import React, { useEffect, useContext } from "react";
import Axios from "axios";
import { useState } from "react";
import "../App.css";
import { AuthContext } from "../contexts/auth";
import {Table, Button} from 'react-bootstrap';
//import {Container, Nav, Navbar, Navdropdown} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';



 function Admin(){

  //importa a função logout do contexto
  const {logout, user} = useContext(AuthContext);
  
  //Configura a conexão do axios com a api, incluindo o token no cabeçalho.
  const apiConection = Axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+user}
  });

  const handleDelete = (id) => {
    if (window.confirm("Deseja realmente excluir o registro selecionado?")){
       apiConection.delete(`/delete/${id}`); //Faz a chamada para deletar o registro no servidor
       //Fazer um if para alterar o state somente depois de receber a resposta do servidor
       const newState = listAlunos.filter((data)=>data.idalunos!==id); //Remove do state para não precisar recarregar todos os dados novamente.
       setListAlunos(newState);
    }
  }

  
  const [listAlunos, setListAlunos] = useState([]);

  //Executado quando a página é carregada, faz a requisição para buscar os dados de todos os alunos.
  useEffect (() =>{
    apiConection.get("/getData").then((response) => {
      setListAlunos(response.data);
    });
  }, [apiConection]);

  function handleLogout() {
    logout(); //chama a função importada do contexto
  };

  

  return (
      <div>   
      <button onClick={handleLogout}>Sair</button>
      {/*<button onClick={()=>{navigate('/cadastro')}}>Novo aluno</button>*/}
      <button onClick={() => window.open('http://localhost:3000/cadastro/', "_self")}>Novo aluno</button>
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
            <tr key={aluno.idalunos}>
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
          <a href="https://github.com/lfernandomorales"><i className="fab fa-github"></i> lfernandomorales </a>
          <a href="https://github.com/marcelocsn"><i className="fab fa-github"></i> marcelocsn </a> © 2023 - Todos os direitos reservados.
        </footer>
    </div>   
    )      
}

export default Admin;