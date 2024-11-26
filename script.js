function mostraraviso(){
    alert('clique na imagem');
}
function mostrarTexto() {
   
    let textos = document.getElementsByClassName('texto');
    
    for (let i = 0; i < textos.length; i++) {
        
        if (textos[i].style.display === 'none' || textos[i].style.display === '') {
            textos[i].style.display = 'block'; 
        } else {
            textos[i].style.display = 'none';
        }
    }
}
function ajuda(){
    alert('selecione uma imagem');
}
const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('click', function() {
      
        this.classList.toggle('zoomed');
    });
});
const form = document.getElementById("formContato");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("comentario").value;

    if (nome && email && mensagem) {
        alert("Formulário enviado com sucesso!\nNome: " + nome + "\nEmail: " + email );
        form.reset();
    } else {
        alert("Por favor, preencha todos os campos!");
    }
});
document.getElementById("botão3").addEventListener("click", function () {
    alert("Este é o formulário de contato. Preencha os campos e envie um comentários.");
});
function colaboradores(){
    alert('feito por gabriel');
}
