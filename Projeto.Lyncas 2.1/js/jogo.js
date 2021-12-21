var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var clear = document.getElementById("clear");
var pointer = document.getElementById("pointer");
var marcacao = document.getElementById("marcacao");
var player1 = document.getElementById("playerPontuacao");
var bot1 = document.getElementById("botPontuacao");
var nomeBot = document.getElementById("nomeBot");

var escolha;
var jogador;

var BaseDoJogo = new Array();
var PontosPlayer;
var PontosBot;

var mostrarPlayer;
var mostrarBot;

async function Selecionar(){
    BaseDoJogo = await apiService.getJogo()
                    .then((resp) => resp.json())
                    .catch((error) => console.log(error));
    if(BaseDoJogo[escolha] != 0){
        alert("Essa opção já foi selecionada.")
    }else{
        await apiService.updateJogo()
            .then((resp) => resp)
            .catch((error) => console.log(error));
        Mostrar();
        var definir = await apiService.vencedorJogo()
                        .then((resp) => resp.json())
                        .catch((error) => console.log(error));

        if(definir == 0){ 
            Bot();
        }else if(definir == 1){ 
            PontosPlayer++;
            apiService.reseteJogo();
            alert("Você venceu!!!");
            Mostrar();
            player1.innerHTML = PontosPlayer;
            if(jogador == 2){ 
                await apiService.botJogo()
                    .then((resp) => resp)
                    .catch((error) => console.log(error));
            }
        }else{
            apiService.reseteJogo();
            alert("O jogo resultou em um empate!");
            Mostrar();
            if(jogador == 2){ 
                await apiService.botJogo()
                    .then((resp) => resp)
                    .catch((error) => console.log(error));
                Mostrar();
            }
        }
    }
    
}

async function Bot(){
    await apiService.botJogo()
                .then((resp) => resp)
                .catch((error) => console.log(error));
    Mostrar();
    definir = await apiService.vencedorJogo()
                .then((resp) => resp.json())
                .catch((error) => console.log(error));
    if(definir == 1){ 
        PontosBot++;
        apiService.reseteJogo();
        alert("O seu oponente venceu!!!");
        bot1.innerHTML = PontosBot;
        if(jogador == 2){ 
            await apiService.botJogo()
                .then((resp) => resp)
                .catch((error) => console.log(error));
        }
        Mostrar();
    }else if(definir == 0){

    }else{
        apiService.reseteJogo();
        alert("O jogo resultou em um empate!!");
        Mostrar();
        if(jogador == 2){ 
            await apiService.botJogo()
                .then((resp) => resp)
                .catch((error) => console.log(error));
            Mostrar();
        }
    }
}

async function Iniciar(){
    let url = new URLSearchParams(location.search);
    let id = url.get("ID");
    var user = await usuarioService.searchUserById(id)
        .then((resp) => resp.json())
        .catch((error) => console.log(error));
    
    nomeBot.innerHTML = "Vitórias de " + user.firstName + " " + user.lastName;

    BaseDoJogo = [0,0,0,0,0,0,0,0,0];
    jogador = 1;

    PontosPlayer = 0;
    PontosBot = 0;

    await apiService.addJogo()
            .then((resp) => resp)
            .catch((error) => console.log(error));
}

async function Clear(){
    apiService.reseteJogo();

    jogador = 1;
    marcacao.innerHTML = "X - O";

    PontosPlayer = 0;
    PontosBot = 0;
    player1.innerHTML = PontosPlayer;
    bot1.innerHTML = PontosBot;
           
    Mostrar();
}

async function MudarLado(){ 
    apiService.reseteJogo();
    PontosPlayer = 0;
    PontosBot = 0;
    player1.innerHTML = PontosPlayer;
    bot1.innerHTML = PontosBot;

    if(jogador == 1){
        marcacao.innerHTML = "O - X";
    }else{ 
        marcacao.innerHTML = "X - O";
    }
    if(jogador == 1){ 
        await apiService.botJogo()
            .then((resp) => resp)
            .catch((error) => console.log(error));
        jogador = 2;
    }else{
        jogador = 1;
    }
    console.log(jogador);
    Mostrar();
}

async function Mostrar(){
    BaseDoJogo = await apiService.getJogo()
                    .then((resp) => resp.json())
                    .catch((error) => console.log(error));

    if(jogador == 1){ 
        mostrarPlayer = "X";
        mostrarBot = "O";
    }else{
        mostrarPlayer = "O";
        mostrarBot = "X";
    }

    for(i = 0; i < BaseDoJogo.length; i++){
        switch(i){
            case 0:
                {
                    if(BaseDoJogo[0] == 1){ 
                        box1.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[0] == 2){
                        box1.innerHTML = mostrarBot;
                    }else{
                        box1.innerHTML = "";
                    }
                }
            case 1:
                {
                    if(BaseDoJogo[1] == 1){ 
                        box2.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[1] == 2){
                        box2.innerHTML = mostrarBot;
                    }else{
                        box2.innerHTML = "";
                    }
                }
            case 2:
                {
                    if(BaseDoJogo[2] == 1){ 
                        box3.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[2] == 2){
                        box3.innerHTML = mostrarBot;
                    }else{
                        box3.innerHTML = "";
                    }
                }
            case 3:
                {
                    if(BaseDoJogo[3] == 1){ 
                        box4.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[3] == 2){
                        box4.innerHTML = mostrarBot;
                    }else{
                        box4.innerHTML = "";
                    }
                }
            case 4:
                {
                    if(BaseDoJogo[4] == 1){ 
                        box5.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[4] == 2){
                        box5.innerHTML = mostrarBot;
                    }else{
                        box5.innerHTML = "";
                    }
                } 
            case 5:
                {
                    if(BaseDoJogo[5] == 1){ 
                        box6.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[5] == 2){
                        box6.innerHTML = mostrarBot;
                    }else{
                        box6.innerHTML = "";
                    }
                }  
            case 6:
                {
                    if(BaseDoJogo[6] == 1){ 
                        box7.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[6] == 2){
                        box7.innerHTML = mostrarBot;
                    }else{
                        box7.innerHTML = "";
                    }
                }
            case 7:
                {
                    if(BaseDoJogo[7] == 1){ 
                        box8.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[7] == 2){
                        box8.innerHTML = mostrarBot;
                    }else{
                        box8.innerHTML = "";
                    }
                }
            case 8:
                {
                    if(BaseDoJogo[8] == 1){ 
                        box9.innerHTML = mostrarPlayer;
                    }else if(BaseDoJogo[8] == 2){
                        box9.innerHTML = mostrarBot;
                    }else{
                        box9.innerHTML = "";
                    }
                }
        }
    }
}

box1.addEventListener("click", function (e) {
    escolha = 0;
    Selecionar()
})

box2.addEventListener("click", function (e) {
    escolha = 1;
    Selecionar()
})

box3.addEventListener("click", function (e) {
    escolha = 2;
    Selecionar()
})

box4.addEventListener("click", function (e) {
    escolha = 3;
    Selecionar()
})

box5.addEventListener("click", function (e) {
    escolha = 4;
    Selecionar()
})

box6.addEventListener("click", function (e) {
    escolha = 5;
    Selecionar()
})

box7.addEventListener("click", function (e) {
    escolha = 6;
    Selecionar()
})

box8.addEventListener("click", function (e) {
    escolha = 7;
    Selecionar()
})

box9.addEventListener("click", function (e) {
    escolha = 8;
    Selecionar()
})

pointer.addEventListener('click', MudarLado);
clear.addEventListener('click', Clear);
window.addEventListener('load', Iniciar);