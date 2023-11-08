import { format } from 'date-fns';

// Create a todo object using factories (we will create as many as user wants)
export function TodoItem(
  title = '',
  description = '',
  dueDate = Date.now(),
  todoList = 'General',
  priority = PRIORITIES.LOW
) {
  // initialize todo item with values
  function createTodoItem() {
    updateItemTitle();
    updateItemDescription();
    updateDueDate();
    updateTodoList();
    updatePriority();
    getTodoItemInformation(); // after creating, display item in console;
  }

  function getTodoItemInformation() {
    console.log(
      `Title: ${title}\nDescription: ${description}\nDue Date: ${dueDate}\nProject: ${todoList}\nPriority: ${priority}\n`
    );
  }

  function updateItemTitle() {
    title = prompt('Add title: ');
    while (title === '') {
      title = prompt('Please add title: ');
    }
  }

  function updateItemDescription() {
    description = prompt('Add description');
  }

  function updateDueDate() {
    // possibly include regex to avoid invalid formatting or values
    // or worry about this until you get to UI implementation
    const dateRegex = '/^[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}$/';
    dueDate = format(new Date(prompt('Due Date (MM/DD/YYYY): ')), 'MM/dd/yy');
    if (dueDate === '') {
      dueDate = Date.now();
    }
    // while (dataRegex.test(dueDate) === false) {
    //   dueDate = prompt('Due Date (MM/DD/YYYY): ');
    // }
  }

  function updateTodoList() {
    todoList = prompt('Add to project: ');
  }

  function updatePriority() {
    let choice = prompt(
      'Choose a priority number (1-3): 1.LOW, 2.MEDIUM, 3.HIGH'
    );
    if (choice === '1') {
      priority = PRIORITIES.LOW;
    } else if (choice === '2') {
      priority = PRIORITIES.MEDIUM;
    } else if (choice === '3') {
      priority = PRIORITIES.HIGH;
    } else {
      updatePriority();
    }
  }

  return {
    createTodoItem,
    getTodoItemInformation,
    updateItemTitle,
    updateItemDescription,
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
