const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to museum',
        completed: true
    },
    {
        id: 3,
        title: 'Go shoppping',
        completed: false
    },
];

// for (let i = 0; i < todos.length; i++){
//     let todo = todos[i];
//     if (todo.completed === true){
//         console.log(todos[i].title);
//     };
// }


// for (let i in todos){
//     let todo = todos[i];
//     if (todo.completed === false){
//         console.log(todo.title);
//     }
// }


for (let v of todos){
    if (v.completed === true){
        console.log('Hello World!');
    }
}

