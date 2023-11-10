// DisplayController factory function here
export function displayController() {
  const todoItemsDiv = document.getElementById('todo-items');
  const todoItemsHeader = document.createElement('p');
  todoItemsHeader.setAttribute('id', 'list-name');
  todoItemsHeader.textContent = 'Current Project We Are In'; // this will change depending on what list we're in
  todoItemsDiv.appendChild(todoItemsHeader);

  const updateScreen = () => {
    // Write Code Here
  };

  function clickHandler(e) {
    // Write Code Here
  }

  function clearScreen() {
    // Write Code Here
  }

  //   updateScreen() // initial render

  return {};
}

// we want
// nav bar
// side bar like admin dashboard
// then main dashboard
