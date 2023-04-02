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

=> Após a instalação do Node.js já estará disponível o comando npm. Acesse uma janela do terminal (Linux ou Mac) ou prompt de comando (Windows, git bash), entre na pasta client utilizando o comando "cd client" e execute o comando:  

npm install --global yarn

=> Em sequência, adicione o "formik" e o "yup" que serão as bibliotecas responsáveis pela formatação do formulário. Basta rodar o seguinte comando na pasta "client":


yarn add formik yup

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