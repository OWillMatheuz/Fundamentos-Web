
/*por tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByname()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let mensagemOk = false
let mapagoogle = document.querySelector('#mapagoogle')


function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 ||email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
    txtEmail.innerHTML = 'E-mail válido'
    txtEmail.style.color = 'green'
    emailOk = true
    }
}   

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if (mensagem.value.length >= 200) {
        txtMensagem.innerHTML = 'máx. 200 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    }else{
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }

}

function enviar(){
    if(nomeOk == true && emailOk == true && mensagemOk == true){
        alert('Mensagem enviada com sucesso !')
    }else {
        alert('Prencha o formulário corretamente')
    }

}

function mapaZoom(){
    mapagoogle.style.width = '1000px'
    mapagoogle.style.height = '800px'
}

function mapaNormal(){
    mapagoogle.style.width = '600px'
    mapagoogle.style.height = '450px'
}