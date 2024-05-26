document.getElementById('cadastrar').addEventListener('click', function() {
    console.log("Botão Cadastrar clicado");
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('voltar').addEventListener('click', function() {
    console.log("Botão Voltar clicado");
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('confirmar').addEventListener('click', function() {
    console.log("Botão Confirmar clicado");
    document.getElementById('popup').style.display = 'none';
    document.querySelector('.main-container').style.display = 'none';
    document.getElementById('confirmation').style.display = 'flex';
});
