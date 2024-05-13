const { workerData } = require("worker_threads");

let myObj = {
    '1': 'this',
    '2': 'word',
    '3': 'is',
    '42': 'strange'
}
let val = 3
console.log(myObj[val])