// Demo callback function

function toDo(task, callback) {
  console.log('Start task: ', task);
  setTimeout(() => {
    console.log(`${task} is done`);
    callback();
  }, 2000);
}

// Callback function là arrow function
toDo('Task 1', () => {
  console.log('Complete all tasks');
  console.log('-------------------');
})

console.log('-------------------');

// Hoặc callback function là function thường
toDo('Task 2', function() {
  console.log('Complete all tasks');
  console.log('-------------------');
})