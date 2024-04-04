

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
    // espalhar spread
    participantes =[participante, ...participantes] 
    atualizarLista(participantes)
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




// let participantes = [
//     {
//       nome: "Diego Fernandes",
//       email: "diego@gmail.com",
//       dataInscricao: new Date(2024, 2, 1, 19, 23),
//       dataCheckIn: new Date(2024, 2, 1, 20, 20)
//     },
//     {
//       nome: "Mayk Brito",
//       email: "mayk@gmail.com",
//       dataInscricao: new Date(2024, 2, 23, 19, 23),
//       dataCheckIn: null
//     },
//     {
//       nome: "Ana Souza",
//       email: "ana@gmail.com",
//       dataInscricao: new Date(2024, 0, 3, 19, 23),
//       dataCheckIn: new Date(2024, 0, 4, 20, 20)
//     },
//     {
//       nome: "João Silva",
//       email: "joao@gmail.com",
//       dataInscricao: new Date(2023, 11, 4, 19, 23),
//       dataCheckIn: new Date(2023, 11, 5, 20, 20)
//     },
//     {
//       nome: "Maria Oliveira",
//       email: "maria@gmail.com",
//       dataInscricao: new Date(2023, 10, 5, 19, 23),
//       dataCheckIn: null
//     },
//     {
//       nome: "Pedro Santos",
//       email: "pedro@gmail.com",
//       dataInscricao: new Date(2023, 9, 6, 19, 23),
//       dataCheckIn: new Date(2023, 9, 7, 20, 20)
//     },
//     {
//       nome: "Carla Lima",
//       email: "carla@gmail.com",
//       dataInscricao: new Date(2023, 8, 7, 19, 23),
//       dataCheckIn: new Date(2023, 8, 8, 20, 20)
//     },
//     {
//       nome: "Lucas Sousa",
//       email: "lucas@gmail.com",
//       dataInscricao: new Date(2023, 7, 8, 19, 23),
//       dataCheckIn: new Date(2023, 7, 9, 20, 20)
//     },
//     {
//       nome: "Paula Costa",
//       email: "paula@gmail.com",
//       dataInscricao: new Date(2023, 6, 9, 19, 23),
//       dataCheckIn: null
//     },
//     {
//       nome: "Gabriel Almeida",
//       email: "gabriel@gmail.com",
//       dataInscricao: new Date(2023, 5, 10, 19, 23),
//       dataCheckIn: null
//     }
//   ];
  
//   const criarNovoParticipante = (participante) => {
//     const dataInscricao = dayjs(Date.now())
//     .to(participante.dataInscricao)
  
//     let dataCheckIn = dayjs(Date.now())
//     .to(participante.dataCheckIn)
    
//     if(participante.dataCheckIn == null) {
//       dataCheckIn = `
//         <button
//           data-email="${participante.email}"
//           onclick="fazerCheckIn(event)"
//         >
//           Confirmar check-in
//         </button>
//       `
//     }
  
//     return `
//     <tr>
//       <td>
//         <strong>
//           ${participante.nome}
//         </strong>
//         <br>
//         <small>
//           ${participante.email}
//         </small>
//       </td>
//       <td>${dataInscricao}</td>
//       <td>${dataCheckIn}</td>
//     </tr>
//     `
//   }
  
//   const atualizarLista = (participantes) => {
//     let output = ""
//     for(let participante of participantes) {
//       output = output + criarNovoParticipante(participante)
//     }
  
//     // substituir informação do HTML
//     document
//     .querySelector('tbody')
//     .innerHTML = output
//   }
  
//   atualizarLista(participantes)
  
//   const adicionarParticipante = (event) => {
//     event.preventDefault()
  
//     const dadosDoFormulario = new FormData(event.target)
  
//     const participante = {
//       nome: dadosDoFormulario.get('nome'),
//       email: dadosDoFormulario.get('email'),
//       dataInscricao: new Date(),
//       dataCheckIn: null  
//     }
  
//     // verificar se o particpante já existe
//     const participanteExiste = participantes.find(
//       (p) => p.email == participante.email
//     )
  
//     if(participanteExiste) {
//       alert('Email já cadastrado!')
//       return
//     }
  
//     participantes = [participante, ...participantes]
//     atualizarLista(participantes)
  
//     // limpar o formulario
//     event.target.querySelector('[name="nome"]').value = ""
//     event.target.querySelector('[name="email"]').value = ""
//   }
  
//   const fazerCheckIn = (event) => {
//     // confirmar se realmente quer o check-in
//     const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?' 
  
//     if(confirm(mensagemConfirmacao) == false) {
//       return
//     }
  
//     // encontrar o participante dentro da lista
//     const participante = participantes.find(
//       (p) => p.email == event.target.dataset.email  
//     )
    
//     // atualizar o check-in do participante
//     participante.dataCheckIn = new Date()
  
//     // atualizar a lista de participantes
//     atualizarLista(participantes)
//   }