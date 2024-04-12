const whileToFor = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
};
//whileToFor()
/** FEEDBACK: This works but since it could be one or the other and the action in the code block is the same, you can use the OR operator to look for both within one conditional statement! */
const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    if (i === 3) {
      continue;
    }
    console.log("Sure glad this isn't 2 or 3");
    console.log(i);
  };
};
continueGuardClause()
module.exports = {
  whileToFor,
  continueGuardClause,
};
