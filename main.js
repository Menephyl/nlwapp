const criarNovoParticipante = () => {
    return ´
    <tr>
         <td>
        <strong>Diego Fernandes</strong>
        <br>
        <small>diego@gmail.com</small>
        </td>
    <td>há 3 dias </td>
    <td>há 3 minutos</td>
</tr>´

}

const atualizarLista = () => {

// pegar informação html 


// substituir informação 
document.querySelector('tbody').innerHTML = criarNovoParticipante()
} 
atualizarLista()
