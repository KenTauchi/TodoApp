const todos = [{
    text: 'Take a shower',
    completed: true
}, {
    text: 'Commute to the office',
    completed: false
}, {
    text: 'Call to clients',
    completed: true
}, {
    text: 'Workout at Golds',
    completed: true
 }, {
    text: 'Get some proteins',
    completed: false
 }]

 // 1. Setup a div contain for todos
 // 2. Setup filters (searchText) and write up a new filter input to change it
 // 3. Create a renderTodos function to render and rerenber the latest filterd data. 


const filters = {
    searchText: ''
}

const incompletedTodos = todos.filter(function (todo) {
    return todo.completed === false
})

const addP = document.createElement('p')
addP.textContent = `You have ${incompletedTodos.length} things to do left.`
document.querySelector('h2').appendChild(addP)


const todoLists = todos.forEach(function (todo) {
    // if (todo.completed === false) {
        const addP = document.createElement('p')
        addP.textContent = todo.text
        document.querySelector('#todos').appendChild(addP)
    // }
})

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    filteredTodos.forEach(function (todo) {
            const addP = document.createElement('p')
            addP.textContent = todo.text
            document.querySelector('#todos').appendChild(addP)
    
    })

}

document.querySelector('#todo-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })

    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})









