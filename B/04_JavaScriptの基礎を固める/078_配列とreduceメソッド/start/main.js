const str = 'animation';
const strArry = str.split('');

const result = strArry.reduce((accu, curr) => {
    return accu + '<' + curr + '>';
}, '')

console.log(result);