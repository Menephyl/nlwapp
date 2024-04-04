

let participantes = [
    {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 18)
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
        dataCheckIn: null
    },
    {
        nome: "Lucas Ferreira",
        email: "lucas@email.com",
        dataInscricao: new Date(2024, 3, 25, 10, 15),
        dataCheckIn:null
    },
    {
        nome: "Camila Alves",
        email: "camila@email.com",
        dataInscricao: new Date(2024, 3, 27, 15, 40),
        dataCheckIn:null
    }
];




const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

    let dataCheckIn =  dayjs(Date.now()).to(participante.dataCheckIn)

    if(participante.dataCheckIn == null){
        dataCheckIn = `
        <button
        data-email="${participante.email}"
        onclick ="fazerCheckIn(event)"
        >
        Confirmar check-in
        </button>
        `
    }
    
    return `
    <tr>
         <td>
        <strong>${participante.nome}</strong>
        <br>
        <small>${participante.email}</small>
        </td>
         <td>${participante.dataInscricao}</td>
        <td>${dataCheckIn}</td>
</tr>
`

}

const atualizarLista = (participantes) => {
//estrutura de repetição for
let output = "" 
for(let participante of participantes){
    output = output +  criarNovoParticipante(participante)
}
// substituir informação 
document.querySelector('tbody').innerHTML = output
} 

atualizarLista(participantes)

const adicionarParticipante =(event) => {
    event.preventDefault() // nao realizar ação ao clicar com o botao

    const dadosDoFormulario = new FormData(event.target) // cte receberá dados ao clicar com o botao

    // alert(dadosDoFormulario.get('email'))

    const participante = {
        nome: dadosDoFormulario.get('nome'),
        email:dadosDoFormulario.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null
    }
    //verificar se o participante já existe
    const participanteExiste = participantes.find((p)=>
         p.email == participante.email //return imediato, sem necessidade de referenciar com chaves e 'return'
    
    )
    if(participanteExiste){
        alert('Email já cadastrado!')
        return
    }

    // espalhar spread
    participantes =[participante, ...participantes] 
    atualizarLista(participantes)
    //Limpar o form
    event.target.querySelector('[name="nome"]').value = "" // pegar tambem seletor de produto 
    event.target.querySelector('[name="email"]').value =""
}

const fazerCheckIn = (event) =>{//confirmar desejo de check-in
  const mensagemConfirmacao = 'Tem certeza?'
    if(confirm(mensagemConfirmacao) == false) {
        return 
    }
    alert(resultado)
    
    // encontrar o participante dentro da lista
    // atualizar checkIn do participante 
    //atualizar lista de participantes 
    const participante = participantes.find((p) =>{
        return p.email == event.target.dataset.email
    })
    participante.dataCheckIn = new Date()
    
    atualizarLista(participantes)


    // alert('chegamos aqui')
}




