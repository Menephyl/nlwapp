const participante = {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscrico: new Date(2024,2,22,19,20),
    dataCheckIn: new Date(2024,2,25,22,08)
}


const criarNovoParticipante = (participante) => {
    return `
    <tr>
         <td>
        <strong>${participante.nome}</strong>
        <br>
        <small>${participante.email}</small>
        </td>
         <td>há 3 dias </td>
        <td>há 3 minutos</td>
</tr>
`

}

const atualizarLista = (participante) => {

// substituir informação 
document.querySelector('tbody').innerHTML = criarNovoParticipante(participante)
} 
atualizarLista()
