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

var alunos = [["Arthur", "Turma 5", 16], ["Caio", "Turma 4", 13], ["Bernardo", "Turma 2", 10]]

var id = '00';

function insertValues(aluno, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${id}</td>
        `;for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }`
        <td>${aluno}</td>
        <td>${aluno}</td>
        <td>${aluno}</td>
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
        insertValues();

        modal.classList.remove('active')
        limpaCampos();
    })
}

create()

// READ

for (let i = 0; i < alunos.length; i++) {
    console.log("")
    alunos[i].forEach( (aluno, index) => {
        insertValues(aluno, index) 
        console.log(aluno)
    }); 
}








// const newArray1 = []
// const newArray2 = []
// const newArray3 = []


// for (let i = 0; i < alunos.length; i++) {
//     // for (let x = 0; x < alunos.length; x++) {
//     // }
//     newArray1.push(alunos[i])
//     // console.log(alunos[i])
//     console.log("")
// }

    // newArray1.forEach(alunos => {
    //     console.log(alunos)
    // });

    // alunos.reduce()



    // UPDATE




    // DELETE


    function limpaCampos() {
        nome.value = ''
        turma.value = ''
        idade.value = ''
    }



