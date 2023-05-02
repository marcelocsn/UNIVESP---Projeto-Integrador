import * as Yup from 'yup';
//Arquivo com as validações do formulário

export default Yup.object().shape({
           
nomeCompleto: Yup       
    .string()
    .required("Campo é obrigatório")
    .min(3,"O nome deve ter ao menos 3 caracteres")
    .max(100,"O campo não deve exceder 100 caracteres"),
dataDeNascimento: Yup
    .date()
    .max(new Date(),"Não é possível inserir uma data futura")
    .required("Campo é obrigatório"),
rg: Yup
    .string()
    .required("Campo é obrigatório")
    .max(15,"O campo não deve exceder 15 caracteres"),
cpf: Yup
    .string()
    .required("Campo é obrigatório")
    .max(14,"O campo não deve exceder 14 caracteres"),
sexo: Yup
    .string()
    .required("Campo é obrigatório"),
telefoneCelular: Yup
    .string()
    .required("Campo é obrigatório")
    .max(16,"O campo não deve exceder 16 caracteres"), 
telefoneContato: Yup   
    .string()
    .max(16,"O campo não deve exceder 16 caracteres"),
natural: Yup
    .string()
    .required("Campo é obrigatório")
    .max(30,"O campo não deve exceder 30 caracteres"),
ufNascimento: Yup
    .string()
    .required("Campo é obrigatório"),
emailPessoal: Yup
    .string()
    .email("Insira um email válido")
    .required("Campo é obrigatório")
    .max(100,"O campo não deve exceder 100 caracteres"),
emailFuncional: Yup
    .string()
    .email("Insira um email válido")
    .max(100,"O campo não deve exceder 100 caracteres"),
religiao: Yup
    .string()
    .max(100,"O campo não deve exceder 100 caracteres"),
númeroRegistroCnh: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),
//vencimentoDaCnh: Yup  
//categoriaDaCnh: Yup  
suasRedesSociais: Yup
    .string()
    .max(200,"O campo não deve exceder 200 caracteres"),
pelotao: Yup
    .string()
    .required("Campo é obrigatório"),
numeroAluno: Yup
    .string()
    .required("Campo é obrigatório"),
re: Yup
    .string()
    .required("Campo é obrigatório")
    .max(200,"O campo não deve exceder 200 caracteres"),
nomeDeGuerra: Yup
    .string()
    .max(200,"O campo não deve exceder 200 caracteres"),
dataDeAdmissão: Yup
    .date()
    .max(new Date(),"Não é possível inserir uma data futura")
    .required("Campo é obrigatório"),    
remanescente: Yup
    .string()
    .required("Campo é obrigatório"),
númeroDaCarteiraProfissional: Yup
    .string()
    .required("Campo é obrigatório")
    .max(33,"O campo não deve exceder 33 caracteres"),
númeroDeSérieDaCarteiraProfissional: Yup
    .string()
    .required("Campo é obrigatório")
    .max(33,"O campo não deve exceder 33 caracteres"),
númeroPisPasep: Yup
    .string()
    .required("Campo é obrigatório")
    .max(50,"O campo não deve exceder 50 caracteres"),
estadoCivil: Yup
    .string()
    .required("Campo é obrigatório"),
possuiFilhosQuantos: Yup
    .string()
    .required("Campo é obrigatório"),
dataDeCasamento: Yup    
    .date()
    .max(new Date(),"Não é possível inserir uma data futura"),
nomeDoCônjuge: Yup
    .string()
    .max(100,"O campo não deve exceder 100 caracteres"),    
dataDeNascimentoDoCônjuge: Yup 
    .date()
    .max(new Date(),"Não é possível inserir uma data futura"),
profissãoDoCônjuge: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),    
nomeDoPai: Yup
    .string()
    .max(100,"O campo não deve exceder 100 caracteres"),
nomeDaMãe: Yup
    .string()
    .required("Campo é obrigatório")
    .max(100,"O campo não deve exceder 100 caracteres"),
profissãoDoPai: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),    
profissãoDaMãe: Yup
    .string()
    .required("Campo é obrigatório")
    .max(50,"O campo não deve exceder 50 caracteres"),   
nivelInstrucao: Yup
    .string()
    .required("Campo é obrigatório"),
cursoSuperiorQual: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),    
idiomasQueFala: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),    
númeroTítuloDeEleitor: Yup
    .string()
    .required("Campo é obrigatório")
    .max(25,"O campo não deve exceder 25 caracteres"),    
númeroZonaVotação: Yup
    .string()
    .required("Campo é obrigatório")
    .max(3,"O campo não deve exceder 3 caracteres"),
númeroDaSeção: Yup
    .string()
    .required("Campo é obrigatório")
    .max(4,"O campo não deve exceder 4 caracteres"),
cidadeEmQueVota: Yup
    .string()
    .required("Campo é obrigatório")
    .max(50,"O campo não deve exceder 50 caracteres"),
citeUmBancoEmQuePossuiConta: Yup
    .string()
    .max(20,"O campo não deve exceder 20 caracteres"),
tipoDeConta: Yup
    .string()
    .max(100,"O campo não deve exceder 100 caracteres"),
agência: Yup
    .string()
    .max(20,"O campo não deve exceder 20 caracteres"), 
númeroDaConta: Yup
    .string()
    .max(20,"O campo não deve exceder 20 caracteres"), 
sinaisParticulares: Yup
    .string()
    .max(250,"O campo não deve exceder 250 caracteres"),
suaAltura: Yup
    .number("Insira um número válido")
    .required("Campo é obrigatório")
    .min(1,"Insira um número válido")
    .max(3,"Entre com a altura em metros"),
cútis: Yup
    .string()
    .required("Campo é obrigatório")
    .max(20,"O campo não deve exceder 20 caracteres"),
corDosOlhos: Yup
    .string()
    .required("Campo é obrigatório")
    .max(20,"O campo não deve exceder 20 caracteres"),
corDosCabelos: Yup
    .string()
    .required("Campo é obrigatório")
    .max(20,"O campo não deve exceder 20 caracteres"),
tipoDeCabelo: Yup
    .string()
    .required("Campo é obrigatório")
    .max(20,"O campo não deve exceder 20 caracteres"),
tipoSanguineo: Yup
    .string()
    .required("Campo é obrigatório")
    .max(2,"O campo não deve exceder 2 caracteres"),
fatorRh: Yup
    .string()
    .required("Campo é obrigatório")
    .max(8,"O campo não deve exceder 8 caracteres"),
possuiAlergiaAAlgumAlimentoOuMedicação: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"), 
jaTeveOuPossuiAlgumaDoençaGrave: Yup
    .string()
    .max(100,"O campo não deve exceder 100 caracteres"), 
possuiPlanoDeSaúde: Yup
    .string()
    .max(18,"O campo não deve exceder 18 caracteres"), 
endereçoEmRibeirãoPreto: Yup
    .string()
    .required("Campo é obrigatório")
    .max(100,"O campo não deve exceder 100 caracteres"), 
bairro: Yup
    .string()
    .required("Campo é obrigatório")
    .max(50,"O campo não deve exceder 50 caracteres"), 
cep: Yup
    .string()
    .required("Campo é obrigatório")
    .max(10,"O campo não deve exceder 10 caracteres"), 
pontoDeReferência: Yup
    .string()
    .max(200,"O campo não deve exceder 200 caracteres"),
dpRibeirãoPreto: Yup
    .string()
    .required("Campo é obrigatório")
    .max(100,"O campo não deve exceder 100 caracteres"), 
batalhãoCidadeDeResidência: Yup
    .string()
    .required("Campo é obrigatório")
    .max(50,"O campo não deve exceder 50 caracteres"), 
ciaRibeirãoPreto: Yup
    .string()
    .required("Campo é obrigatório")
    .max(50,"O campo não deve exceder 50 caracteres"),
seMorarComOutrosPmsInformarNomeEPelotãoDoPm: Yup
    .string()
    .max(200,"O campo não deve exceder 200 caracteres"), 
possuiResidênciaPrópria: Yup
    .string()
    .required("Campo é obrigatório"),
possuiCarro: Yup
    .string()
    .required("Campo é obrigatório"),
placaCarro: Yup
    .string()
    .max(10,"O campo não deve exceder 10 caracteres"),    
modeloCarro: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),
anoCarro: Yup
    .string()
    .max(10,"O campo não deve exceder 10 caracteres"),
possuiMoto: Yup
    .string()
    .required("Campo é obrigatório"),
placaMoto: Yup
    .string()
    .max(10,"O campo não deve exceder 10 caracteres"),
modeloMoto: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),
anoMoto: Yup
    .string()
    .max(10,"O campo não deve exceder 10 caracteres"),
jaFoiConduzidoAoDp: Yup
    .string()
    .required("Campo é obrigatório"),
seSimInformeOMotivo: Yup
    .string()
    .max(200,"O campo não deve exceder 200 caracteres"),
jaRespondeuOuRespondeInquéritoPolicial: Yup
    .string()
    .required("Campo é obrigatório")
    .max(200,"O campo não deve exceder 200 caracteres"),
oQueVocêAlmejaNaPM: Yup
    .string()
    .required("Campo é obrigatório")
    .max(200,"O campo não deve exceder 200 caracteres"),
quantasVezesJáPrestouParaAPm: Yup
    .number("Insira um número válido")
    .required("Campo é obrigatório")
    .integer("Insira um número válido")
    .positive("Insira um número válido"),
reprovadoEmQueFase: Yup
    .string()
    .max(70,"O campo não deve exceder 70 caracteres"),
possuiParentesPM: Yup
    .string()
    .required("Campo é obrigatório"), 
seSimInformeONomeDoParentePM: Yup
    .string()
    .max(100,"O campo não deve exceder 100 caracteres"),
tomouVacinaDaCovid: Yup
    .string()
    .required("Campo é obrigatório"),
dataPrimeiraDose: Yup
    .date()
    .max(new Date(),"Não é possível inserir uma data futura"),
laboratorioPrimeiraDose: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),    
dataSegundaDose: Yup
    .date()
    .max(new Date(),"Não é possível inserir uma data futura"),
laboratorioSegundaDose: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),
dataTerceiraDose: Yup
    .date()
    .max(new Date(),"Não é possível inserir uma data futura"),
laboratorioTerceriaDose: Yup
    .string()
    .max(50,"O campo não deve exceder 50 caracteres"),
})