import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import '../styles/Formulario.css';
import schema from '../schemas/formularioSchema';
import Axios from 'axios';

//Página de cadastro que foi compartilhada no whatsapp, o usuário será redirecionado para cá após realizar o login
//Melhorias: Validação CPF, CEP, mascara nos campos de CPF, Placa veículos e preencher automaticamente campos de endereço com base no CEP usando API

function Formulario() {

  const handleSubmit = (values, actions) => {
    //Transformar strings vazias em null para não dar problema de tipo no banco de dados. Se inicializar com null não consegui fazer o Yup rodar as validações
    const newValues = {...values};
    for(let key in newValues){
      if(newValues[key]==='') newValues[key] = null;
    }
    console.log(newValues);

    Axios.post("http://localhost:3001/registerAluno", {
      nomeCompleto: newValues.nomeCompleto,
      dataDeNascimento: newValues.dataDeNascimento,
      rg: newValues.rg,
      cpf: newValues.cpf,
      sexo: newValues.sexo,
      telefoneCelular: newValues.telefoneCelular,
      telefoneContato: newValues.telefoneContato,
      natural: newValues.natural,
      ufNascimento: newValues.ufNascimento,
      emailPessoal: newValues.emailPessoal,
      emailFuncional: newValues.emailFuncional,
      religiao: newValues.religiao,
      númeroRegistroCnh: newValues.númeroRegistroCnh,
      vencimentoDaCnh: newValues.vencimentoDaCnh,
      categoriaDaCnh: newValues.categoriaDaCnh,
      suasRedesSociais: newValues.suasRedesSociais,
      pelotao: newValues.pelotao,
      numeroAluno: newValues.numeroAluno,
      re: newValues.re,
      nomeDeGuerra: newValues.nomeDeGuerra,
      dataDeAdmissão: newValues.dataDeAdmissão,
      remanescente: newValues.remanescente,
      númeroDaCarteiraProfissional: newValues.númeroDaCarteiraProfissional,
      númeroDeSérieDaCarteiraProfissional: newValues.númeroDeSérieDaCarteiraProfissional,
      númeroPisPasep: newValues.númeroPisPasep,
      estadoCivil: newValues.estadoCivil,
      possuiFilhosQuantos: newValues.possuiFilhosQuantos,
      dataDeCasamento: newValues.dataDeCasamento,
      nomeDoCônjuge: newValues.nomeDoCônjuge,
      dataDeNascimentoDoCônjuge: newValues.dataDeNascimentoDoCônjuge,
      profissãoDoCônjuge: newValues.profissãoDoCônjuge,
      nomeDoPai: newValues.nomeDoPai,
      nomeDaMãe: newValues.nomeDaMãe,
      profissãoDoPai: newValues.profissãoDoPai,
      profissãoDaMãe: newValues.profissãoDaMãe,
      nivelInstrucao: newValues.nivelInstrucao,
      cursoSuperiorQual: newValues.cursoSuperiorQual,
      idiomasQueFala: newValues.idiomasQueFala,
      númeroTítuloDeEleitor: newValues.númeroTítuloDeEleitor,
      númeroZonaVotação: newValues.númeroZonaVotação,
      númeroDaSeção: newValues.númeroDaSeção,
      cidadeEmQueVota: newValues.cidadeEmQueVota,
      citeUmBancoEmQuePossuiConta: newValues.citeUmBancoEmQuePossuiConta,
      tipoDeConta: newValues.tipoDeConta,
      agência: newValues.agência,
      númeroDaConta: newValues.númeroDaConta,
      sinaisParticulares: newValues.sinaisParticulares,
      suaAltura: newValues.suaAltura,
      cútis: newValues.cútis,
      corDosOlhos: newValues.corDosOlhos,
      corDosCabelos: newValues.corDosCabelos,
      tipoDeCabelo: newValues.tipoDeCabelo,
      tipoSanguineo: newValues.tipoSanguineo,
      fatorRh: newValues.fatorRh,
      possuiAlergiaAAlgumAlimentoOuMedicação: newValues.possuiAlergiaAAlgumAlimentoOuMedicação,
      jaTeveOuPossuiAlgumaDoençaGrave: newValues.jaTeveOuPossuiAlgumaDoençaGrave,
      possuiPlanoDeSaúde: newValues.possuiPlanoDeSaúde,
      endereçoEmRibeirãoPreto: newValues.endereçoEmRibeirãoPreto,
      bairro: newValues.bairro,
      cep: newValues.cep,
      pontoDeReferência: newValues.pontoDeReferência,
      dpRibeirãoPreto: newValues.dpRibeirãoPreto,
      batalhãoCidadeDeResidência: newValues.batalhãoCidadeDeResidência,
      ciaRibeirãoPreto: newValues.ciaRibeirãoPreto,
      seMorarComOutrosPmsInformarNomeEPelotãoDoPm: newValues.seMorarComOutrosPmsInformarNomeEPelotãoDoPm,
      possuiResidênciaPrópria: newValues.possuiResidênciaPrópria,
      possuiCarro: newValues.possuiCarro,
      placaCarro: newValues.placaCarro,
      modeloCarro: newValues.modeloCarro,
      anoCarro: newValues.anoCarro,
      possuiMoto: newValues.possuiMoto,
      placaMoto: newValues.placaMoto,
      modeloMoto: newValues.modeloMoto,
      anoMoto: newValues.anoMoto,
      jaFoiConduzidoAoDp: newValues.jaFoiConduzidoAoDp,
      seSimInformeOMotivo: newValues.seSimInformeOMotivo,
      jaRespondeuOuRespondeInquéritoPolicial: newValues.jaRespondeuOuRespondeInquéritoPolicial,
      oQueVocêAlmejaNaPM: newValues.oQueVocêAlmejaNaPM,
      quantasVezesJáPrestouParaAPm: newValues.quantasVezesJáPrestouParaAPm,
      reprovadoEmQueFase: newValues.reprovadoEmQueFase,
      possuiParentesPM: newValues.possuiParentesPM,
      seSimInformeONomeDoParentePM: newValues.seSimInformeONomeDoParentePM,
      tomouVacinaDaCovid: newValues.tomouVacinaDaCovid,
      dataPrimeiraDose: newValues.dataPrimeiraDose,
      laboratorioPrimeiraDose: newValues.laboratorioPrimeiraDose,
      dataSegundaDose: newValues.dataSegundaDose,
      laboratorioSegundaDose: newValues.laboratorioSegundaDose,
      dataTerceiraDose: newValues.dataTerceiraDose,
      laboratorioTerceriaDose: newValues.laboratorioTerceriaDose,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });

    // envie os dados do formulário para a API ou armazene-os em algum lugar
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={schema}
      initialValues={{
          pelotao: '',
          numeroAluno: '',
          re: '',
          nomeCompleto: '',
          nomeDeGuerra: '',
          dataDeAdmissão: '',
          dataDeNascimento: '',
          remanescente: 'Nao',
          rg: '',
          cpf: '',
          sexo: 'M',
          telefoneCelular: '',
          telefoneContato: '',
          natural: '',
          ufNascimento: 'SP',
          cursoSuperiorQual: '',
          estadoCivil: 'Solteiro',
          possuiFilhosQuantos: '0',
          dataDeCasamento: '',
          nomeDoCônjuge: '',
          dataDeNascimentoDoCônjuge: '',
          profissãoDoCônjuge: '',
          suasRedesSociais: '',
          nomeDoPai: '',
          profissãoDoPai: '',
          nomeDaMãe: '',
          profissãoDaMãe: '',
          sinaisParticulares: '',
          suaAltura: '',
          cútis: '',
          corDosOlhos: '',
          corDosCabelos: '',
          tipoDeCabelo: '',
          idiomasQueFala: '',
          tipoSanguineo: '',
          fatorRh: '',
          citeUmBancoEmQuePossuiConta: '',
          tipoDeConta: '',
          agência: '',
          númeroDaConta: '',
          númeroDaCarteiraProfissional: '',
          númeroDeSérieDaCarteiraProfissional: '',
          númeroPisPasep: '',
          númeroTítuloDeEleitor: '',
          númeroZonaVotação: '',
          númeroDaSeção: '',
          cidadeEmQueVota: '',
          númeroRegistroCnh: '',
          vencimentoDaCnh: '',
          categoriaDaCnh: '',
          endereçoEmRibeirãoPreto: '',
          bairro: '',
          cep: '',
          pontoDeReferência: '',
          dpRibeirãoPreto: '',
          batalhãoCidadeDeResidência: '',
          ciaRibeirãoPreto: '',
          emailPessoal: '',
          emailFuncional: '',
          seMorarComOutrosPmsInformarNomeEPelotãoDoPm: '',
          possuiResidênciaPrópria: '',
          possuiCarro: '',
          placaCarro: '',
          modeloCarro: '',
          anoCarro: '',
          possuiMoto: '',
          placaMoto: '',
          modeloMoto: '',
          anoMoto: '',
          jaFoiConduzidoAoDp: 'N',
          seSimInformeOMotivo: '',
          jaRespondeuOuRespondeInquéritoPolicial: '',
          JáTeveOuPossuiAlgumaDoençaGrave: '',
          oQueVocêAlmejaNaPM: '',
          possuiAlergiaAAlgumAlimentoOuMedicação: '',
          possuiPlanoDeSaúde: '',
          quantasVezesJáPrestouParaAPm: 1,
          reprovadoEmQueFase: '',
          possuiParentesPM: '',
          seSimInformeONomeDoParentePM: '',
          tomouVacinaDaCovid: '',
          dataPrimeiraDose: '',
          laboratorioPrimeiraDose: '',
          dataSegundaDose: '',
          laboratorioSegundaDose: '',
          dataTerceiraDose: '',
          laboratorioTerceiraDose: '',
          religiao: '',
          nivelInstrucao:'',
          // adicione todos os campos aqui
      }}
      >
      {props => (/*render = {({values})=> (*/
        <Form>

          <label>Dados Pessoais</label>
          <label htmlFor="nomeCompleto">Nome completo:</label>
                <Field
                  type="text"
                  id="nomeCompleto"
                  name="nomeCompleto"
                />
            <ErrorMessage
              component="span"
              name="nomeCompleto"
              className="form-error"
            />

          <label htmlFor="dataDeNascimento">Data de nascimento:</label>
                <Field
                  type="date"
                  id="dataDeNascimento"
                  name="dataDeNascimento"
                />
            <ErrorMessage
              component="span"
              name="dataDeNascimento"
              className="form-error"
            />

          <label htmlFor="rg">RG:</label>
                <Field
                  type="rg"
                  id="rg"
                  name="rg"
                />
            <ErrorMessage
              component="span"
              name="rg"
              className="form-error"
            />

          <label htmlFor="cpf">CPF:</label>
                <Field
                  type="text"
                  id="cpf"
                  name="cpf"
                />
            <ErrorMessage
              component="span"
              name="cpf"
              className="form-error"
            />

          <label htmlFor="sexo">Sexo:</label>
                <Field as='select'
                  id="sexo"
                  name="sexo">
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                </Field>
            <ErrorMessage
              component="span"
              name="sexo"
              className="form-error"
            />

          <label htmlFor="telefoneCelular">Telefone celular:</label>
                <Field
                  type="text"
                  id="telefoneCelular"
                  name="telefoneCelular"
                />
            <ErrorMessage
              component="span"
              name="telefoneCelular"
              className="form-error"
            />

          <label htmlFor="telefoneContato">Telefone contato:</label>
                <Field
                  type="text"
                  id="telefoneContato"
                  name="telefoneContato"
                />
            <ErrorMessage
              component="span"
              name="telefoneContato"
              className="form-error"
            />

          <label htmlFor="natural">Natural:</label>
                <Field
                  type="text"
                  id="natural"
                  name="natural"
                />
            <ErrorMessage
              component="span"
              name="natural"
              className="form-error"
            />

          <label htmlFor="ufNascimento">UF nascimento:</label>
                <Field as='select'
                  type="text"
                  id="ufNascimento"
                  name="ufNascimento">
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AM">AM</option>
                    <option value="AP">AP</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MG">MG</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="PR">PR</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="RS">RS</option>
                    <option value="SP">SP</option>
                    <option value="SC">SC</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                </Field>
            <ErrorMessage
              component="span"
              name="ufNascimento"
              className="form-error"
            />

           <label htmlFor="emailPessoal">Email pessoal:</label>
                <Field
                  type="text"
                  id="emailPessoal"
                  name="emailPessoal"
                />
            <ErrorMessage
              component="span"
              name="emailPessoal"
              className="form-error"
            />
          <label htmlFor="emailFuncional">Email funcional:</label>
                <Field
                  type="text"
                  id="emailFuncional"
                  name="emailFuncional"
                />
            <ErrorMessage
              component="span"
              name="emailFuncional"
              className="form-error"
            />

          <label htmlFor="religiao">Religião:</label>
                <Field
                  type="text"
                  id="religiao"
                  name="religiao"
                />
            <ErrorMessage
              component="span"
              name="religiao"
              className="form-error"
            />

          <label htmlFor="númeroRegistroCnh">Número de registro da CNH:</label>
                <Field
                  type="text"
                  id="númeroRegistroCnh"
                  name="númeroRegistroCnh"
                />
            <ErrorMessage
              component="span"
              name="númeroRegistroCnh"
              className="form-error"
            />

          <label htmlFor="vencimentoDaCnh">Vencimento da CNH:</label>
                <Field
                  type="date"
                  id="vencimentoDaCnh"
                  name="vencimentoDaCnh"
                /> 
            <ErrorMessage
              component="span"
              name="vencimentoDaCnh"
              className="form-error"
            />

          <label htmlFor="categoriaDaCnh">Categoria da CNH:</label>
                <Field as='select'
                  type="text"
                  id="categoriaDaCnh"
                  name="categoriaDaCnh">
                    <option value="" disabled>Selecione</option>
                    <option value = "A">A</option>
                    <option value = "B">B</option>
                    <option value = "C">C</option>
                    <option value = "D">D</option>
                    <option value = "E">E</option>
                    <option value = "AB">AB</option>
                    <option value = "AC">AC</option>
                    <option value = "AD">AD</option>
                    <option value = "AE">AE</option>
                </Field>
            <ErrorMessage
              component="span"
              name="categoriaDaCnh"
              className="form-error"
            />

          <label htmlFor="suasRedesSociais">Policial, informe suas redes sociais:</label>
                <Field
                  type="text"
                  id="suasRedesSociais"
                  name="suasRedesSociais"
                />
            <ErrorMessage
              component="span"
              name="suasRedesSociais"
              className="form-error"
            />

          <label>Dados profissionais</label>
          <label htmlFor="pelotao">Pelotão:</label>
                <Field as='select'
                  type="text"
                  id="pelotao"
                  name="pelotao">
                  <option value="" disabled> Selecione</option>
                  <option value="1º">1º</option>
                  <option value="2º">2º</option>
                </Field>
            <ErrorMessage
              component="span"
              name="pelotao"
              className="form-error"
            />

          <label htmlFor="numeroAluno">Nº Aluno:</label>
                <Field as='select'
                  type="number"
                  id="numeroAluno"
                  name="numeroAluno">
                    <option value="" disabled>Selecione</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </Field>
            <ErrorMessage
              component="span"
              name="numeroAluno"
              className="form-error"
            />

          <label htmlFor="re">Nº RE:</label>
                <Field
                  type="text"
                  id="re"
                  name="re"
                />
            <ErrorMessage
              component="span"
              name="re"
              className="form-error"
            />

          <label htmlFor="nomeDeGuerra">Nome de guerra:</label>
                <Field
                  type="text"
                  id="nomeDeGuerra"
                  name="nomeDeGuerra"
                />
            <ErrorMessage
              component="span"
              name="nomeDeGuerra"
              className="form-error"
            />

          <label htmlFor="dataDeAdmissão">Data de admissão:</label>
                <Field
                  type="date"
                  id="dataDeAdmissão"
                  name="dataDeAdmissão"
                />
            <ErrorMessage
              component="span"
              name="dataDeAdmissão"
              className="form-error"
            />

          <label htmlFor="remanescente">Remanescente:</label>
                <Field as='select'
                  type="text"
                  id="remanescente"
                  name="remanescente">
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                </Field>
            <ErrorMessage
              component="span"
              name="remanescente"
              className="form-error"
            />

          <label htmlFor="númeroDaCarteiraProfissional">Número da carteira profissional?:</label>
                <Field
                  type="text"
                  id="númeroDaCarteiraProfissional"
                  name="númeroDaCarteiraProfissional"
                />
            <ErrorMessage
              component="span"
              name="númeroDaCarteiraProfissional"
              className="form-error"
            />

          <label htmlFor="númeroDeSérieDaCarteiraProfissional">Número de série da carteira profissional?:</label>
                <Field
                  type="text"
                  id="númeroDeSérieDaCarteiraProfissional"
                  name="númeroDeSérieDaCarteiraProfissional"
                />
            <ErrorMessage
              component="span"
              name="númeroDeSérieDaCarteiraProfissional"
              className="form-error"
            />

          <label htmlFor="númeroPisPasep">Número Pis/Pasep:</label>
                <Field
                  type="text"
                  id="númeroPisPasep"
                  name="númeroPisPasep"
                />                
                     <ErrorMessage
              component="span"
              name="númeroPisPasep"
              className="form-error"
            />

         <label>Dados Familiares</label>
         <label htmlFor="estadoCivil">Estado civil:</label>
                <Field as='select'
                  type="text"
                  id="estadoCivil"
                  name="estadoCivil">
                    <option value="Solteiro">Solteiro</option>
                    <option value="Casado">Casado</option>
                    <option value="Divorciado">Divorciado</option>
                    <option value="Amasiado">Amasiado</option>
                    <option value="Viuvo">Viuvo</option>
                </Field>
            <ErrorMessage
              component="span"
              name="estadoCivil"
              className="form-error"
            />


          <label htmlFor="possuiFilhosQuantos">Possui filhos? Quantos?:</label>
                <Field as='select'
                  type="text"
                  id="possuiFilhosQuantos"
                  name="possuiFilhosQuantos">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </Field>
            <ErrorMessage
              component="span"
              name="possuiFilhosQuantos"
              className="form-error"
            />

          {props.values.estadoCivil === 'Casado'&& (
          <div>
          <label htmlFor="dataDeCasamento">Data de casamento?:</label>
                <Field
                  type="date"
                  id="dataDeCasamento"
                  name="dataDeCasamento"
                />
            <ErrorMessage
              component="span"
              name="dataDeCasamento"
              className="form-error"
            />         
          </div>          
          )}

          {props.values.estadoCivil === 'Casado'&& (
          <div>
          <label htmlFor="nomeDoCônjuge">Nome do cônjuge:</label>
                <Field
                  type="text"
                  id="nomeDoCônjuge"
                  name="nomeDoCônjuge"
                />
            <ErrorMessage
              component="span"
              name="nomeDoCônjuge"
              className="form-error"
            />
          </div>
          )}

          {props.values.estadoCivil === 'Casado'&& (
          <div>
          <label htmlFor="dataDeNascimentoDoCônjuge">Data de nascimento do cônjuge:</label>
                <Field
                  type="date"
                  id="dataDeNascimentoDoCônjuge"
                  name="dataDeNascimentoDoCônjuge"
                />
            <ErrorMessage
              component="span"
              name="dataDeNascimentoDoCônjuge"
              className="form-error"
            />
          </div>
          )}

          {props.values.estadoCivil === 'Casado'&& (
          <div>
          <label htmlFor="profissãoDoCônjuge">Profissão do cônjuge:</label>
                <Field
                  type="text"
                  id="profissãoDoCônjuge"
                  name="profissãoDoCônjuge"
                />
            <ErrorMessage
              component="span"
              name="profissãoDoCônjuge"
              className="form-error"
            />
          </div>
          )}

          <label htmlFor="nomeDoPai">Nome do pai:</label>
                <Field
                  type="text"
                  id="nomeDoPai"
                  name="nomeDoPai"
                />
            <ErrorMessage
              component="span"
              name="nomeDoPai"
              className="form-error"
            />


          <label htmlFor="nomeDaMãe">Nome da mãe:</label>
                <Field
                  type="text"
                  id="nomeDaMãe"
                  name="nomeDaMãe"
                />
            <ErrorMessage
              component="span"
              name="nomeDaMãe"
              className="form-error"
            />

          <label htmlFor="profissãoDoPai">Profissão do pai:</label>
                <Field
                  type="text"
                  id="profissãoDoPai"
                  name="profissãoDoPai"
                />
            <ErrorMessage
              component="span"
              name="profissãoDoPai"
              className="form-error"
            />

          <label htmlFor="profissãoDaMãe">Profissão da mãe:</label>
                <Field
                  type="text"
                  id="profissãoDaMãe"
                  name="profissãoDaMãe"
                />
            <ErrorMessage
              component="span"
              name="profissãoDaMãe"
              className="form-error"
            />
          
          <label>Escolaridade</label>
    
          <label htmlFor="nivelInstrucao">Nível de instrução:</label>
                <Field as='select'
                  type="text"
                  id="nivelInstrucao"
                  name="nivelInstrucao">
                    <option value="" disabled>Selecione</option>
                    <option value="2º Grau">2º Grau</option>
                    <option value="Superior Incompleto">Superior Incompleto</option>
                    <option value="Superior Completo">Superior Completo</option>
                    <option value="Pos-graduacao">Pós-Graduação</option>
                    <option value="Mestrado">Mestrado</option>
                    <option value="Doutorado">Doutorado</option>
                </Field>
            <ErrorMessage
              component="span"
              name="nivelInstrucao"
              className="form-error"
            />
                
          {(props.values.nivelInstrucao !== '2º Grau'&& props.values.nivelInstrucao !== 'Superior Incompleto'&& props.values.nivelInstrucao !== '')&& (
          <div>    
          <label htmlFor="cursoSuperiorQual">Curso Superior? Qual?:</label>
                <Field
                  type="text"
                  id="cursoSuperiorQual"
                  name="cursoSuperiorQual"
                />
            <ErrorMessage
              component="span"
              name="cursoSuperiorQual"
              className="form-error"
            />
          </div>
          )}
    
          <label htmlFor="idiomasQueFala">Idiomas que fala:</label>
                <Field
                  type="text"
                  id="idiomasQueFala"
                  name="idiomasQueFala"
                />
            <ErrorMessage
              component="span"
              name="idiomasQueFala"
              className="form-error"
            />
          
          <label>Dados eleitorais</label>
          <label htmlFor="númeroTítuloDeEleitor">Número Título de Eleitor:</label>
                <Field
                  type="text"
                  id="númeroTítuloDeEleitor"
                  name="númeroTítuloDeEleitor"
                />
            <ErrorMessage
              component="span"
              name="númeroTítuloDeEleitor"
              className="form-error"
            />

          <label htmlFor="númeroZonaVotação">Número zona de votação:</label>
                <Field
                  type="text"
                  id="númeroZonaVotação"
                  name="númeroZonaVotação"
                />
            <ErrorMessage
              component="span"
              name="númeroZonaVotação"
              className="form-error"
            />

          <label htmlFor="númeroDaSeção">Número da seção:</label>
                <Field
                  type="text"
                  id="númeroDaSeção"
                  name="númeroDaSeção"
                />
            <ErrorMessage
              component="span"
              name="númeroDaSeção"
              className="form-error"
            />

          <label htmlFor="cidadeEmQueVota">Cidade em que vota:</label>
                <Field
                  type="text"
                  id="cidadeEmQueVota"
                  name="cidadeEmQueVota"
                />
            <ErrorMessage
              component="span"
              name="cidadeEmQueVota"
              className="form-error"
            />

          <label>Dados bancários</label>
          <label htmlFor="citeUmBancoEmQuePossuiConta">Cite um banco em que possui conta:</label>
                <Field
                  type="text"
                  id="citeUmBancoEmQuePossuiConta"
                  name="citeUmBancoEmQuePossuiConta"
                />
            <ErrorMessage
              component="span"
              name="citeUmBancoEmQuePossuiConta"
              className="form-error"
            />

          <label htmlFor="tipoDeConta">Qual o tipo da conta supracitada?:</label>
                <Field as='select'
                  type="text"
                  id="tipoDeConta"
                  name="tipoDeConta">
                    <option value="" disabled>Selecione</option>
                    <option value="Corrente"> Corrente</option>
                    <option value="Poupança"> Poupança</option>
                    <option value="Salário"> Salário</option>
                    <option value="Pagamento"> Pagamento</option>
                </Field>
            <ErrorMessage
              component="span"
              name="tipoDeConta"
              className="form-error"
            />


          <label htmlFor="agência">Qual a agência?:</label>
                <Field
                  type="text"
                  id="agência"
                  name="agência"
                />
            <ErrorMessage
              component="span"
              name="agência"
              className="form-error"
            />

          <label htmlFor="númeroDaConta">Qual o número da conta?:</label>
                <Field
                  type="text"
                  id="númeroDaConta"
                  name="númeroDaContaa"
                />
            <ErrorMessage
              component="span"
              name="númeroDaConta"
              className="form-error"
            />
          
          <label>Informações físicas</label>
          <label htmlFor="sinaisParticulares">Sinais particulares:</label>
                <Field
                  type="text"
                  id="sinaisParticulares"
                  name="sinaisParticulares"
                />
            <ErrorMessage
              component="span"
              name="sinaisParticulares"
              className="form-error"
            />

          <label htmlFor="suaAltura">Sua altura:</label>
                <Field
                  type="number"
                  id="suaAltura"
                  name="suaAltura"
                  placeholder="Altura (m)"
                />
            <ErrorMessage
              component="span"
              name="suaAltura"
              className="form-error"
            />

          <label htmlFor="cútis">Cútis:</label>
                <Field
                  type="text"
                  id="cútis"
                  name="cútis"
                />
            <ErrorMessage
              component="span"
              name="cútis"
              className="form-error"
            />

          <label htmlFor="corDosOlhos">Cor dos olhos:</label>
                <Field
                  type="text"
                  id="corDosOlhos"
                  name="corDosOlhos"
                />
            <ErrorMessage
              component="span"
              name="corDosOlhos"
              className="form-error"
            />

          <label htmlFor="corDosCabelos">Cor dos cabelos:</label>
                <Field
                  type="text"
                  id="corDosCabelos"
                  name="corDosCabelos"
                />
            <ErrorMessage
              component="span"
              name="corDosCabelos"
              className="form-error"
            />

          <label htmlFor="tipoDeCabelo">Tipo de cabelo:</label>
                <Field
                  type="text"
                  id="tipoDeCabelo"
                  name="tipoDeCabelo"
                  placeholder='Liso, Crespo, Encaracolado, etc...'
                />
            <ErrorMessage
              component="span"
              name="tipoDeCabelo"
              className="form-error"
            />


          <label>Dados saúde</label>
          <label htmlFor="tipoSanguineo">Tipo sanguíneo:</label>
                <Field as='select'
                  type="text"
                  id="tipoSanguineo"
                  name="tipoSanguineo">
                    <option value="" disabled>Selecione</option>
                    <option value="A"> A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </Field>
            <ErrorMessage
              component="span"
              name="tipoSanguineo"
              className="form-error"
            />
                

          <label htmlFor="fatorRh">Fator RH:</label>
                <Field as='select'
                  type="text"
                  id="fatorRh"
                  name="fatorRh">
                    <option value="" disabled>Selecione</option>
                    <option value="Positivo"> Positivo</option>
                    <option value="Negativo"> Negativo</option>
                  </Field>
            <ErrorMessage
              component="span"
              name="fatorRh"
              className="form-error"
            />
                
          <label htmlFor="possuiAlergiaAAlgumAlimentoOuMedicação">Possui alergia a algum alimento ou medicação?:</label>
                <Field
                  type="text"
                  id="possuiAlergiaAAlgumAlimentoOuMedicação"
                  name="possuiAlergiaAAlgumAlimentoOuMedicação"
                  placeholder="Em caso negativo deixe o campo em branco"
                />
            <ErrorMessage
              component="span"
              name="possuiAlergiaAAlgumAlimentoOuMedicação"
              className="form-error"
            />

          <label htmlFor="jaTeveOuPossuiAlgumaDoençaGrave">Já teve ou possui alguma doença grave?:</label>
                <Field
                  type="text"
                  id="jaTeveOuPossuiAlgumaDoençaGrave"
                  name="jaTeveOuPossuiAlgumaDoençaGrave"
                  placeholder="Em caso negativo deixe o campo em branco"
                />
            <ErrorMessage
              component="span"
              name="jaTeveOuPossuiAlgumaDoençaGrave"
              className="form-error"
            />

          <label htmlFor="possuiPlanoDeSaúde">Possui plano de saúde?:</label>
                <Field
                  type="text"
                  id="possuiPlanoDeSaúde"
                  name="possuiPlanoDeSaúde"
                  placeholder="Caso não possua deixe o campo em branco"
                />
            <ErrorMessage
              component="span"
              name="possuiPlanoDeSaúde"
              className="form-error"
            />

          <label>Endereço</label>
          <label htmlFor="endereçoEmRibeirãoPreto">Endereço com número/apartamento em Ribeirão Preto:</label>
                <Field
                  type="text"
                  id="endereçoEmRibeirãoPreto"
                  name="endereçoEmRibeirãoPreto"
                />
<           ErrorMessage
              component="span"
              name="endereçoEmRibeirãoPreto"
              className="form-error"
            />

          <label htmlFor="bairro">Bairro:</label>
                <Field
                  type="text"
                  id="bairro"
                  name="bairro"
                />
            <ErrorMessage
              component="span"
              name="bairro"
              className="form-error"
            />

          <label htmlFor="cep">CEP:</label>
                <Field
                  type="text"
                  id="cep"
                  name="cep"
               />
            <ErrorMessage
              component="span"
              name="cep"
              className="form-error"
            />

          <label htmlFor="pontoDeReferência">Ponto de referência:</label>
                <Field
                  type="text"
                  id="pontoDeReferência"
                  name="pontoDeReferência"
                />
            <ErrorMessage
              component="span"
              name="pontoDeReferência"
              className="form-error"
            />

          <label htmlFor="dpRibeirãoPreto">DP Ribeirão Preto:</label>
                <Field
                  type="text"
                  id="dpRibeirãoPreto"
                  name="dpRibeirãoPreto"
                />
            <ErrorMessage
              component="span"
              name="dpRibeirãoPreto"
              className="form-error"
            />

          <label htmlFor="batalhãoCidadeDeResidência">Batalhão cidade de residência:</label>
                <Field
                  type="text"
                  id="batalhãoCidadeDeResidência"
                  name="batalhãoCidadeDeResidência"
                />
            <ErrorMessage
              component="span"
              name="batalhãoCidadeDeResidência"
              className="form-error"
            />

          <label htmlFor="ciaRibeirãoPreto">Cia Ribeirão Preto:</label>
                <Field
                  type="text"
                  id="ciaRibeirãoPreto"
                  name="ciaRibeirãoPreto"
                />
            <ErrorMessage
              component="span"
              name="ciaRibeirãoPreto"
              className="form-error"
            />
            
            <label htmlFor="seMorarComOutrosPmsInformarNomeEPelotãoDoPm">Mora com outro PM? Se sim, informe nome e pelotão do PM:</label>
                <Field
                  type="text"
                  id="seMorarComOutrosPmsInformarNomeEPelotãoDoPm"
                  name="seMorarComOutrosPmsInformarNomeEPelotãoDoPm"
                  placeholder="Em caso negativo deixe o campo em branco"
                />
            <ErrorMessage
              component="span"
              name="seMorarComOutrosPmsInformarNomeEPelotãoDoPm"
              className="form-error"
            />

          <label htmlFor="possuiResidênciaPrópria">Possui residência própria?:</label>
                <Field as='select'
                  type="text"
                  id="possuiResidênciaPrópria"
                  name="possuiResidênciaPrópria">
                    <option value="" disabled>Selecione</option>
                    <option value='S'>Sim</option>
                    <option value='N'>Não</option>
                </Field>
            <ErrorMessage
              component="span"
              name="possuiResidênciaPrópria"
              className="form-error"
            />

          <label htmlFor="possuiCarro">Possui carro?:</label>
                <Field as='select'
                  type="text"
                  id="possuiCarro"
                  name="possuiCarro">
                    <option value="" disabled>Selecione</option>
                    <option value='S'>Sim</option>
                    <option value='N'>Não</option>
                </Field>                    
            <ErrorMessage
              component="span"
              name="possuiCarro"
              className="form-error"
            />
                

          {props.values.possuiCarro === 'S'&& (
          <div>
          <label htmlFor="placaCarro">Informe a placa do veículo:</label>
                <Field
                  type="text"
                  id="placaCarro"
                  name="placaCarro"
                />
            <ErrorMessage
              component="span"
              name="placaCarro"
              className="form-error"
            />
          </div>
          )}

          {props.values.possuiCarro === 'S'&& (
          <div>
          <label htmlFor="modeloCarro">Informe o modelo do veículo:</label>
                <Field
                  o modelo="text"
                  id="modeloCarro"
                  name="modeloCarro"
                />
            <ErrorMessage
              component="span"
              name="modeloCarro"
              className="form-error"
            />
          </div>
          )}

          {props.values.possuiCarro === 'S'&& (
          <div>
          <label htmlFor="anoCarro">Informe o ano do veículo:</label>
                <Field
                  type="text"
                  id="anoCarro"
                  name="anoCarro"
                />
            <ErrorMessage
              component="span"
              name="anoCarro"
              className="form-error"
            />
          </div>
          )}

          <label htmlFor="possuiMoto">Possui moto:</label>
                <Field as='select'
                  type="text"
                  id="possuiMoto"
                  name="possuiMoto">
                    <option value="" disabled>Selecione</option>
                    <option value='S'>Sim</option>
                    <option value='N'>Não</option>
                </Field>
            <ErrorMessage
              component="span"
              name="possuiMoto"
              className="form-error"
            />
                

          {props.values.possuiMoto === 'S'&& (
          <div>
          <label htmlFor="placaMoto">Informe a placa do veículo:</label>
                <Field
                  type="text"
                  id="placaMoto"
                  name="placaMoto"
                />
            <ErrorMessage
              component="span"
              name="placaMoto"
              className="form-error"
            />
          </div>
          )}

          {props.values.possuiMoto === 'S'&& (
          <div>
          <label htmlFor="modeloMoto">Informe o modelo do veículo:</label>
                <Field
                  o modelo="text"
                  id="modeloMoto"
                  name="modeloMoto"
                />
            <ErrorMessage
              component="span"
              name="modeloMoto"
              className="form-error"
            />
          </div>
          )}

          {props.values.possuiMoto === 'S'&& (
          <div>
          <label htmlFor="anoMoto">Informe o ano do veículo:</label>
                <Field
                  type="text"
                  id="anoMoto"
                  name="anoMoto"
                />
            <ErrorMessage
              component="span"
              name="anoMoto"
              className="form-error"
            />
          </div>
          )}

            <label>Outras</label>
            <label htmlFor="jaFoiConduzidoAoDp">Ja foi conduzido ao DP?:</label>
                <Field as='select'
                  type="text"
                  id="jaFoiConduzidoAoDp"
                  name="jaFoiConduzidoAoDp">
                    <option value='S'>Sim</option>
                    <option value='N'>Não</option>
                </Field>
            <ErrorMessage
              component="span"
              name="jaFoiConduzidoAoDp"
              className="form-error"
            />
                
          {props.values.jaFoiConduzidoAoDp === 'S'&& (
          <div>
          <label htmlFor="seSimInformeOMotivo">Informe o motivo:</label>
                <Field
                  type="text"
                  id="seSimInformeOMotivo"
                  name="seSimInformeOMotivo"
                />
            <ErrorMessage
              component="span"
              name="seSimInformeOMotivo"
              className="form-error"
            />
          </div>
          )}
          
          <label htmlFor="jaRespondeuOuRespondeInquéritoPolicial">Ja respondeu ou responde Inquérito Policial?:</label>
                <Field
                  type="text"
                  id="jaRespondeuOuRespondeInquéritoPolicial"
                  name="jaRespondeuOuRespondeInquéritoPolicial"
                />
            <ErrorMessage
              component="span"
              name="jaRespondeuOuRespondeInquéritoPolicial"
              className="form-error"
            />

           <label htmlFor="oQueVocêAlmejaNaPM">O que você almeja na PM?:</label>
                <Field
                  type="text"
                  id="oQueVocêAlmejaNaPM"
                  name="oQueVocêAlmejaNaPM"
                />
            <ErrorMessage
              component="span"
              name="oQueVocêAlmejaNaPM"
              className="form-error"
            />

          <label htmlFor="quantasVezesJáPrestouParaAPm">Quantas vezes já prestou para a PM?:</label>
                <Field
                  type="number"
                  id="quantasVezesJáPrestouParaAPm"
                  name="quantasVezesJáPrestouParaAPm"
                />
            <ErrorMessage
              component="span"
              name="quantasVezesJáPrestouParaAPm"
              className="form-error"
            />

          {props.values.quantasVezesJáPrestouParaAPm !== 1 && (
          <div>
          <label htmlFor="reprovadoEmQueFase">Reprovado em que fase?:</label>
                <Field
                  type="text"
                  id="reprovadoEmQueFase"
                  name="reprovadoEmQueFase"
                />
            <ErrorMessage
              component="span"
              name="reprovadoEmQueFase"
              className="form-error"
            />
          </div>
          )}  

          <label htmlFor="possuiParentesPM">Possui parente PM?:</label>
                <Field as='select'
                  type="text"
                  id="possuiParentesPM"
                  name="possuiParentesPM">
                    <option value="" disabled>Selecione</option>
                    <option value='S'>Sim</option>
                    <option value='N'>Não</option>
                </Field>
            <ErrorMessage
              component="span"
              name="possuiParentesPM"
              className="form-error"
            />
                

          {props.values.possuiParentesPM === 'S'&& (
          <div>
          <label htmlFor="seSimInformeONomeDoParentePM">Informe o nome:</label>
                <Field
                  type="text"
                  id="seSimInformeONomeDoParentePM"
                  name="seSimInformeONomeDoParentePM"
                />  
            <ErrorMessage
              component="span"
              name="seSimInformeONomeDoParentePM"
              className="form-error"
            />
          </div>
          )}

            <label>Vacinação</label>
            <label htmlFor="tomouVacinaDaCovidh">Vacinou-se contra a Covid?:</label>
                <Field as='select'
                  type="text"
                  id="tomouVacinaDaCovid"
                  name="tomouVacinaDaCovid">
                    <option value='' disabled>Selecione</option>
                    <option value ='0'>Não</option>
                    <option value ='1'>1 dose</option>
                    <option value ='2'>2 doses</option>
                    <option value ='3'>3 ou mais doses</option>
                </Field>                
            <ErrorMessage
              component="span"
              name="tomouVacinaDaCovid"
              className="form-error"
            />

            {(props.values.tomouVacinaDaCovid !== '0' && props.values.tomouVacinaDaCovid !== '') && (
            <div>
            <label htmlFor="dataPrimeiraDose">Data da primeira dose:</label>
                <Field
                  type="date"
                  id="dataPrimeiraDose"
                  name="dataPrimeiraDose"
                />
            <ErrorMessage
              component="span"
              name="dataPrimeiraDose"
              className="form-error"
            />
             </div>
            )}

            {(props.values.tomouVacinaDaCovid !== '0' && props.values.tomouVacinaDaCovid !== '')&& (
            <div>
            <label htmlFor="laboratorioPrimeiraDose">Qual laboratório?:</label>
                  <Field
                    type="text"
                    id="laboratorioPrimeiraDose"
                    name="laboratorioPrimeiraDose"
                  />
            <ErrorMessage
              component="span"
              name="laboratorioPrimeiraDose"
              className="form-error"
            />
            </div>
            )}

            {(props.values.tomouVacinaDaCovid === '2'||props.values.tomouVacinaDaCovid === '3')&& (
            <div>
            <label htmlFor="dataSegundaDose">Data da segunda dose:</label>
                  <Field
                    type="date"
                    id="dataSegundaDose"
                    name="dataSegundaDose"
                  />
            <ErrorMessage
              component="span"
              name="dataSegundaDose"
              className="form-error"
            />
            </div>
            )}
           
            {(props.values.tomouVacinaDaCovid === '2'||props.values.tomouVacinaDaCovid === '3')&& (
            <div>
            <label htmlFor="laboratorioSegundaDose">Qual laboratório?:</label>
                  <Field
                    type="text"
                    id="laboratorioSegundaDose"
                    name="laboratorioSegundaDose"
                  />
            <ErrorMessage
              component="span"
              name="laboratorioSegundaDose"
              className="form-error"
            />
            </div>
            )}

            {props.values.tomouVacinaDaCovid === '3'&& (
            <div>
            <label htmlFor="dataTerceiraDose">Data que tomou terceira dose:</label>
                  <Field
                    type="date"
                    id="dataTerceiraDose"
                    name="dataTerceiraDose"
                  />
            <ErrorMessage
              component="span"
              name="dataTerceiraDose"
              className="form-error"
            />
            </div>
            )}

            {props.values.tomouVacinaDaCovid === '3'&& (
            <div>
            <label htmlFor="laboratorioTerceriaDose">Qual laboratório?:</label>
                  <Field
                    type="text"
                    id="laboratorioTerceriaDose"
                    name="laboratorioTerceriaDose"
                  />
            <ErrorMessage
              component="span"
              name="laboratorioTerceriaDose"
              className="form-error"
            />
          </div>  
            )}

                {/* adicione todos os campos aqui */}

                <button type="submit">Enviar</button>
          </Form>
    )}
    </Formik>
  );
}

export default Formulario;