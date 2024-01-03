import './style.css';
import { createTodo, PRIORITIES } from './create-todo.js';
import { createProject } from './create-project.js';
import { displayController } from './view.js';
import { saveProjectToLocalStorage } from './localStorage.js';

export const projectsArray = []; // stores all todo-lists created and its todo items

export function deleteTodoList(listToDelete) {
  const todoListIndex = projectsArray.findIndex(
    (list) => list.title === listToDelete
  );
  projectsArray.splice(todoListIndex, 1);
}

// boolean function to check if todo item name already exists or not
export function todoNameExists(taskName) {
  let exists = false;
  projectsArray.forEach((list) => {
    list.todos.forEach((task) => {
      if (task.title === taskName) {
        exists = true;
      }
    });
  });
  return exists;
}

// default list
// export to enter items into this list when user has not made any lists
export const general = createProject('General');
// saveProjectToLocalStorage(); // save General to local storage upon refresh

const controller = displayController();
controller.renderSubmenu(); // render general list on first land

// isolating event listeners
let clickEventsModule = (function () {
  // new task modal
  const taskModal = controller.newTaskModal();

  const openTaskModalButton = document.getElementById('add-task-button');
  openTaskModalButton.addEventListener('click', (e) => {
    taskModal.openTaskDialog();
  });

  const newTaskDialog = document.getElementById('new-task-dialog');
  newTaskDialog.addEventListener('close', (e) => {
    taskModal.closeTaskDialog();
  });

  const saveTask = newTaskDialog.querySelector('.saveBtn');

  const currentProjectHeader = document.querySelector('#project-name');
  saveTask.addEventListener('click', (e) => {
    taskModal.saveTask(); // save task
    controller.renderPage(currentProjectHeader.firstChild.textContent); // rerender tasks on page
  });

  // new project modal
  const projectModal = controller.newProjectModal();
  const openNewProjectModal = document.getElementById('add-project-button');
  openNewProjectModal.addEventListener('click', (e) => {
    projectModal.openProjectModal();
  });

  const newProjectDialog = document.getElementById('new-project-dialog');
  newProjectDialog.addEventListener('close', (e) => {
    projectModal.clearInputField();
  });

  const saveProject = newProjectDialog.querySelector('.saveBtn');
  saveProject.addEventListener('click', (e) => {
    projectModal.saveProject();
  });

  // render page upon click
  const sidebar = document.querySelector('#sidebar');
  sidebar.addEventListener('click', (e) => {
    // For future reference, do NOT use === to find a classname, use contains!
    // because if a classname is not exactly btn, it won't find it
    // this approach is much better than attaching a bunch of event listeners
    if (e.target.classList.contains('btn')) {
      controller.updateProjectHeader(e);
      controller.renderPage(e.target.value);
    }
  });

  // expand task div
  const mainContent = document.querySelector('#main-content');
  mainContent.addEventListener('click', (e) => {
    // console.log(e.target);
    // console.log(e.target.parentNode);
    // check if clicked element is inside of todo div
    let target = e.target;
    if (e.target.classList.contains('todo')) {
      const taskTitle = target.children[1].textContent;
      const taskProject = target.children[3].textContent;
      controller.expandTaskDiv(target, taskTitle, taskProject);
    } else if (
      e.target.parentNode.classList.contains('todo') &&
      !e.target.classList.contains('task-checkbox')
    ) {
      target = e.target.parentNode;
      const taskTitle = target.children[1].textContent;
      const taskProject = target.children[3].textContent;
      controller.expandTaskDiv(target, taskTitle, taskProject);
    } else if (e.target.parentNode.parentNode.classList.contains('todo')) {
      target = e.target.parentNode.parentNode;
      const taskTitle = target.children[1].textContent;
      const taskProject = target.children[3].textContent;
      controller.expandTaskDiv(target, taskTitle, taskProject);
    }
  });

  // toggle task completion throught checkbox
  mainContent.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('task-checkbox')) {
      console.log(e.target.checked);
      controller.toggleTaskCompletion(
        e.target.parentNode.children[1].textContent,
        e.target.checked
      );
      controller.renderPage(currentProjectHeader.firstChild.textContent);
    }
  });

  // edit task
  const editTask = controller.editTaskModal();
  let taskTitle = '';
  let taskProject = '';
  mainContent.addEventListener('click', (e) => {
    if (e.target.classList.contains('editBtn')) {
      // write code here
      taskTitle =
        e.target.parentNode.parentNode.parentNode.children[1].textContent;
      taskProject =
        e.target.parentNode.parentNode.parentNode.children[3].textContent;
      editTask.openEditTaskModal(taskTitle, taskProject);
    }
  });

  const editTaskDialog = document.querySelector('#edit-task-dialog');
  const saveTaskEditButton = editTaskDialog.querySelector('.saveBtn');
  saveTaskEditButton.addEventListener('click', (e) => {
    e.preventDefault();
    editTask.saveTaskEdit(taskTitle, taskProject);
    controller.renderPage(currentProjectHeader.firstChild.textContent);
  });

  // delete task
  mainContent.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
      const taskTitle =
        e.target.parentNode.parentNode.parentNode.children[1].textContent;
      const taskProject =
        e.target.parentNode.parentNode.parentNode.children[3].textContent;
      controller.deleteTask(taskTitle, taskProject);
      controller.renderPage(currentProjectHeader.firstChild.textContent);
    }
  });

  // delete project
  const deleteProjectModal = controller.deleteProjectModal();
  mainContent.addEventListener('click', (e) => {
    if (e.target.id === 'projectDeleteBtn') {
      deleteProjectModal.openDeleteProjectModal();
    }
  });

  const deleteListDialog = document.getElementById('delete-list-dialog');
  mainContent.addEventListener('click', (e) => {
    if (e.target.id === 'deleteBtn') {
      deleteProjectModal.deleteProject(
        currentProjectHeader.firstChild.textContent
      );
    }
  });

  // render all saved tasks in local storage on page load/refresh
  window.addEventListener('load', (e) => {
    // load lists
    if (localStorage.getItem('projects') !== null) {
      const projectStorage = JSON.parse(localStorage.getItem('projects'));
      for (let i = 0; i < projectStorage.length; i++) {
        if (projectStorage[i] !== 'General') {
          createProject(projectStorage[i]);
        }
      }
    }
    controller.renderSubmenu();

    // load all tasks
    if (localStorage.getItem('todos') !== null) {
      const todoStorage = JSON.parse(localStorage.getItem('todos'));
      for (let i = 0; i < todoStorage.length; i++) {
        createTodo(
          todoStorage[i].title,
          todoStorage[i].description,
          todoStorage[i].dueDate,
          todoStorage[i].todoList,
          todoStorage[i].priority,
          todoStorage[i].completed
        );
      }
    }
    controller.renderPage('All Tasks');
  });
})();
