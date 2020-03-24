/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;
  if (redemption > 0 && redemption <= 350){
    discount = "0%";
  }
  if (redemption > 350  && redemption <= 1350){
    discount = "15%";
  }
  if (redemption > 1350  && redemption <= 2700){
    discount = "30%";
  }
  if (redemption > 2700  && redemption <= 6500){
    discount = "45%";
  }
  //PLACE YOUR CODE HERE

  return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
  let fact1 = 1;
  let fact2 = 1;
  let fact3 = 1;
  for (let i = 1; i <=10; i++){
        fact1*=i;
  }
  console.log(fact1);
  let i2 = 1;
  while (i2<=10){
    fact2*=i2;
    i2++;
  }
  console.log(fact2);
  let i3 = 1;
  do {
    fact3*=i3;
    i3++;
  }
  while (i3<11)
  console.log(fact3);
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  console.log(substr[0]+substr[1]+substr[2]);
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
    const values = Object.values(personIncomes);
    console.log(values);
    sum = 0;
     for (let i = 0; i < values.length; i++)
     {
          sum +=values[i];
      }
      console.log (sum);
}

console.log(calculateDiscount(3100));

module.exports = calculateDiscount;
