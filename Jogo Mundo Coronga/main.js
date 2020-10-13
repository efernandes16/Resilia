function recarregaPagina () {

    document.location.reload(true);
}


alert("Eu acordo no mundo de coronga.");

var condicao = prompt("Saio de casa?\n 1 - SIM\n 2 - NÃO");

    if ( condicao == "1" ) {

        alert("Foi corongado e morreu")
        recarregaPagina();
    } else if ( condicao == "2") {

        alert("Vai pro PC e aprende a programar"); 
        var condicao2 = prompt("Fez projetos e exercícios? \n 1 - SIM\n 2 - NÃO");
        if ( condicao2 == "1") {
            alert("Criou portifólio, fez case de entrevista e passou! :D");
        } else if ( condicao2 == "2") {
            alert("Não conseguiu fazer case das entrevistas");
            recarregaPagina();
        } else {
            alert("Comando inválido!");
            recarregaPagina();
        }
    } else {

        alert ("Comando inválido!");
        recarregaPagina();
    } 




