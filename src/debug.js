/** FEEDBACK: Great job! */
const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};
//console.log(brokenLoop(1, 10))
const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let a = 0; a < 10; a++) {
      result += `-${i}${a}`;
    }
  }
  return result.slice(1);
};
console.log(brokenNested())
module.exports = {
  brokenLoop,
  brokenNested,
};
