// Create a todo list using factories (we will need as many as user wants)

// consider splitting functionality or naming it projects
export default function TodoList(title) {
  // declare default general project
  const projects = [['General']]; // where we store all our projects

  function createTodoList() {
    updateTodoListName();
    projects.push([title]); // add list to title
  }

  function getListOfProjects() {
    projects.forEach((list) => console.log(list));
  }

  function getTodoListName() {
    return `${title}`;
  }

  function updateTodoListName() {
    while (title === '') {
      title = prompt('Please add title');
    }
  }

  // Delete List (except for Default/General)
  function deleteTodoList(title) {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i] === title) {
        projects[i].pop();
      }
    }
  }

  // function deleteTodoItem() {
  //   console.log('Todo item has been deleted');
  // }

  return {
    getListOfProjects,
    createTodoList,
    getTodoListName,
    updateTodoListName,
    //deleteTodoList,
  };
}
