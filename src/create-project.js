import { projectsArray } from './index';

// Create a todo list using factory functions (we will need to create multiple todo lists)
export function createProject(title) {
  const todoListData = {
    title,
    todos: [],
  };

  projectsArray.push(todoListData);

  return { todoListData };
}
