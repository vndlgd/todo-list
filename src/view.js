import { createTodoList } from './todo-list';
import { projects } from './todo-app';
import Icon from './icon.png';
import { sub } from 'date-fns';

const sidebar = document.getElementById('sidebar');
const saveButton = document.getElementById('saveBtn');
const cancelButton = document.getElementById('cancelBtn');

// DisplayController factory function here
export function displayController() {
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

  const addProjectsToSubmenu = (function () {
    const projectTitle = document.getElementById('project-title');
    const cancelButton = document.getElementById('cancelBtn');
    saveButton.addEventListener('click', (e) => {
      e.preventDefault();
      // if projectTitle already in projects, do not add and alert user
      const titleArray = projects.map(({ title }) => title);
      if (titleArray.includes(projectTitle.value)) {
        alert('That title already exists.');
        // TODO: do not close modal on this condition
        // if projectTitle is empty, do not add and alert user
      } else if (projectTitle.value === '') {
        alert('Please add title.');
      } else {
        // else, add to projects array
        createTodoList(projectTitle.value);
        displaySubmenu();
      }
      projectTitle.value = ''; // reset input after saving
    });
  })();

  const clearInputAfterCancel = (function () {
    const projectTitle = document.getElementById('project-title');
    const cancelButton = document.getElementById('cancelBtn');
    cancelButton.addEventListener('click', () => {
      projectTitle.value = '';
    });
  })();

  function displaySubmenu() {
    for (let i = 0; i < projects.length - 1; i++) {
      // to avoid duplicate values and errors
      sidebar.removeChild(sidebar.lastChild); // clear sidebar added projects
    }
    projects.forEach((project) => {
      const container = document.createElement('div');
      const newProject = document.createElement('button');
      const image = document.createElement('img');
      image.src = Icon;
      container.setAttribute('class', 'submenu');
      newProject.setAttribute('class', 'btn');
      newProject.setAttribute('value', project.title);
      newProject.textContent = project.title;
      container.appendChild(image);
      container.appendChild(newProject);
      sidebar.appendChild(container);
    });
  }

  // handle updating project header text on click
  const updateProjectHeader = (function () {
    const todoItemsDiv = document.getElementById('todo-items');
    const currentProjectHeader = document.createElement('p');
    currentProjectHeader.setAttribute('id', 'project-name');

    // have 'All Tasks' display as initial value on refresh
    const initialValue = document.getElementById('initial-value');
    currentProjectHeader.textContent = initialValue.value;
    todoItemsDiv.appendChild(currentProjectHeader);

    // TODO: include submenu buttons
    const menuButtons = document.querySelectorAll('.menu > .btn');
    menuButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        currentProjectHeader.textContent = e.target.value;
        todoItemsDiv.appendChild(currentProjectHeader);
      });
    });
  })();

  displaySubmenu();

  return {};
}
