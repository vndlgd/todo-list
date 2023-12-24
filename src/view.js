import { createTodoList } from './todo-list';
import { createTodoItem } from './todo-item';
import {
  projects,
  deleteTodoList,
  taskNameExists,
  saveToLocalStorage,
  removeListFromLocalStorage,
} from './todo-app';
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
      while (projectList.hasChildNodes()) {
        // to avoid duplicate values and errors
        console.log(projectList.lastChild);
        projectList.removeChild(projectList.lastChild); // clear sidebar added projects
      }
      // dynamically create a drop-down list with list options
      projects.forEach((list) => {
        const option = document.createElement('option');
        option.value = list.title;
        option.text = list.title;
        projectList.appendChild(option);
      });
      dueDate.value = today;
      newTaskDialog.showModal();
    });

    newTaskDialog.addEventListener('close', (e) => {
      taskTitle.value = '';
      taskDescription.value = '';
      // reset priority to low each time
      const defaultPriority = document.querySelector('.default-priority');
      priority.value = defaultPriority.value;
    });

    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(taskTitle.value);
      // const titleArray = projects.map(({ title }) => title);
      if (taskTitle.value === '') {
        alert('Please add title.');
        // go through ALL todo titles in every list, if duplicate is found, alert user
      } else if (taskNameExists(taskTitle.value)) {
        alert('That title already exists.');
      } else {
        createTodoItem(
          taskTitle.value,
          taskDescription.value,
          dueDate.value,
          projectList.value,
          priority.value
        );
        saveToLocalStorage(projectList.value);
        // display tasks when we create new task and haven't clicked any menu items
        console.log(currentProjectHeader.firstChild.textContent);
        displayTasks(currentProjectHeader.firstChild.textContent);
        // updateProjectHeader();
        console.log(' ------ '); // for clarity in console debugging
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
        saveToLocalStorage(inputEl.value);
        displaySubmenu();
        updateProjectHeader();
        console.log(projects);
        console.log(' ------ '); // for clarity in console debugging
        newProjectDialog.close();
      }
    });

    return {};
  };

  function displaySubmenu() {
    const submenu = document.querySelectorAll('.submenu');
    submenu.forEach((item) => {
      sidebar.removeChild(item);
      console.log('deleted: ', item);
    });
    projects.forEach((project) => {
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
      console.log('added: ', newProject);
      sidebar.appendChild(container);
      updateProjectHeader();
    });
  }

  function createTask(
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

    // create clickable div to expand and show description and buttons
    const todoExpanded = document.createElement('div');
    todoExpanded.setAttribute('class', 'todo-expanded');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.setAttribute('class', 'description-container');
    descriptionContainer.appendChild(currentTaskDescription);
    todoExpanded.appendChild(descriptionContainer);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.setAttribute('class', 'buttons-container');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';
    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);
    todoExpanded.appendChild(buttonsContainer);

    const editTaskDialog = document.querySelector('#edit-task-dialog');
    const editTaskTitle = editTaskDialog.querySelector('#edit-item-title');
    const editTaskDescription = editTaskDialog.querySelector(
      '#edit-item-description'
    );
    let editPriority = editTaskDialog.querySelector('#edit-priority-level');
    const defaultPriority = document.querySelector('.default-priority');
    let editProjectList = editTaskDialog.querySelector('select');
    let editDueDue = editTaskDialog.querySelector('#edit-due-date');

    const saveTaskEdit = editTaskDialog.querySelector('.saveBtn');

    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      while (editProjectList.hasChildNodes()) {
        // to avoid duplicate values and errors
        editProjectList.removeChild(editProjectList.lastChild); // clear sidebar added projects
      }
      // dynamically create a drop-down list with list options
      projects.forEach((list) => {
        const option = document.createElement('option');
        option.value = list.title;
        option.text = list.title;
        editProjectList.appendChild(option);
      });
      editTaskTitle.value = taskTitle;
      editTaskDescription.value = taskDescription;
      editDueDue.value = dueDate;
      editProjectList.value = projectList;
      editPriority.value = priority;
      editTaskDialog.showModal();
      // call functions that edit these parameters in a pop up form
    });

    // display current values
    editTaskDialog.addEventListener('close', (e) => {});

    saveTaskEdit.addEventListener('click', (e) => {
      e.preventDefault();
      projects.forEach((list) => {
        // find list we're in
        if (currentProjectList.textContent === list.title) {
          // if list found then we look for that task
          let storedTasks = JSON.parse(localStorage.getItem(list.title));
          list.todos.forEach((task, index) => {
            // TODO: this condition should only occur if editProjectList is different than list.title
            if (currentTaskTitle.textContent === task.title) {
              // delete that task
              list.todos.splice(index, 1);
              storedTasks.splice(index, 1);
              // create new task with updated values
              createTodoItem(
                editTaskTitle.value,
                editTaskDescription.value,
                editDueDue.value,
                editProjectList.value,
                editPriority.value,
                checkbox.checked
              );
              localStorage.setItem(list.title, JSON.stringify(storedTasks));
              saveToLocalStorage(editProjectList.value);
            }
          });
        }
      });
      // render tasks again to reflect changes
      const projectHeader = document.querySelector('#project-name');
      displayTasks(projectHeader.firstChild.textContent);
      // console.log(projects); // for debugging purposes
      editTaskDialog.close();
    });

    // delete task button
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      projects.forEach((list) => {
        if (list.title === projectList) {
          let storedTasks = JSON.parse(localStorage.getItem(list.title));
          list.todos.forEach((todo, index) => {
            console.log(currentTaskTitle.textContent);
            if (currentTaskTitle.textContent === todo.title) {
              list.todos.splice(index, 1);
              // remove item selected
              storedTasks.splice(index, 1);
            }
            // after removing item, put object into storage
            localStorage.setItem(list.title, JSON.stringify(storedTasks));
            console.log('Deleted task!');
            console.log(projects); // for debugging
          });
        }
      });
      taskContainer.removeChild(task);
    });

    // Prevent checkbox click from triggering the expand/collapse
    checkbox.addEventListener('click', (e) => {
      e.stopPropagation(); // stop the click event from propagating to the parent
      // or else it will reset every time you create a new task
      if (checkbox.checked) {
        projects.forEach((list) => {
          list.todos.forEach((task) => {
            if (task.title === currentTaskTitle.textContent) {
              task.completed = true;
              saveToLocalStorage(list.title);
              currentTaskTitle.classList.add('completed');
              currentTaskDescription.classList.add('completed');
              currentDueDate.classList.add('completed');
              currentProjectList.classList.add('completed');
            }
          });
        });
      } else {
        projects.forEach((list) => {
          list.todos.forEach((task) => {
            if (task.title === currentTaskTitle.textContent) {
              task.completed = false;
              saveToLocalStorage(list.title);
              currentTaskTitle.classList.remove('completed');
              currentTaskDescription.classList.remove('completed');
              currentDueDate.classList.remove('completed');
              currentProjectList.classList.remove('completed');
            }
          });
        });
      }
      console.log(projects);
    });

    // expand and hide task description and buttons on click
    task.addEventListener('click', (e) => {
      e.preventDefault();
      if (task.contains(todoExpanded)) {
        task.removeChild(task.lastChild);
      } else {
        task.appendChild(todoExpanded);
      }
    });

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

  function displayTasks(menuOption) {
    const taskContainer = document.querySelector('#taskContainer');

    // clear taskContainer list to display updated task list for chosen todo list
    while (taskContainer.hasChildNodes()) {
      taskContainer.removeChild(taskContainer.firstChild);
    }

    const sevenDaysFromNow = format(addWeeks(new Date(), 1), 'yyyy-MM-dd');

    projects.forEach((list) => {
      list.todos.forEach((todo) => {
        if (menuOption === 'All Tasks') {
          createTask(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.todoList,
            todo.priority,
            todo.completed
          );
        } else if (menuOption === 'Today') {
          if (todo.dueDate === today) {
            createTask(
              todo.title,
              todo.description,
              todo.dueDate,
              todo.todoList,
              todo.priority,
              todo.completed
            );
          }
          // find way to find within a range
        } else if (menuOption === 'Next 7 Days') {
          if (todo.dueDate >= today && todo.dueDate <= sevenDaysFromNow) {
            createTask(
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
            createTask(
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
  const updateProjectHeader = function () {
    // const currentProjectHeader = document.querySelector('#project-name');
    const buttons = document.querySelectorAll('.menu > .btn, .submenu > .btn');
    const buttonDivs = document.querySelectorAll('.submenu');

    const showButton = document.createElement('button');
    showButton.setAttribute('id', 'projectDeleteBtn');
    showButton.textContent = 'X';

    const deleteListDialog = document.getElementById('delete-list-dialog');
    const deleteBtn = deleteListDialog.querySelector('#deleteBtn');

    // add delete button to each new list we create
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        // change project header to whatever list we click
        currentProjectHeader.textContent = e.target.value;
        console.log(btn.value);
        // if has submenu class and is not general
        // add delete list button next to header
        if (
          e.target.classList.contains('btn') &&
          e.target.value !== 'General' &&
          e.target.value !== 'Next 7 Days' &&
          e.target.value !== 'Today' &&
          e.target.value !== 'All Tasks'
        ) {
          currentProjectHeader.appendChild(showButton);
        }
        displayTasks(btn.value); // display tasks of list we choose
      });
    });

    // show modal to delete list
    showButton.addEventListener('click', (e) => {
      e.preventDefault();
      deleteListDialog.showModal();
    });

    console.log(buttonDivs);
    // delete list in UI and in projects array
    buttonDivs.forEach((div) => {
      deleteBtn.addEventListener('click', (e) => {
        if (currentProjectHeader.firstChild.textContent === div.id) {
          console.log('Deleting:', div.id);
          // if i make 3 lists, and delete the 3rd one, then the 2nd, the 2nd wont delete
          // in the UI
          removeListFromLocalStorage(
            currentProjectHeader.firstChild.textContent
          );
          deleteTodoList(currentProjectHeader.firstChild.textContent);
          displaySubmenu();
          currentProjectHeader.textContent = 'All Tasks';
          displayTasks('All Tasks');
          deleteListDialog.close();
        }
      });
    });
  };

  function crossOutCompletedTask() {
    const todoTask = document.querySelectorAll('');
  }

  newProjectModal();
  newTaskModal();
  displaySubmenu();
  updateProjectHeader();

  // TODO: order of localStorage get scrambled
  window.addEventListener('load', (e) => {
    for (let i = 0; i < localStorage.length; i++) {
      // console.log(localStorage.key(i));
      // createTodoList(localStorage.key(i));
      // displaySubmenu();
    }
    // for (let i = 0; i < localStorage.length; i++) {
    //   console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    // }
    // displayTasks('All Tasks');
  });

  return {};
}
