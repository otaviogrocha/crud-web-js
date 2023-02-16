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

var alunos = [["Arthur", "Turma 5", 16], ["Bernardo", "Turma 4", 13], ["Caio", "Turma 2", 10]]

var id = '00';

function insertValues(aluno, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${id}</td>
        <td>${aluno[index]}</td>
        <td>${aluno[index + 1]}</td>
        <td>${aluno[index + 2]}</td>
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

function openModal(edit = false, index, value) {
    modal.classList.add('active')

    document.addEventListener('click', (e) => {
        // console.log(e.target.outerHTML)
        if (e.target.className === 'modal-container active')
            modal.classList.remove('active');
    })

    if (edit) {
        nome.value = alunos[index][value]
        turma.value = alunos[index][value]
        idade.value = alunos[index][value]
    } else {
        limpaCampos()
    }
}

addBtn.addEventListener('click', () => {
    openModal();
})

// CREATE

function create() {
    saveBtn.addEventListener('click', (e) => {
        if (nome.value == '' || turma.value == '' || idade.value == '') {
            return
        }

        e.preventDefault()

        const newValues = [];
        newValues.push(nome.value, turma.value, idade.value)
        addInputValues(newValues)
        newValues.splice();

        modal.classList.remove('active')
        limpaCampos();
    })
}



create()

// READ

// for (let i = 0; i < alunos.length; i++) {
//     console.log("")
//     alunos[i].forEach((aluno, index) => {
//         insertValues(aluno, index)
//         console.log(aluno)
//     });
// }

// newArray1.forEach(alunos => {
//     console.log(alunos)
// });

// alunos.reduce()

// const newArray1 = []
// const newArray2 = []
// const newArray3 = []

read(alunos)

function read(array) {
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array.length; x++) {
            insertValues(array[i], x)
            break;
        }
    }
}

function addInputValues(array) {
    for (let i = 0; i < array.length; i++) {
        insertValues(array, i)
        break
    }
}


// UPDATE




// DELETE


function limpaCampos() {
    nome.value = ''
    turma.value = ''
    idade.value = ''
}
