const formAddTodo = document.querySelector('.form-add-todo')
const todoContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')


const addTodo = ( event =>{
    event.preventDefault()
    const inputValue = event.target.add.value.trim()
    if (inputValue.length){
        todoContainer.innerHTML += `
            <li class="list-group-item d-flex 
            justify-content-between align-items-center" data-todo=${inputValue}>
            <span>${inputValue}</span>
            <i class="far fa-trash-alt" data-trash=${inputValue}></i>
            </li>`
    }
    event.target.reset()
}) 

const removeTodo = ( event =>{
    const clickedElement = event.target
    const trashDataValue = clickedElement.dataset.trash
    
    const todo = document.querySelector(`[data-todo="${clickedElement.dataset.trash}"]`)
    if (trashDataValue ){ todo.remove()}
    
})

const filterTodos = (todos, inputValue, returnMatechedTodos)=>  todos
        .filter(todo => {
            const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
            return returnMatechedTodos ? matchedTodos : !matchedTodos
        })


const manipulateClasses = (todos, classToAdd, classToRemove) => {
    todos.forEach( todo =>{
        todo.classList.add(classToAdd)
        todo.classList.remove(classToRemove)
    })  

}

const hideTodos = (todos, inputValue) =>{
   const todoToHide = filterTodos(todos,inputValue, false)
   manipulateClasses(todoToHide, 'hidden' , 'd-flex')

}

const showTodos = (todos, inputValue) => {
    const todoToShow = filterTodos( todos, inputValue, true)
    manipulateClasses(todoToShow, 'd-flex', 'hidden')
        
}

const searchTodo = (event =>{   
    const inputValue = event.target.value.trim().toLowerCase()
    const todos =  Array.from(todoContainer.children)
   hideTodos(todos, inputValue)
   showTodos(todos, inputValue)
   

})

formAddTodo.addEventListener('submit', addTodo)
todoContainer.addEventListener('click',removeTodo)
inputSearchTodo.addEventListener('input',searchTodo )
