import { format } from 'date-fns';
import { projects, general } from './todo-app';
import { addTodoItem } from './todo-list';

// Create a todo object using factories (we will create as many as user wants)
export function createTodoItem(
  title = '',
  description = '',
  dueDate = Date.now(),
  todoList = general, // if you don't specify which list, it goes into general
  priority = PRIORITIES.LOW
  // consider adding a checkbox = false to keep track of completion of task
) {
  const todoItemData = {
    title,
    description,
    dueDate,
    todoList,
    priority,
  };

  // push todoItemData into the corresponding todoList todos array
  todoList.addTodoItem(todoItemData);

  // functions to update each attribute
  function updateTitle(newTitle) {
    title = newTitle;
  }

  function updateDescription(newDescription) {
    description = newDescription;
  }

  function updateDueDate(newDueDate) {
    dueDate = newDueDate;
  }

  function updateTodoList(newLocation) {
    todoList = newLocation;
  }

  function updatePriority(newPriority) {
    priority = newPriority;
  }

  return {
    todoItemData,
    updateTitle,
    updateDescription,
    updateDueDate,
    updateTodoList,
    updatePriority,
  };
}

// Enum for priority/urgency level
export const PRIORITIES = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
};
