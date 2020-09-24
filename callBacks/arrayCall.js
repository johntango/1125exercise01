let a = [1, 2, 3, 4];
function ripArray(a, f) {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    let result = f(a[i], i);
    if (result != null) newArray.push(result);
  }
  return newArray;
}

function map(item, index) {
  return item + 100;
}
function filter(item, index) {
  if (item >= 3) return item;
  else return null;
}
let b = ripArray(a, filter);
console.log(b);
