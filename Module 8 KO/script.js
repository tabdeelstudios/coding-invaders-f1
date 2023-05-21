let allTasks = [];
let choice = -1;

do {
  console.log(
    "Pick an option : \n1. Add Task\n2. See all tasks\n3. Search for a task\n4. Exit"
  );
  choice = parseInt(prompt("Enter your choice : "));

  switch (choice) {
    case 1:
      let title = prompt("Enter the title : ");
      let id = Date.now().toString();
      let newTask = { title, id };
      console.log(addTask(newTask));
      break;
    case 2:
      showTasks();
      break;
    case 3:
      let searchTitle = prompt("Enter the title : ");
      console.log(searchTask(searchTitle));
      break;
    case 4:
      console.log("Thanks for using the app!");
      break;
    default:
      console.log("Invalid choice");
  }
} while (choice > 0 && choice < 4);

function addTask(task) {
  return allTasks.push(task);
}

// let addTask2 = function (task) {
//   return allTasks.push(task);
// };

// let addTask3 = (task) => {
//   return allTasks.push(task);
// };

function showTasks() {
  allTasks.forEach((task) => console.log(`${task.id} : ${task.title}`));
}

function searchTask(title) {
  let filteredTasks = allTasks.find((task) => task.title === title);
  if (filteredTasks) {
    return filteredTasks;
  } else {
    return "No tasks found!";
  }
}
