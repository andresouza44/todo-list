const formAddTodo = document.querySelector('.form-add-todo')
const todoContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')



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
    // solução professor:
    //  const isTrashElementClicked = Array.from(event.target.classList).includes('delete')
    const isTrashElementClicked = event.target.classList.contains ('delete')
    if(isTrashElementClicked)
        event.target.parentElement.remove()
})

inputSearchTodo.addEventListener('input', event =>{   
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(todoContainer.children)
        .filter(todo=>!todo.textContent.toLowerCase().includes(inputValue))
        .forEach( todo =>{
            todo.classList.add('hidden')
            todo.classList.remove('d-flex')
        })  
    Array.from(todoContainer.children)
    .filter(todo=>todo.textContent.toLowerCase().includes(inputValue))
    .forEach( todo =>{
        todo.classList.add('d-flex')
        todo.classList.remove('hidden')
    })  

})
