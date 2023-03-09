let array = new Array(1, 2, 3, 4, 5, 5);
array = [1, 2, 3, 4, 5, 6];
console.log(array);
console.log(array.length);
array.push(2);
console.log(array);
// appendleft
array.unshift(9);
console.log(array);
// popleft
array.shift();
console.log(array);
array.pop();
console.log(array);