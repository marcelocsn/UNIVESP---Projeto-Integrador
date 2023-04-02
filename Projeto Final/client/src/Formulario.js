import React, { useState } from 'react';
import './Formulario.css';

function Formulario() {
  const [formState, setFormState] = useState({
    pelotao: '',
    numeroAluno: '',
    re: '',
    nomeCompleto: '',
    nomeDeGuerra: '',
    dataDeAdmissão: '',
    dataDeNascimento: '',
    remanescente: '',
    rg: '',
    cpf: '',
    sexo: '',
    telefoneCelular: '',
    telefoneContato: '',
    natural: '',
    ufNascimento: '',
    idade: '',
    cursoSuperiorQual: '',
    estadoCivil: '',
    possuiFilhosQuantos: '',
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
    seSimInformePlacaModeloAno: '',
    possuiMoto: '',
    seSimInformePlacaModeloAno: '',
    jaFoiConduzidoAoDp: '',
    seSimInformeOMotivo: '',
    jaRespondeuOuRespondeInquéritoPolicial: '',
    JáTeveOuPossuiAlgumaDoençaGrave: '',
    oQueVocêAlmejaNaPM: '',
    possuiAlergiaAAlgumAlimentoOuMedicação: '',
    possuiPlanoDeSaúde: '',
    quantasVezesJáPrestouParaAPm: '',
    reprovadoEmQueFase: '',
    possuiParentesPM: '',
    seSimInformeONomeDoParentePM: '',
    tomouVacinaDaCovid: '',
    dataDaPrimeiraDose: '',
    qualLaboratório: '',
    dataQueTomouSegundaDose: '',
    qualLaboratório: '',
    dataQueTomouTerceiraDose: '',
    qualLaboratório: '',
    
    // adicione todos os campos aqui
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // envie os dados do formulário para a API ou armazene-os em algum lugar
  };

  return (

<form onSubmit={handleSubmit}>

<label htmlFor="pelotao">Pelotão:</label>
      <input
        type="text"
        id="pelotao"
        name="pelotao"
        value={formState.pelotao}
        onChange={handleChange}
      />

<label htmlFor="numeroAluno">Nº Aluno:</label>
      <input
        type="text"
        id="numeroAluno"
        name="numeroAluno"
        value={formState.numeroAluno}
        onChange={handleChange}
      />

<label htmlFor="re">Nº RE:</label>
      <input
        type="text"
        id="re"
        name="re"
        value={formState.re}
        onChange={handleChange}
      />

<label htmlFor="nomeCompleto">Nome completo:</label>
      <input
        type="text"
        id="nomeCompleto"
        name="nomeCompleto"
        value={formState.nomeCompleto}
        onChange={handleChange}
      />

<label htmlFor="nomeDeGuerra">Nome de guerra:</label>
      <input
        type="text"
        id="nomeDeGuerra"
        name="nomeDeGuerra"
        value={formState.nomeDeGuerra}
        onChange={handleChange}
      />

<label htmlFor="dataDeAdmissão">Data de admissão:</label>
      <input
        type="text"
        id="dataDeAdmissão"
        name="dataDeAdmissão"
        value={formState.dataDeAdmissão}
        onChange={handleChange}
      />

<label htmlFor="dataDeNascimento">Data de nascimento:</label>
      <input
        type="text"
        id="dataDeNascimento"
        name="dataDeNascimento"
        value={formState.dataDeNascimento}
        onChange={handleChange}
      />

<label htmlFor="remanescente">Remanescente:</label>
      <input
        type="text"
        id="remanescente"
        name="remanescente"
        value={formState.remanescente}
        onChange={handleChange}
      />

<label htmlFor="rg">RG:</label>
      <input
        type="rg"
        id="rg"
        name="rg"
        value={formState.rg}
        onChange={handleChange}
      />

<label htmlFor="cpf">CPF:</label>
      <input
        type="text"
        id="cpf"
        name="cpf"
        value={formState.cpf}
        onChange={handleChange}
      />

<label htmlFor="sexo">Sexo:</label>
      <input
        type="text"
        id="sexo"
        name="sexo"
        value={formState.sexo}
        onChange={handleChange}
      />

<label htmlFor="telefoneCelular">Telefone celular:</label>
      <input
        type="text"
        id="telefoneCelular"
        name="telefoneCelular"
        value={formState.telefoneCelular}
        onChange={handleChange}
      />

<label htmlFor="telefoneContato">Telefone contato:</label>
      <input
        type="text"
        id="telefoneContato"
        name="telefoneContato"
        value={formState.telefoneContato}
        onChange={handleChange}
      />

<label htmlFor="natural">Natural:</label>
      <input
        type="text"
        id="natural"
        name="natural"
        value={formState.natural}
        onChange={handleChange}
      />

<label htmlFor="ufNascimento">UF nascimento:</label>
      <input
        type="text"
        id="ufNascimento"
        name="ufNascimento"
        value={formState.ufNascimento}
        onChange={handleChange}
      />

<label htmlFor="idade">Idade:</label>
      <input
        type="text"
        id="idade"
        name="idade"
        value={formState.idade}
        onChange={handleChange}
      />

<label htmlFor="cursoSuperiorQual">Curso Superior? Qual?:</label>
      <input
        type="text"
        id="cursoSuperiorQual"
        name="cursoSuperiorQual"
        value={formState.cursoSuperiorQual}
        onChange={handleChange}
      />

<label htmlFor="estadoCivil">Estado civil:</label>
      <input
        type="text"
        id="estadoCivil"
        name="estadoCivil"
        value={formState.estadoCivil}
        onChange={handleChange}
      />

<label htmlFor="possuiFilhosQuantos">Possui filhos? Quantos?:</label>
      <input
        type="text"
        id="possuiFilhosQuantos"
        name="possuiFilhosQuantos"
        value={formState.possuiFilhosQuantos}
        onChange={handleChange}
      />

<label htmlFor="dataDeCasamento">Data de casamento?:</label>
      <input
        type="text"
        id="dataDeCasamento"
        name="dataDeCasamento"
        value={formState.dataDeCasamento}
        onChange={handleChange}
      />

<label htmlFor="nomeDoCônjuge">Nome do cônjuge:</label>
      <input
        type="text"
        id="nomeDoCônjuge"
        name="nomeDoCônjugeo"
        value={formState.nomeDoCônjuge}
        onChange={handleChange}
      />

<label htmlFor="dataDeNascimentoDoCônjuge">Data de nascimento do cônjuge:</label>
      <input
        type="text"
        id="dataDeNascimentoDoCônjuge"
        name="dataDeNascimentoDoCônjuge"
        value={formState.dataDeNascimentoDoCônjuge}
        onChange={handleChange}
      />

<label htmlFor="profissãoDoCônjuge">Profissão do cônjuge:</label>
      <input
        type="text"
        id="profissãoDoCônjuge"
        name="profissãoDoCônjuge"
        value={formState.profissãoDoCônjuge}
        onChange={handleChange}
      />

<label htmlFor="suasRedesSociais">Policial, informe suas redes sociais:</label>
      <input
        type="text"
        id="suasRedesSociais"
        name="suasRedesSociais"
        value={formState.suasRedesSociaiso}
        onChange={handleChange}
      />

<label htmlFor="nomeDoPai">Nome do pai:</label>
      <input
        type="text"
        id="nomeDoPai"
        name="nomeDoPai"
        value={formState.nomeDoPai}
        onChange={handleChange}
      />

<label htmlFor="profissãoDoPai">Profissão do pai:</label>
      <input
        type="text"
        id="profissãoDoPai"
        name="profissãoDoPai"
        value={formState.profissãoDoPai}
        onChange={handleChange}
      />

<label htmlFor="nomeDaMãe">Nome da mãe:</label>
      <input
        type="text"
        id="nomeDaMãe"
        name="nomeDaMãe"
        value={formState.nomeDaMãe}
        onChange={handleChange}
      />

<label htmlFor="profissãoDaMãe">Profissão da mãe:</label>
      <input
        type="text"
        id="profissãoDaMãe"
        name="profissãoDaMãe"
        value={formState.profissãoDaMãe}
        onChange={handleChange}
      />

<label htmlFor="sinaisParticulares">Sinais particulares:</label>
      <input
        type="text"
        id="sinaisParticulares"
        name="sinaisParticulares"
        value={formState.sinaisParticulares}
        onChange={handleChange}
      />

<label htmlFor="suaAltura">Sua altura:</label>
      <input
        type="text"
        id="suaAltura"
        name="suaAltura"
        value={formState.suaAltura}
        onChange={handleChange}
      />

<label htmlFor="cútis">Cútis:</label>
      <input
        type="text"
        id="cútis"
        name="cútis"
        value={formState.cútis}
        onChange={handleChange}
      />

<label htmlFor="corDosOlhos">Cor dos olhos:</label>
      <input
        type="text"
        id="corDosOlhos"
        name="corDosOlhos"
        value={formState.corDosOlhos}
        onChange={handleChange}
      />

<label htmlFor="corDosCabelos">Cor dos cabelos:</label>
      <input
        type="text"
        id="corDosCabelos"
        name="corDosCabelos"
        value={formState.corDosCabelos}
        onChange={handleChange}
      />

<label htmlFor="tipoDeCabelo">Tipo de cabelo:</label>
      <input
        type="text"
        id="tipoDeCabelo"
        name="tipoDeCabelo"
        value={formState.tipoDeCabelo}
        onChange={handleChange}
      />

<label htmlFor="idiomasQueFala">Idiomas que fala:</label>
      <input
        type="text"
        id="idiomasQueFala"
        name="idiomasQueFalao"
        value={formState.idiomasQueFala}
        onChange={handleChange}
      />

<label htmlFor="tipoSanguineo">Tipo sanguíneo:</label>
      <input
        type="text"
        id="tipoSanguineo"
        name="tipoSanguineo"
        value={formState.tipoSanguineo}
        onChange={handleChange}
      />

<label htmlFor="fatorRh">Fator RH:</label>
      <input
        type="text"
        id="fatorRh"
        name="fatorRh"
        value={formState.fatorRh}
        onChange={handleChange}
      />

<label htmlFor="citeUmBancoEmQuePossuiConta">Cite um banco em que possui conta:</label>
      <input
        type="text"
        id="citeUmBancoEmQuePossuiConta"
        name="citeUmBancoEmQuePossuiConta"
        value={formState.citeUmBancoEmQuePossuiConta}
        onChange={handleChange}
      />

<label htmlFor="tipoDeConta">Qual o tipo da conta supracitada?:</label>
      <input
        type="text"
        id="tipoDeConta"
        name="tipoDeConta"
        value={formState.tipoDeConta}
        onChange={handleChange}
      />

<label htmlFor="agência">Qual a agência?:</label>
      <input
        type="text"
        id="agência"
        name="agência"
        value={formState.agência}
        onChange={handleChange}
      />

<label htmlFor="númeroDaConta">Qual o número da conta?:</label>
      <input
        type="text"
        id="númeroDaConta"
        name="númeroDaContaa"
        value={formState.númeroDaConta}
        onChange={handleChange}
      />

<label htmlFor="númeroDaCarteiraProfissional">Número da carteira profissional?:</label>
      <input
        type="text"
        id="númeroDaCarteiraProfissional"
        name="númeroDaCarteiraProfissional"
        value={formState.númeroDaCarteiraProfissional}
        onChange={handleChange}
      />

<label htmlFor="númeroDeSérieDaCarteiraProfissional">Número de série da carteira profissional?:</label>
      <input
        type="text"
        id="númeroDeSérieDaCarteiraProfissional"
        name="númeroDeSérieDaCarteiraProfissional"
        value={formState.númeroDeSérieDaCarteiraProfissional}
        onChange={handleChange}
      />

<label htmlFor="númeroPisPasep">Número Pis/Pasep:</label>
      <input
        type="text"
        id="númeroPisPasep"
        name="númeroPisPasep"
        value={formState.númeroPisPasep}
        onChange={handleChange}
      />

<label htmlFor="númeroTítuloDeEleitor">Número Título de Eleitor:</label>
      <input
        type="text"
        id="númeroTítuloDeEleitor"
        name="númeroTítuloDeEleitor"
        value={formState.númeroTítuloDeEleitor}
        onChange={handleChange}
      />

<label htmlFor="númeroZonaVotação">Número zona de votação:</label>
      <input
        type="text"
        id="númeroZonaVotação"
        name="númeroZonaVotação"
        value={formState.númeroZonaVotação}
        onChange={handleChange}
      />

<label htmlFor="númeroDaSeção">Número da seção:</label>
      <input
        type="text"
        id="númeroDaSeção"
        name="númeroDaSeção"
        value={formState.númeroDaSeção}
        onChange={handleChange}
      />

<label htmlFor="cidadeEmQueVota">Cidade em que vota:</label>
      <input
        type="text"
        id="cidadeEmQueVota"
        name="cidadeEmQueVota"
        value={formState.cidadeEmQueVota}
        onChange={handleChange}
      />

<label htmlFor="númeroRegistroCnh">Número de registro da CNH:</label>
      <input
        type="text"
        id="númeroRegistroCnh"
        name="númeroRegistroCnh"
        value={formState.númeroRegistroCnh}
        onChange={handleChange}
      />

<label htmlFor="vencimentoDaCnh">Vencimento da CNH:</label>
      <input
        type="text"
        id="vencimentoDaCnh"
        name="vencimentoDaCnh"
        value={formState.vencimentoDaCnh}
        onChange={handleChange}
      />

<label htmlFor="endereçoEmRibeirãoPreto">Endereço com número/apartamento em Ribeirão Preto:</label>
      <input
        type="text"
        id="endereçoEmRibeirãoPreto"
        name="endereçoEmRibeirãoPreto"
        value={formState.endereçoEmRibeirãoPreto}
        onChange={handleChange}
      />

<label htmlFor="bairro">Bairro:</label>
      <input
        type="text"
        id="bairro"
        name="bairro"
        value={formState.bairro}
        onChange={handleChange}
      />

<label htmlFor="cep">CEP:</label>
      <input
        type="text"
        id="cep"
        name="cep"
        value={formState.cep}
        onChange={handleChange}
      />

<label htmlFor="pontoDeReferência">Ponto de referência:</label>
      <input
        type="text"
        id="pontoDeReferência"
        name="pontoDeReferência"
        value={formState.pontoDeReferência}
        onChange={handleChange}
      />

<label htmlFor="dpRibeirãoPreto">DP Ribeirão Preto:</label>
      <input
        type="text"
        id="dpRibeirãoPreto"
        name="dpRibeirãoPreto"
        value={formState.dpRibeirãoPreto}
        onChange={handleChange}
      />

<label htmlFor="batalhãoCidadeDeResidência">Batalhão cidade de residência:</label>
      <input
        type="text"
        id="batalhãoCidadeDeResidência"
        name="batalhãoCidadeDeResidência"
        value={formState.batalhãoCidadeDeResidência}
        onChange={handleChange}
      />

<label htmlFor="ciaRibeirãoPreto">Cia Ribeirão Preto:</label>
      <input
        type="text"
        id="ciaRibeirãoPreto"
        name="ciaRibeirãoPreto"
        value={formState.ciaRibeirãoPreto}
        onChange={handleChange}
      />

<label htmlFor="emailPessoal">Email pessoal:</label>
      <input
        type="text"
        id="emailPessoal"
        name="emailPessoal"
        value={formState.emailPessoal}
        onChange={handleChange}
      />

<label htmlFor="emailFuncional">Email funcional:</label>
      <input
        type="text"
        id="emailFuncional"
        name="emailFuncional"
        value={formState.emailFuncional}
        onChange={handleChange}
      />

<label htmlFor="seMorarComOutrosPmsInformarNomeEPelotãoDoPm">Mora com outro PM? Se sim, informe nome e pelotão do PM:</label>
      <input
        type="text"
        id="seMorarComOutrosPmsInformarNomeEPelotãoDoPm"
        name="seMorarComOutrosPmsInformarNomeEPelotãoDoPm"
        value={formState.seMorarComOutrosPmsInformarNomeEPelotãoDoPm}
        onChange={handleChange}
      />

<label htmlFor="possuiResidênciaPrópria">Possui residência própria?:</label>
      <input
        type="text"
        id="possuiResidênciaPrópria"
        name="possuiResidênciaPrópria"
        value={formState.possuiResidênciaPrópria}
        onChange={handleChange}
      />

<label htmlFor="possuiCarro">Possui carro?:</label>
      <input
        type="text"
        id="possuiCarro"
        name="possuiCarro"
        value={formState.possuiCarro}
        onChange={handleChange}
      />

<label htmlFor="seSimInformePlacaModeloAno">Se sim, informe placa, modelo e ano:</label>
      <input
        type="text"
        id="seSimInformePlacaModeloAno"
        name="seSimInformePlacaModeloAno"
        value={formState.seSimInformePlacaModeloAno}
        onChange={handleChange}
      />

<label htmlFor="possuiMoto">Possui moto:</label>
      <input
        type="text"
        id="possuiMoto"
        name="possuiMoto"
        value={formState.possuiMoto}
        onChange={handleChange}
      />

<label htmlFor="seSimInformePlacaModeloAno">Se sim, informe placa, modelo e ano:</label>
      <input
        type="text"
        id="seSimInformePlacaModeloAno"
        name="seSimInformePlacaModeloAno"
        value={formState.seSimInformePlacaModeloAno}
        onChange={handleChange}
      />

<label htmlFor="jaFoiConduzidoAoDp">Ja foi conduzido ao DP?:</label>
      <input
        type="text"
        id="jaFoiConduzidoAoDp"
        name="jaFoiConduzidoAoDp"
        value={formState.jaFoiConduzidoAoDp}
        onChange={handleChange}
      />

<label htmlFor="seSimInformeOMotivo">Se sim, informe o motivo:</label>
      <input
        type="text"
        id="seSimInformeOMotivo"
        name="seSimInformeOMotivo"
        value={formState.seSimInformeOMotivo}
        onChange={handleChange}
      />

<label htmlFor="jaRespondeuOuRespondeInquéritoPolicial">Ja respondeu ou responde Inquérito Policial?:</label>
      <input
        type="text"
        id="jaRespondeuOuRespondeInquéritoPolicial"
        name="jaRespondeuOuRespondeInquéritoPolicial"
        value={formState.jaRespondeuOuRespondeInquéritoPolicial}
        onChange={handleChange}
      />

<label htmlFor="JáTeveOuPossuiAlgumaDoençaGrave">Já teve ou possui alguma doença grave?:</label>
      <input
        type="text"
        id="JáTeveOuPossuiAlgumaDoençaGrave"
        name="JáTeveOuPossuiAlgumaDoençaGrave"
        value={formState.JáTeveOuPossuiAlgumaDoençaGrave}
        onChange={handleChange}
      />

<label htmlFor="oQueVocêAlmejaNaPM">O que você almeja na PM?:</label>
      <input
        type="text"
        id="oQueVocêAlmejaNaPM"
        name="oQueVocêAlmejaNaPM"
        value={formState.oQueVocêAlmejaNaPM}
        onChange={handleChange}
      />

<label htmlFor="possuiAlergiaAAlgumAlimentoOuMedicação">Possui alergia a algum alimento ou medicação?:</label>
      <input
        type="text"
        id="possuiAlergiaAAlgumAlimentoOuMedicação"
        name="possuiAlergiaAAlgumAlimentoOuMedicação"
        value={formState.possuiAlergiaAAlgumAlimentoOuMedicação}
        onChange={handleChange}
      />

<label htmlFor="possuiPlanoDeSaúde">Possui plano de saúde?:</label>
      <input
        type="text"
        id="possuiPlanoDeSaúde"
        name="possuiPlanoDeSaúde"
        value={formState.possuiPlanoDeSaúde}
        onChange={handleChange}
      />

<label htmlFor="quantasVezesJáPrestouParaAPm">Quantas vezes já prestou para a PM?:</label>
      <input
        type="text"
        id="quantasVezesJáPrestouParaAPm"
        name="quantasVezesJáPrestouParaAPm"
        value={formState.quantasVezesJáPrestouParaAPm}
        onChange={handleChange}
      />

<label htmlFor="reprovadoEmQueFase">Reprovado em que fase?:</label>
      <input
        type="text"
        id="reprovadoEmQueFase"
        name="reprovadoEmQueFase"
        value={formState.reprovadoEmQueFase}
        onChange={handleChange}
      />

<label htmlFor="possuiParentesPM">Possui parente PM?:</label>
      <input
        type="text"
        id="possuiParentesPM"
        name="possuiParentesPM"
        value={formState.possuiParentesPM}
        onChange={handleChange}
      />

<label htmlFor="seSimInformeONomeDoParentePM">Se sim, informe o nome:</label>
      <input
        type="text"
        id="seSimInformeONomeDoParentePM"
        name="seSimInformeONomeDoParentePM"
        value={formState.seSimInformeONomeDoParentePM}
        onChange={handleChange}
      />

<label htmlFor="tomouVacinaDaCovidh">Vacinou-se contra a Covid?:</label>
      <input
        type="text"
        id="tomouVacinaDaCovid"
        name="tomouVacinaDaCovid"
        value={formState.tomouVacinaDaCovid}
        onChange={handleChange}
      />

<label htmlFor="dataDaPrimeiraDose">Data da primeira dose:</label>
      <input
        type="text"
        id="dataDaPrimeiraDose"
        name="dataDaPrimeiraDose"
        value={formState.dataDaPrimeiraDose}
        onChange={handleChange}
      />

<label htmlFor="qualLaboratório">Qual laboratório?:</label>
      <input
        type="text"
        id="qualLaboratório"
        name="qualLaboratório"
        value={formState.qualLaboratório}
        onChange={handleChange}
      />

<label htmlFor="dataQueTomouSegundaDose">Data da segunda dose:</label>
      <input
        type="text"
        id="dataDaSegundaDose"
        name="dataQueTomouSegundaDose"
        value={formState.dataQueTomouSegundaDose}
        onChange={handleChange}
/>

<label htmlFor="qualLaboratório">Qual laboratório?:</label>
      <input
        type="text"
        id="qualLaboratório"
        name="qualLaboratório"
        value={formState.qualLaboratório}
        onChange={handleChange}
      />

<label htmlFor="dataQueTomouTerceiraDose">Data que tomou terceira dose:</label>
      <input
        type="text"
        id="dataQueTomouTerceiraDose"
        name="dataQueTomouTerceiraDose"
        value={formState.dataQueTomouTerceiraDose}
        onChange={handleChange}
      />

<label htmlFor="qualLaboratório">Qual laboratório?:</label>
      <input
        type="text"
        id="qualLaboratório"
        name="qualLaboratório"
        value={formState.qualLaboratório}
        onChange={handleChange}
      />

      {/* adicione todos os campos aqui */}

      <button type="submit">Enviar</button>
    </form>
  );
}