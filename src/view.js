// DisplayController factory function here
export function displayController() {
  // new Date needs to be the user's timezone
  // then fix the length UI issue
  const datePicker = (document.getElementById('due-date').valueAsDate =
    new Date());

  // open and close task modal
  const newTaskModal = (function () {
    const addTodoItemButton = document.getElementById('add-task-button');
    const taskDialog = document.querySelector('#new-task');
    const taskCloseButton = document.querySelector('#new-task button');

    addTodoItemButton.addEventListener('click', () => {
      taskDialog.showModal();
    });

    taskCloseButton.addEventListener('click', () => {
      taskDialog.close();
    });
  })();

  // open and close project modal
  const newProjectModal = (function () {
    const addProjectsButton = document.getElementById('add-project-button');
    const projectDialog = document.querySelector('#new-project-dialog');
    const projectCloseButton = document.querySelector(
      '#new-project-dialog button'
    );

    addProjectsButton.addEventListener('click', () => {
      projectDialog.showModal();
    });

    projectCloseButton.addEventListener('click', () => {
      projectDialog.close();
    });
  })();

  // handle updating project header text on click
  const updateProjectHeader = (function () {
    const todoItemsDiv = document.getElementById('todo-items');
    const currentProjectHeader = document.createElement('p');
    currentProjectHeader.setAttribute('id', 'project-name');
    const buttons = document.querySelectorAll('.btn');
    // have 'All Tasks' display as initial value on refresh
    // TODO: have it handle the projects we create in the submenu as well
    const initialValue = document.getElementById('initial-value');
    currentProjectHeader.textContent = initialValue.value;
    todoItemsDiv.appendChild(currentProjectHeader);
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        currentProjectHeader.textContent = e.target.value;
        todoItemsDiv.appendChild(currentProjectHeader);
      });
    });
  })();

  // TODO: add new projects to submenu
  // have a General project always present

  return {};
}
