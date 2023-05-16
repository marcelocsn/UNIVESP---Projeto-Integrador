const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//Dados para conexão com o banco de dados
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());
app.use(cors());


function validateLogin(req){
  const authHeader = req.headers.authorization;
  if(!authHeader) return false;
  
  const [,token] = authHeader.split(' ');
  if(!token) return false

  try{
      jwt.verify(token, 'FDC54S88E4F56DH54B843');
      return true;
  }catch(err){
      return false;
  }
}

app.get("/getData", (req,res)=>{

  if (validateLogin(req)){

    let sqlQuery = "SELECT * from alunos";
    db.query(sqlQuery,(err,result)=>{
      if (err) console.log(err);
      else res.send(result);
    });
  } else {
    return res.status(401).json({
      erro: true,
      mensagem: "Necessário realizar o login"  
    })
  }
});

//Busca os dados de um aluno específico passando id por parâmetro
app.get("/getById/:id", (req,res)=>{

  if (validateLogin(req)){
    const {id} = req.params; //Captura o id passado na URL
    let sqlQuery = "SELECT * from alunos WHERE idalunos = ?"; //Busca os dados do aluno
    db.query(sqlQuery, [id], (err,result)=>{
      if (err) console.log(err);
      else res.send(result);
    });
  } else{
      return res.status(401).json({
      erro: true,
      mensagem: "Necessário realizar o login"  
    })
  }  
});

//Deleta cadastro passando id por parâmetro
app.delete("/delete/:id", (req, res) =>{
  if (validateLogin(req)){
    const {id} = req.params; //Captura o id passado na URL
    let SQL = "DELETE FROM alunos WHERE idalunos = ?"; //Executa a query para deletar o aluno com aquele id
    db.query(SQL, [id], (err, result)=>{
      if (err) console.log(err);
      else res.send(result);
    });
  } else{
    return res.status(401).json({
      erro: true,
      mensagem: "Necessário realizar o login"  
    })
  }
});

app.post("/registerAluno", (req, res) => {
  const idalunos = req.body.idalunos;
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
 
  //Se o id for nulo então é um cadastro novo, senão é uma atualização
  if (idalunos===null){
    db.query("SELECT * FROM alunos WHERE cpf = ?", [cpf], (err, result) => { //Procura pelo CPF
      if (err) {
        res.send(err);
      }
      if (result.length == 0) { //Se não encontrou, dá seguimento ao cadastro
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
      } else { // Caso o CPF seja encontrado, retorna a mensagem ao usuário
        res.send({ msg: "CPF já cadastrado" });
      }
    });
  }
  else { //Caso o id não seja nulo, o cadastro é atualizado com as informações recebidas
    let sqlQuery = "UPDATE alunos SET nomeCompleto = ?, dataDeNascimento = ?, rg = ?, cpf = ?, sexo = ?, telefoneCelular = ?, telefoneContato = ?, `natural` = ?, ufNascimento = ?, emailPessoal = ?, emailFuncional = ?, religiao = ?, númeroRegistroCnh = ?, vencimentoDaCnh = ?, categoriaDaCnh = ?, suasRedesSociais = ?, pelotao = ?, numeroAluno = ?, re = ?, nomeDeGuerra = ?, dataDeAdmissão = ?, remanescente = ?, númeroDaCarteiraProfissional = ?, númeroDeSérieDaCarteiraProfissional = ?, númeroPisPasep = ?, estadoCivil = ?, possuiFilhosQuantos = ?, dataDeCasamento = ?, nomeDoCônjuge = ?, dataDeNascimentoDoCônjuge = ?, profissãoDoCônjuge = ?, nomeDoPai = ?, nomeDaMãe = ?, profissãoDoPai = ?, profissãoDaMãe = ?, nivelInstrucao = ?, cursoSuperiorQual = ?, idiomasQueFala = ?, númeroTítuloDeEleitor = ?, númeroZonaVotação = ?, númeroDaSeção = ?, cidadeEmQueVota = ?, citeUmBancoEmQuePossuiConta = ?, tipoDeConta = ?, agência = ?, númeroDaConta = ?, sinaisParticulares = ?, suaAltura = ?, cútis = ?, corDosOlhos = ?, corDosCabelos = ?, tipoDeCabelo = ?, tipoSanguineo = ?, fatorRh = ?, possuiAlergiaAAlgumAlimentoOuMedicação = ?, jaTeveOuPossuiAlgumaDoençaGrave = ?, possuiPlanoDeSaúde = ?, endereçoEmRibeirãoPreto = ?, bairro = ?, cep = ?, pontoDeReferência = ?, dpRibeirãoPreto = ?, batalhãoCidadeDeResidência = ?, ciaRibeirãoPreto = ?, seMorarComOutrosPmsInformarNomeEPelotãoDoPm = ?, possuiResidênciaPrópria = ?, possuiCarro = ?, placaCarro = ?, modeloCarro = ?, anoCarro = ?, possuiMoto = ?, placaMoto = ?, modeloMoto = ?, anoMoto = ?, jaFoiConduzidoAoDp = ?, seSimInformeOMotivo = ?, jaRespondeuOuRespondeInquéritoPolicial = ?, oQueVocêAlmejaNaPM = ?, quantasVezesJáPrestouParaAPm = ?, reprovadoEmQueFase = ?, possuiParentesPM = ?, seSimInformeONomeDoParentePM = ?, tomouVacinaDaCovid = ?, dataPrimeiraDose = ?, laboratorioPrimeiraDose = ?, dataSegundaDose = ?, laboratorioSegundaDose = ?, dataTerceiraDose = ?, laboratorioTerceriaDose = ? WHERE idalunos = ?";
    db.query(sqlQuery, [nomeCompleto, dataDeNascimento, rg, cpf, sexo, telefoneCelular, telefoneContato, natural, ufNascimento, emailPessoal, emailFuncional, religiao, númeroRegistroCnh, vencimentoDaCnh, categoriaDaCnh, suasRedesSociais, pelotao, numeroAluno, re, nomeDeGuerra, dataDeAdmissão, remanescente, númeroDaCarteiraProfissional, númeroDeSérieDaCarteiraProfissional, númeroPisPasep, estadoCivil, possuiFilhosQuantos, dataDeCasamento, nomeDoCônjuge, dataDeNascimentoDoCônjuge, profissãoDoCônjuge, nomeDoPai, nomeDaMãe, profissãoDoPai, profissãoDaMãe, nivelInstrucao, cursoSuperiorQual, idiomasQueFala, númeroTítuloDeEleitor, númeroZonaVotação, númeroDaSeção, cidadeEmQueVota, citeUmBancoEmQuePossuiConta, tipoDeConta, agência, númeroDaConta, sinaisParticulares, suaAltura, cútis, corDosOlhos, corDosCabelos, tipoDeCabelo, tipoSanguineo, fatorRh, possuiAlergiaAAlgumAlimentoOuMedicação, jaTeveOuPossuiAlgumaDoençaGrave, possuiPlanoDeSaúde, endereçoEmRibeirãoPreto, bairro, cep, pontoDeReferência, dpRibeirãoPreto, batalhãoCidadeDeResidência, ciaRibeirãoPreto, seMorarComOutrosPmsInformarNomeEPelotãoDoPm, possuiResidênciaPrópria, possuiCarro, placaCarro, modeloCarro, anoCarro, possuiMoto, placaMoto, modeloMoto, anoMoto, jaFoiConduzidoAoDp, seSimInformeOMotivo, jaRespondeuOuRespondeInquéritoPolicial, oQueVocêAlmejaNaPM, quantasVezesJáPrestouParaAPm, reprovadoEmQueFase, possuiParentesPM, seSimInformeONomeDoParentePM, tomouVacinaDaCovid, dataPrimeiraDose, laboratorioPrimeiraDose, dataSegundaDose, laboratorioSegundaDose, dataTerceiraDose, laboratorioTerceriaDose, idalunos], (err,result)=>{
      if (err) console.log(err);
      else res.send({ msg: "Dados atualizados com sucesso" });
    });
  }
});

// Cadastro do login e senha
app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, 10, (err, hash) => {
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

//Rota de login para a página adm, aqui por simplicidade está usando a mesma tabela do login do formulário, em produção deve-se criar uma tabela separada. A criação das credenciais a princípio deve ser feita diretamente no banco de dados
//Essa função é chamada dentro do contexto
app.post("/admLogin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //Busca os dados do email informado no banco de dados
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    //Se não encontrar, email incorreto
    if (result.length === 0) {
      res.status(400).json({ 
        erro: true,
        msg: "Usuário ou senha incorreta!" 
      });
    //Verifica se a senha está correta  
    } else {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.status(400).send(error);
        }
        //Validada a senha gera-se um token e envia ao usuário, esse token é armazenado no navegador do usuário, ao recarregar a página ou navegar para outra página o token é recuperado e validado, não sendo necessário fazer o login novamente
        //O primeiro parâmetro da função são os valores que estarão embutidos no token, o segundo é uma senha única que gera o token e o terceiro a validade do token
        if (response) {
          var token = jwt.sign ({id: result[0].password}, 'FDC54S88E4F56DH54B843', {expiresIn: 600} )
          res.json({ 
            error: false,
            msg: "Usuário logado",
            token 
          });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });

    }
  });
});

//Rota usada para validar se o token armazenado no navegador é válido
app.post("/validateToken", (req,res)=>{

  try{
    jwt.verify(req.body.recoveredUser, 'FDC54S88E4F56DH54B843');
    res.json({ 
      authenticated: true,
    });
  }catch(err){
    return res.json({
        authenticated: false,
    });
  }
});


app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
