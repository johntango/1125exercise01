var data = require("./data.js");

let a = data.data;
let b = a.map((item) => {
  item.age += 10;
  return item;
});
function reducer(accum, curr) {
  return accum + curr;
}
let t = b.map((item) => item.age).reduce(reducer, 0);

console.log(total);
read();
