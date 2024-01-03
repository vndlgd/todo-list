import { projectsArray } from './index';

// TODO: make sure you understand why this works
export function saveProjectToLocalStorage() {
  const storageArray = JSON.parse(localStorage.getItem('projects')) || [];
  if (storageArray.length === 0) {
    projectsArray.forEach((list) => {
      storageArray.push(list.title);
    });
    localStorage.setItem('projects', JSON.stringify(storageArray));
  } else {
    const titleArray = projectsArray.map(({ title }) => title);
    localStorage.setItem('projects', JSON.stringify(titleArray));
  }
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
  projectsArray.forEach((list) => {
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
