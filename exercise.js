const numberWithCommas = function (num) {
  let str = num.toString();
  return str.replace(/\B(?=(\d{3})+(?!\d))(?<!\.\d*)/g, ",");
};
// console.log(numberWithCommas(-1234.45));

const increment = (x) => {
  return x + 1;
};
const pipe = function (x, ...fns) {
  return fns.reduce((y, f) => f(y), x);
};
// console.log(pipe(5, increment, increment, increment, increment));

module.exports = {
  exercise1: numberWithCommas,
  exercise2: pipe,
};
