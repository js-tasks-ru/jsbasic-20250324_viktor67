function factorial(n) {
  if (n == 0) {return 1;}
  let fact = 1;

  for (let index = 1; index <= n; index++) {
    fact = fact * index;
    
  }
  return fact;
}
