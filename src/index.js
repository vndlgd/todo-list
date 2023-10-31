import { format } from 'date-fns';
import './style.css';

// Create a todo object using factories (we will create as many as user wants)
function createTodoItem(
  title = '',
  description = '',
  dueDate = Date.now(),
  priority = ''
) {
  const getTodoItemInformation = `${title} ${description} ${dueDate} ${priority}`;

  return { getTodoItemInformation };
}

// Create a todo list using factories (we will need as many as user wants)
// Name it projects?
function createTodoList(title = '') {
  const getTodoListName = `This list is called ${title}`;
  return { getTodoListName };
}

function formatDate(date) {
  return format(new Date(date), 'MMM dd yyyy');
}

// Test/Driver code below here
const groceries = createTodoItem(
  'Get Groceries',
  'Do it today',
  formatDate(Date.now()),
  'URGENT'
);

// Default project to which all of their todos are put.
// Users should be able to create new project and choose which project their todos go into
const defaultList = createTodoList('Default');

console.log(groceries.getTodoItemInformation);
console.log(defaultList.getTodoListName);
