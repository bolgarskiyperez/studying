const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
const notes = ['1', '2']

function render() {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))

}

createBtn.onclick = function () {
    // listElement.innerHTML = 
    if (inputElement.value.lenght === 0) {
        return 
    }
    
    listElement.insertAdjacentHTML(
        'beforeend',
        getNoteTemplate(inputelement.value)
    )

    inputElement.value = ''
    


}

function getNoteTemplate(title) {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputElement.value}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>

`

}