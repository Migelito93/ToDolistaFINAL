let todos = [];

// deklarera variabler och ta tag i HTML elementen med jQuery
const button = $('#btn');
const input = $('#input');
const ul = $('#list');
const btnClr = $('#btnClr')
// Gör en funktion som lägger till en todo i arrayen med lite jQuery
const addToArray = () => {
  todos.push(input.val());
  input.val('');
}
// Denna togglar line-through i <p> taggen
const toggleCompleted = e => {
  if (!e.target.classList.contains('completed')) {
    e.target.classList.add('completed');

  } else {
    e.target.classList.remove('completed');
  }
}

// Denna renderar och visar alla todo-grejerna och gör de till "rader"
const renderTodos = () => {
  ul.html('');
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.addEventListener('click', toggleCompleted);
    li.classList.add('list-group-item');
    li.innerHTML = `<p class="todo">${todo}</p>`;
    ul.append(li);
  })
}
// Denna hanterar hela flödet med att lägga till och visa upp tillagda todo
const handleAddingTodos = e => {
  e.preventDefault();
  addToArray();
  renderTodos();
}

// denna tar bort de line-through:ade todo-items:ena
const deleteTodos = () => {
  const completedTodos = document.querySelectorAll('.completed');
  completedTodos.forEach(todo => {
    todo.parentNode.remove()
    todos = todos.filter(todoFromArray => todoFromArray !== todo.innerText);
  });
}
// eventlyssnare med jQuery
btnClr.click(deleteTodos);
button.click(handleAddingTodos);