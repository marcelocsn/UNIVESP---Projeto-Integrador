>>>>>Projeto Integrador Univesp

----

O projeto foi dividido em duas pastas (client e server), sendo a primeira destinada a matéria de frontend e a segunda backend.

Importante ter o Vs.Code e o git.bash já instalados para poder funcionar corretamente o código. Todos os comandos devem ser realizados pelo prompt ou git.bash dentro da pasta respectiva (client ou server)

Antes de tudo, para fazer o projeto renderizar, será necessário instalar o Node.js:

=> Node.js: Basta entrar no site  https://nodejs.org e instalar a última versão.

Na sequência basta seguir os passos de instalação nas respectivas pastas:

>IMPORTANTE:

Aguarde o final de cada instalação antes de iniciar a próxima! O tempo pode variar conforme a velocidade de seu PC.

----------
>Pasta Client


=> Após a instalação do Node.js já estará disponível o comando npm. Acesse uma janela do terminal (Linux ou Mac) ou prompt de comando (Windows, git bash), entre na pasta client utilizando o comando "cd client" e execute os comandos em sequência:  

npm install --global yarn

yarn install

yarn init 

=> Em sequência, adicione o "formik" e o "yup" que serão as bibliotecas responsáveis pela formatação do formulário. Basta rodar o seguinte comando na pasta "client":


yarn add formik yup
=======
=> Após a instalação do Node.js já estará disponível o comando npm. Acesse uma janela do terminal (Linux ou Mac) ou prompt de comando (Windows, git bash), entre na pasta client utilizando o comando "cd client" e execute o comando:  

npm install --global yarn

=> Em sequência, adicione o "formik", "axios" e o "yup" que serão as bibliotecas responsáveis pela formatação do formulário. Basta rodar o seguinte comando na pasta "client":


yarn add formik yup axios


------
>Pasta Server

Para entrar na pasta "server" basta aplicar o comando:

cd server

Em sequência instale o MySQL, Express, nodemon, cors, axios e bcryp que serão responsáveis para o desenvolvimento do servidor (backend). Execute o seguinte comando (dentro da pasta server):

yarn add mysql express nodemon cors axios

Depois rode o comando:

yarn add @types/bcryp

Pronto!

----

>>>> Como executar e visualizar o frontend e o backend?

Depois de instalados os comandos supracitados rode o comando nas respectivas pastas para visualizar ambos:

>Pasta client: 

yarn start

>Pasta server:

yarn start

==> Aguarde que uma página de navegação irá abrir no seu navegador, sendo o frontend na porta 3000 e o backend na porta 3001.

Código para criação da tabela que armazenará os dados do fomulário

CREATE TABLE `banco`.`alunos` (
  `idalunos` INT NOT NULL AUTO_INCREMENT,
  `nomeCompleto` VARCHAR(100),
  `dataDeNascimento` DATE,
  `rg` VARCHAR(15),
  `cpf` VARCHAR(14),
  `sexo` VARCHAR(10),
  `telefoneCelular` VARCHAR(16),
  `telefoneContato` VARCHAR(16),
  `natural` VARCHAR(30),
  `ufNascimento` VARCHAR(100),
  `emailPessoal` VARCHAR(100),
  `emailFuncional` VARCHAR(100),
  `religiao` VARCHAR(100),
  `númeroRegistroCnh` VARCHAR(50),
  `vencimentoDaCnh` DATE,
  `categoriaDaCnh` VARCHAR(2),
  `suasRedesSociais` VARCHAR(200),
  `pelotao` VARCHAR(2),
  `numeroAluno` INT(2),
  `re` VARCHAR(200),
  `nomeDeGuerra` VARCHAR(200),
  `dataDeAdmissão` DATE,
  `remanescente` VARCHAR(3),
  `númeroDaCarteiraProfissional` VARCHAR(33),
  `númeroDeSérieDaCarteiraProfissional` VARCHAR(33),
  `númeroPisPasep` VARCHAR(50),
  `estadoCivil` VARCHAR(10),
  `possuiFilhosQuantos` INT(1),
  `dataDeCasamento` DATE,
  `nomeDoCônjuge` VARCHAR(100),
  `dataDeNascimentoDoCônjuge` DATE,
  `profissãoDoCônjuge` VARCHAR(50),
  `nomeDoPai` VARCHAR(100),
  `nomeDaMãe` VARCHAR(100),
  `profissãoDoPai` VARCHAR(50),
  `profissãoDaMãe` VARCHAR(50),
  `nivelInstrucao` VARCHAR(200),
  `cursoSuperiorQual` VARCHAR(50),
  `idiomasQueFala` VARCHAR(50),
  `númeroTítuloDeEleitor` VARCHAR(25),
  `númeroZonaVotação` VARCHAR(3),
  `númeroDaSeção` VARCHAR(4),
  `cidadeEmQueVota` VARCHAR(50),
  `citeUmBancoEmQuePossuiConta` VARCHAR(20),
  `tipoDeConta` VARCHAR(20),
  `agência` VARCHAR(20),
  `númeroDaConta` VARCHAR(20),
  `sinaisParticulares` VARCHAR(250),
  `suaAltura` DECIMAL(3,2),
  `cútis` VARCHAR(20),
  `corDosOlhos` VARCHAR(20),
  `corDosCabelos` VARCHAR(20),
  `tipoDeCabelo` VARCHAR(20),
  `tipoSanguineo` VARCHAR(2),
  `fatorRh` VARCHAR(8),
  `possuiAlergiaAAlgumAlimentoOuMedicação` VARCHAR(50),
  `jaTeveOuPossuiAlgumaDoençaGrave` VARCHAR(100),
  `possuiPlanoDeSaúde` VARCHAR(18),
  `endereçoEmRibeirãoPreto` VARCHAR(100),
  `bairro` VARCHAR(50),
  `cep` VARCHAR(10),
  `pontoDeReferência` VARCHAR(200),
  `dpRibeirãoPreto` VARCHAR(100),
  `batalhãoCidadeDeResidência` VARCHAR(50),
  `ciaRibeirãoPreto` VARCHAR(50),
  `seMorarComOutrosPmsInformarNomeEPelotãoDoPm` VARCHAR(200),
  `possuiResidênciaPrópria` VARCHAR(3),
  `possuiCarro` VARCHAR(3),
  `placaCarro` VARCHAR(10),
  `modeloCarro` VARCHAR(50),
  `anoCarro` VARCHAR(10),
  `possuiMoto` VARCHAR(3),
  `placaMoto` VARCHAR(10),
  `modeloMoto` VARCHAR(50),
  `anoMoto` VARCHAR(10),
  `jaFoiConduzidoAoDp` VARCHAR(3),
  `seSimInformeOMotivo` VARCHAR(200),
  `jaRespondeuOuRespondeInquéritoPolicial` VARCHAR(200),
  `oQueVocêAlmejaNaPM` VARCHAR(200),
  `quantasVezesJáPrestouParaAPm` INT(1),
  `reprovadoEmQueFase` VARCHAR(70),
  `possuiParentesPM` VARCHAR(3),
  `seSimInformeONomeDoParentePM` VARCHAR(100),
  `tomouVacinaDaCovid` VARCHAR(10),
  `dataPrimeiraDose` DATE,
  `laboratorioPrimeiraDose` VARCHAR(50),
  `dataSegundaDose` DATE,
  `laboratorioSegundaDose` VARCHAR(50),
  `dataTerceiraDose` DATE,
  `laboratorioTerceriaDose` VARCHAR(50),
    
    PRIMARY KEY (`idalunos`));
  
