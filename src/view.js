import { createTodoList } from './todo-list';
import { createTodoItem } from './todo-item';
import { projects, deleteTodoList } from './todo-app';
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
      // TODO: this while loop may be causing errors...
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
      const defaultPriority = document.querySelector('#default-priority');
      priority.value = defaultPriority.value;
    });

    saveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const titleArray = projects.map(({ title }) => title);
      if (taskTitle.value === '') {
        alert('Please add title.');
        // TODO: Figure out how to add a duplicate title condition
        // go through ALL todo titles in every list, if duplicate is found, alert user
      } else {
        console.log(currentProjectHeader.textContent);
        createTodoItem(
          taskTitle.value,
          taskDescription.value,
          dueDate.value,
          projectList.value,
          priority.value
        );
        // display tasks when we create new task and haven't clicked any menu items
        displayTasks(currentProjectHeader.textContent);
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
    // // TODO: clear everything except general
    // for (let i = 0; i < projects.length - 1; i++) {
    //   // to avoid duplicate values and errors
    //   console.log('i was just called');
    //   console.log(sidebar.lastChild);
    //   sidebar.removeChild(sidebar.lastChild); // clear sidebar added projects
    // }
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
    priority
  ) {
    const todoItems = document.querySelector('#todo-items');
    const taskContainer = document.querySelector('#taskContainer');
    const task = document.createElement('div');
    task.setAttribute('class', 'todo');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.name = 'task-checkbox';
    checkbox.setAttribute('class', 'task-checkbox');

    checkbox.addEventListener('click', (e) => {
      checkbox.checked = true;
    });

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

    // TODO: finish this function
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('this button should open menu to edit task info');
      // call functions that edit these parameters in a pop up form
    });

    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      projects.forEach((list) => {
        if (list.title === projectList) {
          list.todos.forEach((todo, index) => {
            list.todos.splice(index, 1);
            console.log('Deleted task!');
            console.log(projects); // for debugging
          });
        }
      });
      taskContainer.removeChild(task);
    });

    task.addEventListener('click', (e) => {
      e.preventDefault();
      if (task.contains(todoExpanded)) {
        task.removeChild(task.lastChild);
      } else {
        task.appendChild(todoExpanded);
      }
    });

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
            todo.priority
          );
        } else if (menuOption === 'Today') {
          if (todo.dueDate === today) {
            createTask(
              todo.title,
              todo.description,
              todo.dueDate,
              todo.todoList,
              todo.priority
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
              todo.priority
            );
          }
        } else {
          if (menuOption === todo.todoList) {
            createTask(
              todo.title,
              todo.description,
              todo.dueDate,
              todo.todoList,
              todo.priority
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
          deleteTodoList(currentProjectHeader.firstChild.textContent);
          displaySubmenu();
          currentProjectHeader.textContent = 'All Tasks';
          displayTasks('All Tasks');
          deleteListDialog.close();
        }
      });
    });
  };

  newProjectModal();
  newTaskModal();
  displaySubmenu();
  // updateProjectHeader();

  return {};
}
