// Demo callback function

function toDo(task, callback) {
  console.log('Start task: ', task);
  setTimeout(() => {
    console.log(`${task} is done`);
    callback();
  }, 2000);
}

toDo('Task 1', () => {
  console.log('Complete all tasks');
})