# nlwapp
 Project educational maked with learning with Rocketsteat - About
![Sem título](https://github.com/Menephyl/nlwapp/assets/87574460/e4c42388-6824-41c5-9085-2fa395888421)

## Aplicação front-end em HTML+CSS+JS desenvolvida durante o NLW Unite da Rocketseat 

##  versão simplificada de um sistema de check-in para eventos presenciais.


//string 
//funcao
alert(mensagem)

// objeto javascript 
const = participante = {
    nome: "Maik Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date (2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 00)
}
// array 
let participantes = [
    {
    nome: "Maik Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date (2024, 2, 22, 19, 20),
    dataCheckIn: new Date (2024, 2, 25, 22, 00)
    }

]
//estrutura de repetição for
let output = "" 
for(let participante of participantes){
    output = output +  criarNovoParticipante(participante)
}
