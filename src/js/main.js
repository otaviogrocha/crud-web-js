const saveBtn = document.querySelector('#save');
const addBtn = document.getElementById('add');
const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const nome = document.getElementById('name');
const turma = document.getElementById('turma');
const idade = document.getElementById('idade');

// const elements = {
//     id: 0,
//     name: "otavio",
//     turma: 1,
// }


function insertValues(){
    let tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${nome.value}</td>
        <td>${turma.value}</td>
        <td>${idade.value}</td>
        <td class ="acao">
            <button onclick = "editItem({})"><i class ='bx bx-edit'></i></button>
        </td>
        <td class ="acao">
            <button onclick = "deleteItem({})"><i class ='bx bx-trash'></i></button>
        </td>
    `
    tbody.appendChild(tr)
}

// function iterator(array) {
//     array.forEach(item => {
//         console.log(item)
//     });
// }


//  Ativar e remover Modal

function openModal() {
    addBtn.addEventListener('click', () => {
        modal.classList.add('active')
    })

    document.addEventListener('click', (e) => {
        if (e.target.className == 'modal-container active')
            modal.classList.remove('active');
    })
}

openModal();
// CREATE

function create() {
    saveBtn.addEventListener('click', (e) => {

        e.preventDefault()
        insertValues();
        modal.classList.remove('active')
        console.log('clique')
    }
    )
}

create()

// READ




// UPDATE




// DELETE






