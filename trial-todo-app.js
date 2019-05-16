const todos = [{
    text: 'Bench Press',
    completed: true
}, {
    text: 'Cable Press',
    completed: true
}, {
    text: 'Shoulder Press',
    completed: false
}, {
    text: 'Deadlift',
    completed: false
 }, {
    text: 'Squat',
    completed: false
 }]

 const filters = {
    searchText: ''
 }

 const renderTodos = function (todos, filters) {
     const filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
     })

     const numberOfFalse = filteredTodos.filter(function (todo){
        return todo.completed === false
     })

     document.querySelector('h2').innerHTML = ''
     
     document.querySelector('#todo-lists').innerHTML = ''

     const summary = document.createElement('P')
     summary.textContent = `You have ${numberOfFalse.length} things to finish today!`
     document.querySelector('h2').appendChild(summary)

     filteredTodos.forEach(function (todo){
        const addP = document.createElement('p')
        addP.textContent = todo.text
        document.querySelector('#todo-lists').appendChild(addP)
     })

 }

 renderTodos(todos, filters)

 document.querySelector('#search-box').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
 })

 document.querySelector('#new-todo').addEventListener('submit', function (e){
    e.preventDefault()
    todos.push ({
        text: e.target.elements.text.value,
        completed: false
    })

    renderTodos(todos, filters)
    e.target.elements.text.value = ''
 })

