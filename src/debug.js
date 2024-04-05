const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};
console.log(brokenLoop(1, 10))
const brokenNested = () => {
  let result = '';
  for (let i = 0; i < 2; i++) {
    for (let i = 0; i < 10; i++) {
      result += `-${i}${i}`;
    }
  }
  return result.slice(1);
};

module.exports = {
  brokenLoop,
  brokenNested,
};
