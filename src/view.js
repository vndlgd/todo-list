// DisplayController factory function here
export function displayController() {
  // this logic belongs wherever we handle when we click on a new project
  const todoItemsDiv = document.getElementById('todo-items');
  const todoItemsHeader = document.createElement('p');
  todoItemsHeader.setAttribute('id', 'list-name');
  todoItemsHeader.textContent = 'Current Project We Are In'; // this will change depending on what list we're in
  todoItemsDiv.appendChild(todoItemsHeader);

  // new Date needs to be the user's timezone
  // then fix the length UI issue
  const datePicker = (document.getElementById('due-date').valueAsDate =
    new Date());

  // New Task Modal
  const addTodoItemButton = document.getElementById('add-task-button');
  const taskDialog = document.querySelector('#new-task');
  const taskCloseButton = document.querySelector('#new-task button');

  addTodoItemButton.addEventListener('click', () => {
    taskDialog.showModal();
  });

  taskCloseButton.addEventListener('click', () => {
    taskDialog.close();
  });

  // New Project Modal
  const addProjectsButton = document.getElementById('add-project-button');
  const projectDialog = document.querySelector('#new-project');
  const projectCloseButton = document.querySelector('#new-project button');

  addProjectsButton.addEventListener('click', () => {
    projectDialog.showModal();
  });

  projectCloseButton.addEventListener('click', () => {
    projectDialog.close();
  });

  const updateScreen = () => {
    // Write Code Here
  };

  function clickHandler(e) {
    // Write Code Here
    alert(e.type);
  }

  function clearScreen() {
    // Write Code Here
  }

  //   updateScreen() // initial render

  return {};
}

// Think of how you wanna break up each module into functions
// Organize rather than have it all be here
// We need to update the project list and todo items list
