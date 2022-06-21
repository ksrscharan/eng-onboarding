function printFibonacciNumbers(number) {
  let arr = [];
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= number; i++) {
    arr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return arr;
}

const number = parseInt(
  prompt("Please enter number upto which you want fibonnaci series ")
);

printFibonacciNumbers(number);
