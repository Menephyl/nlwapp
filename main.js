

let participantes = [
    {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 8)
    },
    {
        nome: "Fernanda Silva",
        email: "fernanda@email.com",
        dataInscricao: new Date(2024, 3, 15, 10, 30),
        dataCheckIn: new Date(2024, 3, 15, 11, 20)
    },
    {
        nome: "João Oliveira",
        email: "joao@email.com",
        dataInscricao: new Date(2024, 3, 17, 14, 45),
        dataCheckIn: new Date(2024, 3, 17, 15, 30)
    },
    {
        nome: "Carla Santos",
        email: "carla@email.com",
        dataInscricao: new Date(2024, 3, 20, 9, 0),
        dataCheckIn: new Date(2024, 3, 20, 10, 15)
    },
    {
        nome: "Pedro Oliveira",
        email: "pedro@email.com",
        dataInscricao: new Date(2024, 3, 21, 16, 20),
        dataCheckIn: new Date(2024, 3, 21, 17, 10)
    },
    {
        nome: "Aline Souza",
        email: "aline@email.com",
        dataInscricao: new Date(2024, 3, 22, 13, 10),
        dataCheckIn: new Date(2024, 3, 22, 14, 0)
    },
    {
        nome: "Mariana Lima",
        email: "mariana@email.com",
        dataInscricao: new Date(2024, 3, 23, 11, 30),
        dataCheckIn: new Date(2024, 3, 23, 12, 45)
    },
    {
        nome: "Lucas Ferreira",
        email: "lucas@email.com",
        dataInscricao: new Date(2024, 3, 25, 10, 15),
        dataCheckIn: new Date(2024, 3, 25, 11, 0)
    },
    {
        nome: "Camila Alves",
        email: "camila@email.com",
        dataInscricao: new Date(2024, 3, 27, 15, 40),
        dataCheckIn: new Date(2024, 3, 27, 16, 30)
    }
];




const criarNovoParticipante = (participante) => {
    return `
    <tr>
         <td>
        <strong>${participante.nome}</strong>
        <br>
        <small>${participante.email}</small>
        </td>
         <td>${participante.dataInscrico}</td>
        <td>${participante.dataCheckIn}</td>
</tr>
`

}

const atualizarLista = (participante) => {

// substituir informação 
document.querySelector('tbody').innerHTML = criarNovoParticipante(participante)
} 
atualizarLista(participantes[2])
