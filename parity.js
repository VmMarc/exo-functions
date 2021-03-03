const isOdd = (nb) => {
  return (nb%2 == 0 ? false : true);
}

console.log(isOdd(6))


const isEven = (nb) => {
return (isOdd(nb) ? false : true)
}
console.log(isEven(6))