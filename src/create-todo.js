import { format } from 'date-fns';
import { projectsArray } from './index';
import { todoListData, addTodoItem } from './create-project';

// Create a todo object using factories (we will create as many as user wants)
export function createTodo(
  title = '',
  description = '',
  dueDate = Date.now(),
  todoList, // TODO: change this so that it goes into whatever page the user is currently on
  priority = PRIORITIES.MEDIUM,
  completed = false
) {
  const todoData = {
    title,
    description,
    dueDate,
    todoList,
    priority,
    completed,
  };

  // When todo item is created, add to projects array in corresponding project
  const projectContainingTask = projectsArray.find(
    (list) => todoList === list.title
  );
  projectContainingTask.todos.push(todoData);

  return {
    todoItemData: todoData,
  };
}

// Enum for priority/urgency level
export const PRIORITIES = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
};
