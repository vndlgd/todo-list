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

// default list
// export to enter items into this list when no list is provided
export const general = createTodoList('General');

// test
// const shoppingList = createTodoList('ShoppingList');
// const christmasList = createTodoList('Christmas Wish List');

// const item1 = createTodoItem(
//   'Buy Milk',
//   'Get Soy or Oatmilk',
//   'April 13 2024',
//   shoppingList,
//   PRIORITIES.LOW
// );

// const item2 = createTodoItem(
//   'Buy Shoes',
//   'Store closes at 10 PM',
//   'April 13 2024',
//   general,
//   PRIORITIES.MEDIUM,
//   false
// );

// const item3 = createTodoItem(
//   'Buy a new hat',
//   'Store closed on weekends',
//   'April 13 2024',
//   general,
//   PRIORITIES.HIGH,
//   true
// );

printListOfProjects();
const display = displayController();
