import { createTodoList } from './todo-list';
import { projects } from './todo-app';
import Icon from './icon.png';

const sidebar = document.getElementById('sidebar');

// Initialize to all tasks on refresh
const currentProjectHeader = document.querySelector('#project-name');
const initialValue = document.getElementById('initial-value');

currentProjectHeader.textContent = initialValue.value;

// DisplayController factory function here
export function displayController() {
  // open and close task modal
  const newTaskModal = function () {
    const showButton = document.getElementById('add-task-button');
    const newTaskDialog = document.getElementById('new-task-dialog');
    const saveBtn = newTaskDialog.querySelector('.saveBtn');
    const taskTitle = newTaskDialog.querySelector('#item-title');

    showButton.addEventListener('click', () => {
      newTaskDialog.showModal();
    });

    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (taskTitle.value === '') {
        alert('Please add title');
      } else {
        newTaskDialog.close(); // TODO: finish this
      }
    });
  };

  // open and close project modal
  const newProjectModal = function () {
    const showButton = document.getElementById('add-project-button');
    const newProjectDialog = document.getElementById('new-project-dialog');
    const saveBtn = newProjectDialog.querySelector('.saveBtn');
    const inputEl = newProjectDialog.querySelector('input');

    // Show dialog button opens <dialog> modally
    showButton.addEventListener('click', () => {
      newProjectDialog.showModal();
    });

    newProjectDialog.addEventListener('close', (e) => {
      inputEl.value = '';
    });

    // add projects to submenu
    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const titleArray = projects.map(({ title }) => title);
      if (inputEl.value === '') {
        alert('Please add title.');
      } else if (titleArray.includes(inputEl.value)) {
        alert('That title already exists.');
      } else {
        createTodoList(inputEl.value);
        displaySubmenu();
        updateProjectHeader();
        newProjectDialog.close(); // TODO: finish this
      }
    });
  };

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
  const updateProjectHeader = function () {
    const currentProjectHeader = document.querySelector('#project-name');
    const buttons = document.querySelectorAll('.menu > .btn, .submenu > .btn');

    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        currentProjectHeader.textContent = e.target.value;
      });
    });
  };

  newProjectModal();
  newTaskModal();
  displaySubmenu();
  updateProjectHeader();

  return {};
}
