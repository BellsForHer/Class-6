const range = (x,y) => {
    if (x > y)
      return range(y,x).reverse();
    else
      return x === y ? [y] : [x, ...range(x + 1, y)];
  }

console.log(range(1,5));
console.log(range(2,8));
console.log(range(10,20));
console.log(range(24,17));