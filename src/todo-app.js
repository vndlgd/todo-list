import './style.css';
import { createTodoItem, PRIORITIES } from './todo-item.js';
import { createTodoList } from './todo-list.js';
import { displayController } from './view.js';

export const projects = []; // stores all todo-lists created

function printListOfProjects() {
  projects.forEach((list) => {
    console.log('TITLE: ' + list.title);
    if (list.todos[0]) {
      for (let i = 0; i < list.todos.length; i++) {
        console.log(
          'TODO ITEM: ' +
            list.todos[i].title +
            '\nCOMPLETED: ' +
            list.todos[i].completed
        ); // print all to do items in each list
      }
    } else {
      console.log('This list contains no todo items');
    }
    console.log(''); // used for seperation of lists
  });
}

export function deleteTodoList(listToDelete) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].title === listToDelete) {
      projects.splice(i, 1);
    }
  }
}

export function taskNameExists(taskName) {
  let exists = false;
  projects.forEach((list) => {
    list.todos.forEach((task) => {
      if (task.title === taskName) {
        exists = true;
      }
    });
  });
  return exists;
}

// TODO: might only need two functions if project array value already contains todos as part of object

export function saveProjectToLocalStorage() {
  const storageArray = [];
  projects.forEach((list) => {
    storageArray.push(list.title);
  });
  localStorage.setItem('projects', JSON.stringify(storageArray));
}

export function removeProjectFromLocalStorage(project) {
  const storageArray = JSON.parse(localStorage.getItem('projects'));
  storageArray.forEach((list, index) => {
    if (list === project) {
      storageArray.splice(index, 1);
    }
  });
  const taskArray = JSON.parse(localStorage.getItem('todos'));
  const filteredTaskArray = taskArray.filter(
    (task) => task.todoList !== project
  );
  localStorage.setItem('projects', JSON.stringify(storageArray));
  localStorage.setItem('todos', JSON.stringify(filteredTaskArray));
}

export function saveTaskToLocalStorage() {
  const taskArray = [];
  projects.forEach((list) => {
    list.todos.forEach((task) => {
      taskArray.push(task);
    });
  });
  localStorage.setItem('todos', JSON.stringify(taskArray));
}

export function removeTaskFromLocalStorage(task) {
  const taskArray = JSON.parse(localStorage.getItem('todos'));
  for (let i = 0; i < taskArray.length; i++) {
    if (taskArray[i].title === task) {
      taskArray.splice(i, 1);
    }
  }
  localStorage.setItem('todos', JSON.stringify(taskArray));
}

export function loadProjectsFromLocalStorage() {}

export function loadTodosFromLocalStorage() {}

// default list
// export to enter items into this list when no list is provided
export const general = createTodoList('General');

const display = displayController();
