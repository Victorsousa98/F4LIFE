//mostra erro caso o formulario esteja vazio ou no formato incorreto 
const textoErroNome = document.querySelector(".formulario-erro-nome")
const textoErroEmail = document.querySelector(".formulario-erro-email")
const textoErroMensagem = document.querySelector(".formulario-erro-mensagem")
const textoUser = document.querySelector("#modal-user")

//modal
const modal = document.querySelector('.modal-overlay')
const botaoFechar = document.querySelector('.close-btn')


let form = document.querySelector('#contato');
let emailRegex = /^(\w+)@([a-z]+)(\.[a-z]+){1,2}$/i;
let user = "";

let a = false


// remove refresh da página ao enviar form
form.addEventListener('submit', function(event) {
    event.preventDefault();
});


function validaForm(frm) {

    if (frm.nomesobrenome.value == "" || frm.nomesobrenome.value == null || (frm.nomesobrenome.value).lenght < 3) {
        textoErroNome.textContent = "Erro no envio: Insira seu nome e sobrenome";
        textoErroNome.classList.add("show-formulario-erro")
        nomesobrenome.focus()
        return false
    } else {
        textoErroNome.classList.remove("show-formulario-erro")
    }

    if (!validaEmail(frm.email.value) || (pegaUsername(frm.email.value).length > 32) || pegaDominio(frm.email.value).length > 16) {
        textoErroEmail.textContent = "Erro no envio: Endereço de mail inválido"
        textoErroEmail.classList.add("show-formulario-erro")
        email.focus()
        return false;
    } else {
        textoErroEmail.classList.remove("show-formulario-erro")
    }
    if (frm.mensagem.value == "" || frm.mensagem.value == null || (frm.mensagem.value).lenght < 2) {
        textoErroMensagem.textContent = "Erro no envio: Insira uma mensagem";
        textoErroMensagem.classList.add("show-formulario-erro")
        mensagem.focus()
        return false
    } else {
        textoErroMensagem.classList.remove("show-formulario-erro")
    }

    a = true
}

//captura o user e abre modal
form.addEventListener("submit", () => {
        if (a) {
            user = pegaUsername(document.contato.email.value)
            textoUser.textContent = user
            modal.classList.toggle('open-modal')
        }
    })
    //fecha modal
botaoFechar.addEventListener("click", () => {
    modal.classList.remove('open-modal')
})

function validaEmail(texto) {
    return emailRegex.test(texto);
}

function pegaUsername(texto) {
    return emailRegex.exec(texto)[1]
}

function pegaDominio(texto) {
    return emailRegex.exec(texto)[2]
}













// function pegaUsername(texto) {
//     return emailRegex.exec(texto)
// }

// const nomeSobrenome = document.querySelector("#nomesobrenome")
// const email = document.querySelector("#email")
// const mensagem = document.querySelector('#mensagem')

// const textoErro = document.querySelector(".formulario-erro")
// const botao = document.querySelector(".formulario-botao")



// botao.addEventListener('click', () => {
//     if(mensagem.value == ""){
//         textoErro.textContent="Erro no envio: Insira uma mensagem"
//     }

//     if(email.value.indexOf('@')==-1 || 
//     email.value.indexOf('.')==-1 || 
//     email.value.indexOf('com')==-1 ){
//         textoErro.textContent="Erro no envio: Endereço de mail inválido"
//         textoErro.classList.add("show-formulario-erro")
//         email.focus()
//     }

//     if(nomeSobrenome.value < 3){
//         textoErro.textContent="Erro no envio: Insira seu nome e sobrenome"
//         textoErro.classList.add("show-formulario-erro")
//     }

// })