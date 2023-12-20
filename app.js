const formAddTodo = document.querySelector('.form-add-todo')
const todoContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener( 'submit', event =>{
    event.preventDefault()
    const inputValue = event.target.add.value.trim()

    if (inputValue.length){
        todoContainer.innerHTML += `
            <li class="list-group-item d-flex 
            justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
            </li>`
    }
   
    event.target.reset()

})

todoContainer.addEventListener('click', event =>{
    const isTrashElementClicked = event.target.classList.contains ('delete')
    if(isTrashElementClicked)
        event.target.parentElement.remove()
})

