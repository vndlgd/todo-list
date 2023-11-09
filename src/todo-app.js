import './style.css';
import { createTodoItem, PRIORITIES } from './todo-item.js';
import { createTodoList } from './todo-list.js';

export const projects = []; // array that stores all todo-lists created

function printListOfProjects() {
  projects.forEach((list) => {
    console.log('TITLE: ' + list.title);
    if (list.todos[0]) {
      for (let i = 0; i < list.todos.length; i++) {
        console.log('TODO ITEM: ' + list.todos[i].title); // print all to do items in each list
      }
    } else {
      console.log('This list contains no todo items');
    }
    console.log(''); // used for seperation of lists
  });
}

// default list
// export to enter items into this list when no list is provided
export const general = createTodoList('General');

// test
const shoppingList = createTodoList('ShoppingList');
const christmasList = createTodoList('Christmas Wish List');

const item1 = createTodoItem(
  'Item1',
  'Get Soy or Oatmilk',
  'April 13 2024',
  shoppingList,
  PRIORITIES.LOW
);

const item2 = createTodoItem(
  'Item2',
  'Get Soy or Oatmilk',
  'April 13 2024',
  general,
  PRIORITIES.MEDIUM
);

const item3 = createTodoItem(
  'Item3',
  'Get Soy or Oatmilk',
  'April 13 2024',
  general,
  PRIORITIES.HIGH
);

printListOfProjects();
