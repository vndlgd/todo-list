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
    console.log(listToDelete);
    console.log(projects[i].title);
    console.log(listToDelete === projects[i].title);
    if (projects[i].title === listToDelete) {
      projects.splice(i, 1);
      console.log('we should only be calling once');
      console.log('deleted!');
    }
  }
  console.log(projects); // for debugging
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
  localStorage.setItem('projects', JSON.stringify(storageArray));
}

export function saveTaskToLocalStorage(project) {
  projects.forEach((list) => {
    if (list.title === project) {
      localStorage.setItem('todos', JSON.stringify(list.todos));
    }
  });
}

export function removeTaskFromLocalStorage(task) {
  const taskArray = JSON.parse(localStorage.getItem('todos'));
  console.log(taskArray);
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

printListOfProjects();
const display = displayController();
