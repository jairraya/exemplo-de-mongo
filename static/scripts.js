let campoNome = document.querySelector('#nome');
let campoEmail = document.querySelector('#email');
let botao = document.querySelector('button');
let lista = document.querySelector('ul');

botao.addEventListener('click', () => {
    let cadastro = {
        nome: campoNome.value,
        email: campoEmail.value
    }

    campoNome.value = '';
    campoEmail.value = '';

    fetch('http://10.162.105.176:3000/cadastrar', {
        method: 'POST',
        body: JSON.stringify(cadastro),
        headers: {
            'Content-type': 'application/json'
        }
    }).then((resposta) => {
        return resposta.json();
    }).then((dados) => {
        
    });
});

function carregar(){
    fetch('http://10.162.105.176:3000/emails').then((resposta) => {
        return resposta.json();
    }).then((cadastros) => {
        let html = '';

        for(let cadastro of cadastros){
            html += `<li>${cadastro.nome} - ${cadastro.email}</li>`;
        }

        lista.innerHTML = html;
    });
}

setInterval(carregar, 3000);
