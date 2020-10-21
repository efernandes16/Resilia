function selecionaJake () {
    var sectionJake = document.querySelector('section');
    sectionJake.innerHTML = "<h3>Olá eu sou o Jake!</h3><h4>Me diga o que preciso fazer agora?</h4>";
    
    var criaBotaoMais60 = document.createElement('button');
    var criaBotaoMenos60 = document.createElement('button');

    var botaoMais60 = sectionJake.appendChild(criaBotaoMais60);
    var botaoMenos60 = sectionJake.appendChild(criaBotaoMenos60);

    criaBotaoMais60.innerText = "Tenho mais de 60 anos!";
    criaBotaoMenos60.innerText = "Tenho menos de 60 anos!";

    botaoMais60.onclick = function selecionaMaisDe60 () {
        var sectionMaisDe60 = document.querySelector('section');
        sectionMaisDe60.innerHTML = "<h3>Você é idoso!</h3><h4>Sendo assim, o seu horário de votação preferencial é de 7h às 10h.</h4>";
        
        var criaBotaoComMascara = document.createElement('button');
        var criaBotaoSemMascara = document.createElement('button');
    
        var botaoComMascara = sectionMaisDe60.appendChild(criaBotaoComMascara);
        var botaoSemMascara = sectionMaisDe60.appendChild(criaBotaoSemMascara);
    
        criaBotaoComMascara.innerText = "Já separou a mascara?";
        criaBotaoSemMascara.innerText = "Nem tenho mais máscara!";

        botaoComMascara.onclick = function liberaParaVotar () {
            var sectionLiberado = document.querySelector('section');
            sectionLiberado.innerHTML = "<h3>PARABÉNS!</h3><h4>Você está liberado para votar!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }

        botaoSemMascara.onclick = function pegaMascaraERecarrega () {
            var sectionNaoLiberado = document.querySelector('section');
            sectionNaoLiberado.innerHTML = "<h3>PARE AGORA!</h3><h4>Você NÃO está liberado para votar!\n Arrume uma máscara e só saia de casa com ela!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionNaoLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }
    }

    botaoMenos60.onclick = function selecionaMenos60 () {
        var sectionMenosDe60 = document.querySelector('section');
        sectionMenosDe60.innerHTML = "<h3>Você não é idoso!</h3><h4>Sendo assim, o seu horário de votação preferencial a partir das 10h.</h4>";
        
        var criaBotaoComMascara = document.createElement('button');
        var criaBotaoSemMascara = document.createElement('button');
    
        var botaoComMascara = sectionMenosDe60.appendChild(criaBotaoComMascara);
        var botaoSemMascara = sectionMenosDe60.appendChild(criaBotaoSemMascara);
    
        criaBotaoComMascara.innerText = "Já separou a mascara?";
        criaBotaoSemMascara.innerText = "Nem tenho mais máscara!";

        botaoComMascara.onclick = function liberaParaVotar () {
            var sectionLiberado = document.querySelector('section');
            sectionLiberado.innerHTML = "<h3>PARABÉNS!</h3><h4>Você está liberado para votar!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }

        botaoSemMascara.onclick = function pegaMascaraERecarrega () {
            var sectionNaoLiberado = document.querySelector('section');
            sectionNaoLiberado.innerHTML = "<h3>PARE AGORA!</h3><h4>Você NÃO está liberado para votar!\n Arrume uma máscara e só saia de casa com ela!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionNaoLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }        
    }
}

function selecionaMarceline () {
    var sectionMarceline = document.querySelector('section');
    sectionMarceline.innerHTML = "<h3>Olá eu sou a Marceline!</h3><h4>Me diga o que preciso fazer agora?</h4>";
    
    var criaBotaoMais60 = document.createElement('button');
    var criaBotaoMenos60 = document.createElement('button');

    var botaoMais60 = sectionMarceline.appendChild(criaBotaoMais60);
    var botaoMenos60 = sectionMarceline.appendChild(criaBotaoMenos60);

    criaBotaoMais60.innerText = "Tenho mais de 60 anos!";
    criaBotaoMenos60.innerText = "Tenho menos de 60 anos!";

    botaoMais60.onclick = function selecionaMaisDe60 () {
        var sectionMaisDe60 = document.querySelector('section');
        sectionMaisDe60.innerHTML = "<h3>Você é idoso!</h3><h4>Sendo assim, o seu horário de votação preferencial é de 7h às 10h.</h4>";
        
        var criaBotaoComMascara = document.createElement('button');
        var criaBotaoSemMascara = document.createElement('button');
    
        var botaoComMascara = sectionMaisDe60.appendChild(criaBotaoComMascara);
        var botaoSemMascara = sectionMaisDe60.appendChild(criaBotaoSemMascara);
    
        criaBotaoComMascara.innerText = "Já separou a mascara?";
        criaBotaoSemMascara.innerText = "Nem tenho mais máscara!";

        botaoComMascara.onclick = function liberaParaVotar () {
            var sectionLiberado = document.querySelector('section');
            sectionLiberado.innerHTML = "<h3>PARABÉNS!</h3><h4>Você está liberado para votar!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }

        botaoSemMascara.onclick = function pegaMascaraERecarrega () {
            var sectionNaoLiberado = document.querySelector('section');
            sectionNaoLiberado.innerHTML = "<h3>PARE AGORA!</h3><h4>Você NÃO está liberado para votar!\n Arrume uma máscara e só saia de casa com ela!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionNaoLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }
    }

    botaoMenos60.onclick = function selecionaMenos60 () {
        var sectionMenosDe60 = document.querySelector('section');
        sectionMenosDe60.innerHTML = "<h3>Você não é idoso!</h3><h4>Sendo assim, o seu horário de votação preferencial a partir das 10h.</h4>";
        
        var criaBotaoComMascara = document.createElement('button');
        var criaBotaoSemMascara = document.createElement('button');
    
        var botaoComMascara = sectionMenosDe60.appendChild(criaBotaoComMascara);
        var botaoSemMascara = sectionMenosDe60.appendChild(criaBotaoSemMascara);
    
        criaBotaoComMascara.innerText = "Já separou a mascara?";
        criaBotaoSemMascara.innerText = "Nem tenho mais máscara!";

        botaoComMascara.onclick = function liberaParaVotar () {
            var sectionLiberado = document.querySelector('section');
            sectionLiberado.innerHTML = "<h3>PARABÉNS!</h3><h4>Você está liberado para votar!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }

        botaoSemMascara.onclick = function pegaMascaraERecarrega () {
            var sectionNaoLiberado = document.querySelector('section');
            sectionNaoLiberado.innerHTML = "<h3>PARE AGORA!</h3><h4>Você NÃO está liberado para votar!\n Arrume uma máscara e só saia de casa com ela!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionNaoLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }        
    }
}


function selecionaJujuba () {
    var sectionJujuba = document.querySelector('section');
    sectionJujuba.innerHTML = "<h3>Olá eu sou a Jujuba!</h3><h4>Me diga o que preciso fazer agora?</h4>";
    
    var criaBotaoMais60 = document.createElement('button');
    var criaBotaoMenos60 = document.createElement('button');

    var botaoMais60 = sectionJujuba.appendChild(criaBotaoMais60);
    var botaoMenos60 = sectionJujuba.appendChild(criaBotaoMenos60);

    criaBotaoMais60.innerText = "Tenho mais de 60 anos!";
    criaBotaoMenos60.innerText = "Tenho menos de 60 anos!";

    botaoMais60.onclick = function selecionaMaisDe60 () {
        var sectionMaisDe60 = document.querySelector('section');
        sectionMaisDe60.innerHTML = "<h3>Você é idoso!</h3><h4>Sendo assim, o seu horário de votação preferencial é de 7h às 10h.</h4>";
        
        var criaBotaoComMascara = document.createElement('button');
        var criaBotaoSemMascara = document.createElement('button');
    
        var botaoComMascara = sectionMaisDe60.appendChild(criaBotaoComMascara);
        var botaoSemMascara = sectionMaisDe60.appendChild(criaBotaoSemMascara);
    
        criaBotaoComMascara.innerText = "Já separou a mascara?";
        criaBotaoSemMascara.innerText = "Nem tenho mais máscara!";

        botaoComMascara.onclick = function liberaParaVotar () {
            var sectionLiberado = document.querySelector('section');
            sectionLiberado.innerHTML = "<h3>PARABÉNS!</h3><h4>Você está liberado para votar!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }

        botaoSemMascara.onclick = function pegaMascaraERecarrega () {
            var sectionNaoLiberado = document.querySelector('section');
            sectionNaoLiberado.innerHTML = "<h3>PARE AGORA!</h3><h4>Você NÃO está liberado para votar!\n Arrume uma máscara e só saia de casa com ela!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionNaoLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }
    }

    botaoMenos60.onclick = function selecionaMenos60 () {
        var sectionMenosDe60 = document.querySelector('section');
        sectionMenosDe60.innerHTML = "<h3>Você não é idoso!</h3><h4>Sendo assim, o seu horário de votação preferencial a partir das 10h.</h4>";
        
        var criaBotaoComMascara = document.createElement('button');
        var criaBotaoSemMascara = document.createElement('button');
    
        var botaoComMascara = sectionMenosDe60.appendChild(criaBotaoComMascara);
        var botaoSemMascara = sectionMenosDe60.appendChild(criaBotaoSemMascara);
    
        criaBotaoComMascara.innerText = "Já separou a mascara?";
        criaBotaoSemMascara.innerText = "Nem tenho mais máscara!";

        botaoComMascara.onclick = function liberaParaVotar () {
            var sectionLiberado = document.querySelector('section');
            sectionLiberado.innerHTML = "<h3>PARABÉNS!</h3><h4>Você está liberado para votar!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }

        botaoSemMascara.onclick = function pegaMascaraERecarrega () {
            var sectionNaoLiberado = document.querySelector('section');
            sectionNaoLiberado.innerHTML = "<h3>PARE AGORA!</h3><h4>Você NÃO está liberado para votar!\n Arrume uma máscara e só saia de casa com ela!</h4>";
            
            var criaBotaoRecarregar = document.createElement('button');
        
            var botaoRecarregar = sectionNaoLiberado.appendChild(criaBotaoRecarregar);
                    
            criaBotaoRecarregar.innerText = "Voltar";

            botaoRecarregar.onclick = function recarregar (){
                document.location.reload(true);
            }
        }        
    }
}


