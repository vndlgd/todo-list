import { createTodoList } from './todo-list';
import { createTodoItem } from './todo-item';
import { projects } from './todo-app';
import { format } from 'date-fns';
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
    const inputEl = newTaskDialog.querySelector('input');

    const taskTitle = newTaskDialog.querySelector('#item-title');
    const taskDescription = newTaskDialog.querySelector('#item-description');
    const dueDate = newTaskDialog.querySelector('#due-date');
    const projectList = newTaskDialog.querySelector('select');
    const priority = newTaskDialog.querySelector('#priority-level');

    showButton.addEventListener('click', () => {
      for (let i = 0; i < projects.length; i++) {
        // to avoid duplicate values and errors
        projectList.removeChild(projectList.lastChild); // clear sidebar added projects
      }
      // dynamically create a drop-down list with list options
      projects.forEach((list) => {
        const option = document.createElement('option');
        option.value = list.title;
        option.text = list.title;
        projectList.appendChild(option);
      });
      const today = new Date();
      dueDate.value = format(today, 'yyyy-MM-dd');
      newTaskDialog.showModal();
    });

    newTaskDialog.addEventListener('close', (e) => {
      taskTitle.value = '';
      taskDescription.value = '';
    });

    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const titleArray = projects.map(({ title }) => title);
      if (taskTitle.value === '') {
        alert('Please add title.');
        // TODO: Figure out how to add a duplicate title condition
      } else {
        createTodoItem(
          taskTitle.value,
          taskDescription.value,
          dueDate.value,
          projectList.value,
          priority.value
        );
        displayTask(
          taskTitle.value,
          taskDescription.value,
          dueDate.value,
          projectList.value,
          priority.value
        );
        newTaskDialog.close();
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
        console.log(projects);
        newProjectDialog.close();
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

  function displayTask(
    taskTitle,
    taskDescription,
    dueDate,
    projectList,
    priority
  ) {
    const todoItems = document.querySelector('#todo-items');
    const task = document.createElement('div');
    task.setAttribute('class', 'todoDiv');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('class', 'checkbox');
    checkbox.setAttribute('name', 'checkbox');

    const currentTaskTitle = document.createElement('span');
    currentTaskTitle.textContent = taskTitle;

    const currentTaskDescription = document.createElement('span');
    currentTaskDescription.textContent = taskDescription;

    const currentDueDate = document.createElement('span');
    currentDueDate.textContent = dueDate;

    const currentProjectList = document.createElement('span');
    currentProjectList.textContent = projectList;

    const currentPriority = document.createElement('span');
    currentPriority.setAttribute('class', 'dot');

    if (priority === 'low') {
      currentPriority.style.backgroundColor = 'gray';
    } else if (priority === 'medium') {
      currentPriority.style.backgroundColor = 'orange';
    } else if (priority === 'high') {
      currentPriority.style.backgroundColor = 'red';
    }

    task.appendChild(checkbox);
    task.appendChild(currentTaskTitle);
    // task.appendChild(currentTaskDescription); TODO: only when button is clicked
    task.appendChild(currentDueDate);
    task.appendChild(currentProjectList);
    task.appendChild(currentPriority);

    // TODO:
    // handle where we display each task
    // for example, if we click general, remove all tasks that do not have general as their list
    todoItems.appendChild(task);
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
