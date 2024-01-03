import { createProject } from './create-project';
import { createTodo } from './create-todo';
import { projectsArray, deleteTodoList, todoNameExists } from './index';
import {
  saveProjectToLocalStorage,
  removeProjectFromLocalStorage,
  saveTaskToLocalStorage,
  removeTaskFromLocalStorage,
} from './localStorage';
import { format, addWeeks } from 'date-fns';
import Icon from './icon.png';

const sidebar = document.getElementById('sidebar');
const today = format(new Date(), 'yyyy-MM-dd');

const currentProjectHeader = document.querySelector('#project-name');
const initialValue = document.getElementById('initial-value');

// Initialize to 'All Tasks' on refresh
currentProjectHeader.textContent = initialValue.value;

// DisplayController factory function here
export function displayController() {
  // open and close task modal
  function newTaskModal() {
    const showButton = document.getElementById('add-task-button');
    const newTaskDialog = document.getElementById('new-task-dialog');
    const saveBtn = newTaskDialog.querySelector('.saveBtn');
    const inputEl = newTaskDialog.querySelector('input');

    const taskTitle = newTaskDialog.querySelector('#item-title');
    const taskDescription = newTaskDialog.querySelector('#item-description');
    const dueDate = newTaskDialog.querySelector('#due-date');
    const projectList = newTaskDialog.querySelector('select');
    const priority = newTaskDialog.querySelector('#priority-level');

    function openTaskDialog() {
      while (projectList.hasChildNodes()) {
        // to avoid duplicate values and errors
        projectList.removeChild(projectList.lastChild); // clear sidebar added projects
      }
      // dynamically create a drop-down list with list options
      projectsArray.forEach((list) => {
        const option = document.createElement('option');
        option.value = list.title;
        option.text = list.title;
        // automatically choose list we're in depending on page selected
        if (option.value === currentProjectHeader.firstChild.textContent) {
          option.selected = true;
        }
        projectList.appendChild(option);
      });

      // loop through all projects
      // if currentProjectHeader.textContent is in the list of projects
      // set projectList.value = to it
      dueDate.value = today;
      newTaskDialog.showModal();
    }

    function closeTaskDialog() {
      taskTitle.value = '';
      taskDescription.value = '';
      // reset priority to low each time
    }

    function saveTask() {
      // const titleArray = projects.map(({ title }) => title);
      if (taskTitle.value === '') {
        alert('Please add title.');
        // go through ALL todo titles in every list, if duplicate is found, alert user
      } else if (todoNameExists(taskTitle.value)) {
        alert('That title already exists.');
      } else {
        createTodo(
          taskTitle.value,
          taskDescription.value,
          dueDate.value,
          projectList.value,
          priority.value
        );
        saveTaskToLocalStorage();
        // display tasks when we create new task and haven't clicked any menu items
        // updateProjectHeader();
        renderPage(projectList.value);
        newTaskDialog.close();
      }
    }

    return { openTaskDialog, closeTaskDialog, saveTask };
  }

  // open and close project modal
  function newProjectModal() {
    const showButton = document.getElementById('add-project-button');
    const newProjectDialog = document.getElementById('new-project-dialog');
    const saveBtn = newProjectDialog.querySelector('.saveBtn');
    const inputEl = newProjectDialog.querySelector('input');

    // Show dialog button opens <dialog> modally
    function openProjectModal() {
      newProjectDialog.showModal();
    }

    function clearInputField() {
      inputEl.value = '';
    }

    // add projects to submenu
    // TODO: find way to not have modal close if invalid input, remain open
    function saveProject() {
      const titleArray = projectsArray.map(({ title }) => title);
      if (inputEl.value === '') {
        alert('Please add title.');
      } else if (titleArray.includes(inputEl.value)) {
        alert('That title already exists.');
      } else {
        createProject(inputEl.value);
        saveProjectToLocalStorage();
        renderSubmenu();
        // updateProjectHeader();
        console.log(projectsArray);
        console.log(localStorage);
        newProjectDialog.close();
      }
    }
    return { openProjectModal, clearInputField, saveProject };
  }

  function deleteProjectModal() {
    const deleteListDialog = document.getElementById('delete-list-dialog');

    // show modal to delete list
    function openDeleteProjectModal() {
      deleteListDialog.showModal();
    }

    // delete list from projects array
    function deleteProject(project) {
      projectsArray.forEach((list) => {
        if (list.title === project) {
          removeProjectFromLocalStorage(project);
          deleteTodoList(project);
          renderSubmenu();
          currentProjectHeader.textContent = 'All Tasks';
          renderPage('All Tasks');
          deleteListDialog.close();
        }
      });
    }

    return { openDeleteProjectModal, deleteProject };
  }

  function expandTaskDiv(task, taskTitle, taskProject) {
    // create clickable div to expand and show description and buttons
    const todoExpanded = document.createElement('div');
    todoExpanded.setAttribute('class', 'todo-expanded');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.setAttribute('class', 'description-container');
    // loop throught taskProject and find taskTitle and get description
    projectsArray.forEach((list) => {
      if (list.title === taskProject) {
        list.todos.forEach((task) => {
          if (task.title === taskTitle) {
            descriptionContainer.textContent = task.description;
          }
        });
      }
    });

    todoExpanded.appendChild(descriptionContainer);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.setAttribute('class', 'buttons-container');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';
    editBtn.setAttribute('class', 'editBtn');
    deleteBtn.setAttribute('class', 'deleteBtn');
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);
    todoExpanded.appendChild(buttonsContainer);

    if (task.lastChild.classList.contains('todo-expanded')) {
      task.removeChild(task.lastChild);
    } else {
      task.appendChild(todoExpanded);
    }
  }

  function editTaskModal() {
    const editTaskDialog = document.querySelector('#edit-task-dialog');
    const editTaskTitle = editTaskDialog.querySelector('#edit-item-title');
    const editTaskDescription = editTaskDialog.querySelector(
      '#edit-item-description'
    );
    let editDueDue = editTaskDialog.querySelector('#edit-due-date');
    let editProjectList = editTaskDialog.querySelector('select');
    let editPriority = editTaskDialog.querySelector('#edit-priority-level');

    function openEditTaskModal(taskTitle, taskProject) {
      while (editProjectList.hasChildNodes()) {
        // to avoid duplicate values and errors
        editProjectList.removeChild(editProjectList.lastChild);
      }
      // dynamically create a drop-down list with list options
      projectsArray.forEach((list) => {
        if (list.title === taskProject) {
          list.todos.forEach((task) => {
            if (task.title === taskTitle) {
              editTaskTitle.value = task.title;
              editTaskDescription.value = task.description;
              editDueDue.value = task.dueDate;
              editProjectList.value = task.todoList;
              editPriority.value = task.priority;
            }
          });
        }
      });

      // create select options
      projectsArray.forEach((list) => {
        const option = document.createElement('option');
        option.value = list.title;
        option.text = list.title;
        // select list it was already in
        if (list.title === taskProject) {
          option.selected = true;
        }
        editProjectList.appendChild(option);
      });
      editTaskDialog.showModal();
    }

    function saveTaskEdit(taskTitle, taskProject) {
      projectsArray.forEach((list) => {
        // find task by searching all lists first
        if (list.title === taskProject) {
          // if list found
          list.todos.forEach((task, index) => {
            // if task found
            if (task.title === taskTitle) {
              // check if we're changing lists or staying in same list
              if (task.todoList === editProjectList.value) {
                task.title = editTaskTitle.value;
                task.description = editTaskDescription.value;
                task.dueDate = editDueDue.value;
                task.priority = editPriority.value;
              } else {
                // delete task in old list
                list.todos.splice(index, 1);
                // add task to new list
                createTodo(
                  editTaskTitle.value,
                  editTaskDescription.value,
                  editDueDue.value,
                  editProjectList.value,
                  editPriority.value
                );
              }
            }
          });
        }
      });
      saveTaskToLocalStorage();
      console.log(projectsArray);
      // render tasks again to reflect changes
      editTaskDialog.close();
    }

    return { openEditTaskModal, saveTaskEdit };
  }

  function deleteTask(taskTitle, projectList) {
    // delete task button
    projectsArray.forEach((list) => {
      if (list.title === projectList) {
        let storedTasks = JSON.parse(localStorage.getItem('todos'));
        list.todos.forEach((todo, index) => {
          if (todo.title === taskTitle) {
            list.todos.splice(index, 1);
            // remove item selected
            removeTaskFromLocalStorage(todo.title);
          }
        });
      }
    });
  }

  function renderTask(
    taskTitle,
    taskDescription,
    dueDate,
    projectList,
    priority,
    finished
  ) {
    const todoItems = document.querySelector('#todo-items');
    const taskContainer = document.querySelector('#taskContainer');
    const task = document.createElement('div');
    task.setAttribute('class', 'todo');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'task-checkbox';
    checkbox.setAttribute('class', 'task-checkbox');
    // use checkbox.checked for values of true and false

    const currentTaskTitle = document.createElement('span');
    currentTaskTitle.setAttribute('class', 'taskTitle');
    currentTaskTitle.textContent = taskTitle;

    const currentTaskDescription = document.createElement('span');
    currentTaskDescription.textContent = taskDescription;
    currentTaskDescription.setAttribute('class', 'taskDescription');

    const currentDueDate = document.createElement('span');
    currentDueDate.textContent = dueDate;
    currentDueDate.setAttribute('class', 'dueDate');

    const currentProjectList = document.createElement('span');
    currentProjectList.textContent = projectList;
    currentProjectList.setAttribute('class', 'projectList');

    const currentPriority = document.createElement('span');
    currentPriority.setAttribute('class', 'dot');

    if (priority === 'low') {
      currentPriority.style.backgroundColor = 'gray';
      currentPriority.setAttribute('value', 'low');
    } else if (priority === 'medium') {
      currentPriority.style.backgroundColor = 'orange';
      currentPriority.setAttribute('value', 'medium');
    } else if (priority === 'high') {
      currentPriority.style.backgroundColor = 'red';
      currentPriority.setAttribute('value', 'high');
    }

    if (finished) {
      checkbox.checked = true;
      currentTaskTitle.classList.add('completed');
      currentTaskDescription.classList.add('completed');
      currentDueDate.classList.add('completed');
      currentProjectList.classList.add('completed');
    } else {
      checkbox.checked = false;
      currentTaskTitle.classList.remove('completed');
      currentTaskDescription.classList.remove('completed');
      currentDueDate.classList.remove('completed');
      currentProjectList.classList.remove('completed');
    }

    task.appendChild(checkbox);
    task.appendChild(currentTaskTitle);
    task.appendChild(currentDueDate);
    task.appendChild(currentProjectList);
    task.appendChild(currentPriority);

    taskContainer.appendChild(task);
  }

  function toggleTaskCompletion(taskTitle, completed) {
    if (completed) {
      projectsArray.forEach((list) => {
        list.todos.forEach((task) => {
          if (task.title === taskTitle) {
            task.completed = true;
            saveTaskToLocalStorage();
          }
        });
      });
    } else {
      projectsArray.forEach((list) => {
        list.todos.forEach((task) => {
          if (task.title === taskTitle) {
            task.completed = false;
            saveTaskToLocalStorage();
          }
        });
      });
    }
  }

  function renderSubmenu() {
    const submenu = document.querySelectorAll('.submenu');
    submenu.forEach((item) => {
      sidebar.removeChild(item);
    });
    projectsArray.forEach((project) => {
      const container = document.createElement('div');
      const newProject = document.createElement('button');
      const image = document.createElement('img');
      image.src = Icon;
      container.setAttribute('class', 'submenu');
      container.setAttribute('id', project.title);
      newProject.setAttribute('class', 'btn');
      newProject.setAttribute('value', project.title);
      newProject.textContent = project.title;

      if (project.title !== 'General') {
        newProject.classList.add('new');
      }

      container.appendChild(image);
      container.appendChild(newProject);
      sidebar.appendChild(container);
    });
  }

  function renderPage(menuOption) {
    // render all tasks within that project
    const taskContainer = document.querySelector('#taskContainer');

    // clear taskContainer list to display updated task list for chosen todo list
    while (taskContainer.hasChildNodes()) {
      taskContainer.removeChild(taskContainer.firstChild);
    }

    const sevenDaysFromNow = format(addWeeks(new Date(), 1), 'yyyy-MM-dd');

    projectsArray.forEach((list) => {
      list.todos.forEach((todo) => {
        if (menuOption === 'All Tasks') {
          renderTask(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.todoList,
            todo.priority,
            todo.completed
          );
        } else if (menuOption === 'Today') {
          if (todo.dueDate === today) {
            renderTask(
              todo.title,
              todo.description,
              todo.dueDate,
              todo.todoList,
              todo.priority,
              todo.completed
            );
          }
        } else if (menuOption === 'Next 7 Days') {
          if (todo.dueDate >= today && todo.dueDate <= sevenDaysFromNow) {
            renderTask(
              todo.title,
              todo.description,
              todo.dueDate,
              todo.todoList,
              todo.priority,
              todo.completed
            );
          }
        } else {
          if (menuOption === todo.todoList) {
            renderTask(
              todo.title,
              todo.description,
              todo.dueDate,
              todo.todoList,
              todo.priority,
              todo.completed
            );
          }
        }
      });
    });
  }

  // handle updating project header text on click
  function updateProjectHeader(e) {
    // const buttonDivs = document.querySelectorAll('.submenu');

    // create delete button to attach to project header
    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.setAttribute('id', 'projectDeleteBtn');
    deleteProjectButton.textContent = 'X';

    // add delete button to each new list we create
    // buttons.forEach((btn) => {
    //   btn.addEventListener('click', (e) => {
    // change project header to whatever list we click
    currentProjectHeader.textContent = e.target.value;
    // if has submenu class and is not general
    // add delete list button next to header
    if (
      e.target.classList.contains('btn') &&
      e.target.value !== 'General' &&
      e.target.value !== 'Next 7 Days' &&
      e.target.value !== 'Today' &&
      e.target.value !== 'All Tasks'
    ) {
      currentProjectHeader.appendChild(deleteProjectButton);
    }
  }

  return {
    newTaskModal,
    newProjectModal,
    renderPage,
    renderSubmenu,
    renderTask,
    updateProjectHeader,
    expandTaskDiv,
    toggleTaskCompletion,
    deleteTask,
    deleteProjectModal,
    editTaskModal,
  };
}
