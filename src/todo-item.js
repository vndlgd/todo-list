import { format } from 'date-fns';
import { projects } from './todo-app';
import { todoListData, addTodoItem } from './todo-list';

// Create a todo object using factories (we will create as many as user wants)
export function createTodoItem(
  title = '',
  description = '',
  dueDate = Date.now(),
  todoList = projects[0].title, // if you don't specify which list, it goes into general
  priority = PRIORITIES.LOW,
  completed = false
  // consider adding a checkbox = false to keep track of completion of task
) {
  const todoItemData = {
    title,
    description,
    dueDate,
    todoList,
    priority,
    completed,
  };

  // push todoItemData into the corresponding todoList todos array
  projects.forEach((list) => {
    if (list.title === todoItemData.todoList) {
      list.todos.push(todoItemData);
      console.log(projects); // for debugging
    }
  });

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

  function updateCompletion(newStatus) {
    completed = newStatus;
  }

  return {
    todoItemData,
    updateTitle,
    updateDescription,
    updateDueDate,
    updateTodoList,
    updatePriority,
    updateCompletion,
  };
}

// Enum for priority/urgency level
export const PRIORITIES = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
};
