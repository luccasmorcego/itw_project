document.getElementById('mostrarMensagem').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagem');
    const botao = document.getElementById('mostrarMensagem');
    
    if (mensagem.style.display === 'none' || !mensagem.style.display) {
        mensagem.style.display = 'block';
        document.body.style.backgroundImage = "url('imagens/loira.jpeg')"; 
        document.body.style.backgroundSize = "cover"; 
        document.body.style.backgroundPosition = "left center"; 
        
        // Alterar o texto do botão
        botao.innerText = 'Esconder Mensagem';
    } else {
        mensagem.style.display = 'none';
        
        // Alterar o texto do botão de volta
        botao.innerText = 'Mostrar Mensagem';
    }
});
