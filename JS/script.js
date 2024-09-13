function Cadastrar() {
    //Pega os valores inseridos nos campos de cadastro do site
    var email = document.querySelector('#INPT_Email').value;
    var confirmEmail = document.querySelector('#INPT_ConfirmEmail').value;
    var senha = document.querySelector('#INPT_Senha').value;
    var confirmSenha= document.querySelector('#INPT_ConfirmSenha').value;

    //Verificar o email e senha inseridos esta igual nos dois campos
    
    if ((email != confirmEmail) || (senha != confirmSenha)){
        window.alert("Algo de Errado não esta certo!")
    } else {
       window.open("../HTML/login.html") 
    }

    console.log(email, senha, confirmEmail, confirmSenha)
}

function EfetuaLogin() {
    window.open("../HTML/home.html")
}