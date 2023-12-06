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

  return { todoListData, updateTodoListName };
}
