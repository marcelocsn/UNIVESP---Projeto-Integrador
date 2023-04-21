const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//Dados para conexão com o banco de dados
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.get("/getData", (req,res)=>{

  let sqlQuery = "SELECT * from usuarios";
  db.query(sqlQuery,(err,result)=>{
    if (err) console.log(err);
    else res.send(result);
  });
  
});

app.get("/getById/:email", (req,res)=>{

  const {email} = req.params;
  let sqlQuery = "SELECT * from usuarios WHERE email = ?";
  db.query(sqlQuery, [email], (err,result)=>{
    if (err) console.log(err);
    else res.send(result);
  });
  
});

app.put("/edit", (req,res)=>{

  const email = req.body.email;
  const password = req.body.password;

  let sqlQuery = "UPDATE usuarios SET password = ? WHERE email = ?";
  db.query(sqlQuery, [password,email], (err,result)=>{
    if (err) console.log(err);
    else res.send({ msg: "Dados atualizados com sucesso" });
  });
  
});

app.delete("/delete/:email", (req, res) =>{
  const {email} = req.params;
  let SQL = "DELETE FROM usuarios WHERE email = ?";
  db.query(SQL, [email], (err, result)=>{
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (email, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
