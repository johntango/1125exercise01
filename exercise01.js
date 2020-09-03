let s = "hello";
let t = "world";
let h = s + t;
console.log(h);
function f1(arg1, arg2) {
  return arg1 + arg2;
}
let result = f1(s, t);

let contacts = [
  { name: "adam", email: "adam@mit.edu" },
  { name: "anne", email: "anne@mit.edu" },
  { name: "fred", email: "fred@mit.edu" },
];

const f1 = (items) => items.map((item) => (item.age = 18));
f1();
