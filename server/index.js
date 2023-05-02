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

app.post("/registerAluno", (req, res) => {
  const nomeCompleto = req.body.nomeCompleto;
  const dataDeNascimento = req.body.dataDeNascimento;
  const rg = req.body.rg;
  const cpf = req.body.cpf;
  const sexo = req.body.sexo;
  const telefoneCelular = req.body.telefoneCelular;
  const telefoneContato = req.body.telefoneContato;
  const natural = req.body.natural;
  const ufNascimento = req.body.ufNascimento;
  const emailPessoal = req.body.emailPessoal;
  const emailFuncional = req.body.emailFuncional;
  const religiao = req.body.religiao;
  const númeroRegistroCnh = req.body.númeroRegistroCnh;
  const vencimentoDaCnh = req.body.vencimentoDaCnh;
  const categoriaDaCnh = req.body.categoriaDaCnh;
  const suasRedesSociais = req.body.suasRedesSociais;
  const pelotao = req.body.pelotao;
  const numeroAluno = req.body.numeroAluno;
  const re = req.body.re;
  const nomeDeGuerra = req.body.nomeDeGuerra;
  const dataDeAdmissão = req.body.dataDeAdmissão;
  const remanescente = req.body.remanescente;
  const númeroDaCarteiraProfissional = req.body.númeroDaCarteiraProfissional;
  const númeroDeSérieDaCarteiraProfissional = req.body.númeroDeSérieDaCarteiraProfissional;
  const númeroPisPasep = req.body.númeroPisPasep;
  const estadoCivil = req.body.estadoCivil;
  const possuiFilhosQuantos = req.body.possuiFilhosQuantos;
  const dataDeCasamento = req.body.dataDeCasamento;
  const nomeDoCônjuge = req.body.nomeDoCônjuge;
  const dataDeNascimentoDoCônjuge = req.body.dataDeNascimentoDoCônjuge;
  const profissãoDoCônjuge = req.body.profissãoDoCônjuge;
  const nomeDoPai = req.body.nomeDoPai;
  const nomeDaMãe = req.body.nomeDaMãe;
  const profissãoDoPai = req.body.profissãoDoPai;
  const profissãoDaMãe = req.body.profissãoDaMãe;
  const nivelInstrucao = req.body.nivelInstrucao;
  const cursoSuperiorQual = req.body.cursoSuperiorQual;
  const idiomasQueFala = req.body.idiomasQueFala;
  const númeroTítuloDeEleitor = req.body.númeroTítuloDeEleitor;
  const númeroZonaVotação = req.body.númeroZonaVotação;
  const númeroDaSeção = req.body.númeroDaSeção;
  const cidadeEmQueVota = req.body.cidadeEmQueVota;
  const citeUmBancoEmQuePossuiConta = req.body.citeUmBancoEmQuePossuiConta;
  const tipoDeConta = req.body.tipoDeConta;
  const agência = req.body.agência;
  const númeroDaConta = req.body.númeroDaConta;
  const sinaisParticulares = req.body.sinaisParticulares;
  const suaAltura = req.body.suaAltura;
  const cútis = req.body.cútis;
  const corDosOlhos = req.body.corDosOlhos;
  const corDosCabelos = req.body.corDosCabelos;
  const tipoDeCabelo = req.body.tipoDeCabelo;
  const tipoSanguineo = req.body.tipoSanguineo;
  const fatorRh = req.body.fatorRh;
  const possuiAlergiaAAlgumAlimentoOuMedicação = req.body.possuiAlergiaAAlgumAlimentoOuMedicação;
  const jaTeveOuPossuiAlgumaDoençaGrave = req.body.jaTeveOuPossuiAlgumaDoençaGrave;
  const possuiPlanoDeSaúde = req.body.possuiPlanoDeSaúde;
  const endereçoEmRibeirãoPreto = req.body.endereçoEmRibeirãoPreto;
  const bairro = req.body.bairro;
  const cep = req.body.cep;
  const pontoDeReferência = req.body.pontoDeReferência;
  const dpRibeirãoPreto = req.body.dpRibeirãoPreto;
  const batalhãoCidadeDeResidência = req.body.batalhãoCidadeDeResidência;
  const ciaRibeirãoPreto = req.body.ciaRibeirãoPreto;
  const seMorarComOutrosPmsInformarNomeEPelotãoDoPm = req.body.seMorarComOutrosPmsInformarNomeEPelotãoDoPm;
  const possuiResidênciaPrópria = req.body.possuiResidênciaPrópria;
  const possuiCarro = req.body.possuiCarro;
  const placaCarro = req.body.placaCarro;
  const modeloCarro = req.body.modeloCarro;
  const anoCarro = req.body.anoCarro;
  const possuiMoto = req.body.possuiMoto;
  const placaMoto = req.body.placaMoto;
  const modeloMoto = req.body.modeloMoto;
  const anoMoto = req.body.anoMoto;
  const jaFoiConduzidoAoDp = req.body.jaFoiConduzidoAoDp;
  const seSimInformeOMotivo = req.body.seSimInformeOMotivo;
  const jaRespondeuOuRespondeInquéritoPolicial = req.body.jaRespondeuOuRespondeInquéritoPolicial;
  const oQueVocêAlmejaNaPM = req.body.oQueVocêAlmejaNaPM;
  const quantasVezesJáPrestouParaAPm = req.body.quantasVezesJáPrestouParaAPm;
  const reprovadoEmQueFase = req.body.reprovadoEmQueFase;
  const possuiParentesPM = req.body.possuiParentesPM;
  const seSimInformeONomeDoParentePM = req.body.seSimInformeONomeDoParentePM;
  const tomouVacinaDaCovid = req.body.tomouVacinaDaCovid;
  const dataPrimeiraDose = req.body.dataPrimeiraDose;
  const laboratorioPrimeiraDose = req.body.laboratorioPrimeiraDose;
  const dataSegundaDose = req.body.dataSegundaDose;
  const laboratorioSegundaDose = req.body.laboratorioSegundaDose;
  const dataTerceiraDose = req.body.dataTerceiraDose;
  const laboratorioTerceriaDose = req.body.laboratorioTerceriaDose;
 
  db.query("SELECT * FROM alunos WHERE cpf = ?", [cpf], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
        db.query( "INSERT INTO alunos (nomeCompleto, dataDeNascimento, rg, cpf, sexo, telefoneCelular, telefoneContato, `natural`, ufNascimento, emailPessoal, emailFuncional, religiao, númeroRegistroCnh, vencimentoDaCnh, categoriaDaCnh, suasRedesSociais, pelotao, numeroAluno, re, nomeDeGuerra, dataDeAdmissão, remanescente, númeroDaCarteiraProfissional, númeroDeSérieDaCarteiraProfissional, númeroPisPasep, estadoCivil, possuiFilhosQuantos, dataDeCasamento, nomeDoCônjuge, dataDeNascimentoDoCônjuge, profissãoDoCônjuge, nomeDoPai, nomeDaMãe, profissãoDoPai, profissãoDaMãe, nivelInstrucao, cursoSuperiorQual, idiomasQueFala, númeroTítuloDeEleitor, númeroZonaVotação, númeroDaSeção, cidadeEmQueVota, citeUmBancoEmQuePossuiConta, tipoDeConta, agência, númeroDaConta, sinaisParticulares, suaAltura, cútis, corDosOlhos, corDosCabelos, tipoDeCabelo, tipoSanguineo, fatorRh, possuiAlergiaAAlgumAlimentoOuMedicação, jaTeveOuPossuiAlgumaDoençaGrave, possuiPlanoDeSaúde, endereçoEmRibeirãoPreto, bairro, cep, pontoDeReferência, dpRibeirãoPreto, batalhãoCidadeDeResidência, ciaRibeirãoPreto, seMorarComOutrosPmsInformarNomeEPelotãoDoPm, possuiResidênciaPrópria, possuiCarro, placaCarro, modeloCarro, anoCarro, possuiMoto, placaMoto, modeloMoto, anoMoto, jaFoiConduzidoAoDp, seSimInformeOMotivo, jaRespondeuOuRespondeInquéritoPolicial, oQueVocêAlmejaNaPM, quantasVezesJáPrestouParaAPm, reprovadoEmQueFase, possuiParentesPM, seSimInformeONomeDoParentePM, tomouVacinaDaCovid, dataPrimeiraDose, laboratorioPrimeiraDose, dataSegundaDose, laboratorioSegundaDose, dataTerceiraDose, laboratorioTerceriaDose) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
          [nomeCompleto, dataDeNascimento, rg, cpf, sexo, telefoneCelular, telefoneContato, natural, ufNascimento, emailPessoal, emailFuncional, religiao, númeroRegistroCnh, vencimentoDaCnh, categoriaDaCnh, suasRedesSociais, pelotao, numeroAluno, re, nomeDeGuerra, dataDeAdmissão, remanescente, númeroDaCarteiraProfissional, númeroDeSérieDaCarteiraProfissional, númeroPisPasep, estadoCivil, possuiFilhosQuantos, dataDeCasamento, nomeDoCônjuge, dataDeNascimentoDoCônjuge, profissãoDoCônjuge, nomeDoPai, nomeDaMãe, profissãoDoPai, profissãoDaMãe, nivelInstrucao, cursoSuperiorQual, idiomasQueFala, númeroTítuloDeEleitor, númeroZonaVotação, númeroDaSeção, cidadeEmQueVota, citeUmBancoEmQuePossuiConta, tipoDeConta, agência, númeroDaConta, sinaisParticulares, suaAltura, cútis, corDosOlhos, corDosCabelos, tipoDeCabelo, tipoSanguineo, fatorRh, possuiAlergiaAAlgumAlimentoOuMedicação, jaTeveOuPossuiAlgumaDoençaGrave, possuiPlanoDeSaúde, endereçoEmRibeirãoPreto, bairro, cep, pontoDeReferência, dpRibeirãoPreto, batalhãoCidadeDeResidência, ciaRibeirãoPreto, seMorarComOutrosPmsInformarNomeEPelotãoDoPm, possuiResidênciaPrópria, possuiCarro, placaCarro, modeloCarro, anoCarro, possuiMoto, placaMoto, modeloMoto, anoMoto, jaFoiConduzidoAoDp, seSimInformeOMotivo, jaRespondeuOuRespondeInquéritoPolicial, oQueVocêAlmejaNaPM, quantasVezesJáPrestouParaAPm, reprovadoEmQueFase, possuiParentesPM, seSimInformeONomeDoParentePM, tomouVacinaDaCovid, dataPrimeiraDose, laboratorioPrimeiraDose, dataSegundaDose, laboratorioSegundaDose, dataTerceiraDose, laboratorioTerceriaDose],
          (error, response) => {
            if (error) {
              res.send(error);
              console.log(error);
            }
            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
    } else {
      res.send({ msg: "CPF já cadastrado" });
    }
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
