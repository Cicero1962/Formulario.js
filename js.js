const formulario = document.querySelector('.formulario');
const nome = document.querySelector('.nome');
const sobrenome = document.querySelector('.sobrenome');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');

formulario.addEventListener('submit',(evento) => {
    evento.preventDefault()

    checkInputs();
});

function checkInputs(){
    const nomeValue = nome.value;
    const sobrenomeValue = sobrenome.value;
    const emailValue = email.value;
    const senhaValue = senha.value;

    if(nomeValue === ''){
        SetErrorFor(nome,'O nome do usuario é obrigatório.');
    } else{
        setSucessFor(nome)
    }
    if(sobrenomeValue === ''){
        SetErrorFor(sobrenome,'O sobrenome é obrigatório.');
    } else{
        setSucessFor(sobrenome)
    }
    if(emailValue === ''){
        SetErrorFor(email,'O email obrigatório.')
    } else if(!checkEmail(emailValue)) {
        SetErrorFor(email,'Por favor insira um email válido.')
    } else{
        setSucessFor(email)
    }
    if(senhaValue === ''){
        SetErrorFor(senha,'A senha é obrigatória.')
    } else{setSucessFor(senha)}
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

function SetErrorFor(input, message){
    const formMsg = input.parentElement;
    const small = formMsg.querySelector("small")

    small.innerText = message;

    formMsg.className = "form_msg error"
}

function setSucessFor(input){
    const formMsg = input.parentElement;
    formMsg.className = "form_msg sucess"
}