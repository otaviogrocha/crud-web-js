const save = document.querySelector('.save');
const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('.body-table');
const name = document.getElementById('#name');
const turma = document.getElementById('#turma');
const idade = document.getElementById('#idade');

const elements = {
    id: 0,
    name: "otavio",
    turma: 1,
}


insertValues = () =>{

let tr = document.createElement('tr')

tr.innerHTML = `
<td>{input.nome}</td>
<td>{input.turma}</td>
<td>{input.idade}</td>
<td class ="acao">
    <button onclick = "editItem({})"><i class ='bx bx-edit'></i></button>
</td>
<td class ="acao">
    <button onclick = "deleteItem({})"><i class ='bx bx-trash'></i></button>
</td>
`
tbody.appendChild(tr)

}

function iterator (array){
    array.forEach(item => {
        console.log(item)
    });
}


//  Ativar e remover Modal



// CREATE

save.addEventListener('onclick', () =>{
insertValues();



    
modal.classList.remove('.active')
})


// READ




// UPDATE 




// DELETE






