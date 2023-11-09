import { projects } from './todo-app';

// Create a todo list using factory functions (we will need to create multiple todo lists)
export function createTodoList(title) {
  const todoListData = {
    title,
    todos: [],
  };

  projects.push(todoListData);

  function updateTodoListName(newTitle) {
    todoListData.title = newTitle;
  }

  function findItem(title) {
    todoListData.todos.forEach((item, index) => {
      if (item.title === title) {
        return index;
      } else {
        return false;
      }
    });
  }

  function addTodoItem(todoItem) {
    if (findItem(todoListData.title) === false) {
      console.log('Error. This item is already included.');
    } else {
      todoListData.todos.push(todoItem);
    }
  }

  function deleteTodoItem(todoItem) {
    const itemSearched = findItem(todoListData.title); // itemSearched returns index
    if (itemSearched === false) {
      console.log('Error. This item is not found.');
    } else {
      todoListData.todos.splice(itemSearched, 1);
    }
  }

  return { todoListData, updateTodoListName, addTodoItem, deleteTodoItem };
}
