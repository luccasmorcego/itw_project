document.getElementById('mostrarMensagem').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagem');
    const botalink = document.getElementById('btn');
    const botao = document.getElementById('mostrarMensagem');
    
    if (mensagem.style.display === 'none' || !mensagem.style.display) {
        mensagem.style.display = 'block';
        botalink.style.display = 'block'
        document.body.style.backgroundImage = "url('imagens/loira.jpeg')"; 
        document.body.style.backgroundSize = "cover"; 
        document.body.style.backgroundPosition = "center"; 
        
        // Alterar o texto do botão
        botao.innerText = 'conder';
    } else {
        mensagem.style.display = 'none';
        
        // Alterar o texto do botão de volta
        botao.innerText = 'mostrar msg';
    }


});


