const isOdd = (nb) => {
  return (nb%2 === 0 ? false : true);
  // return nb%2 !== 0
}

console.log(isOdd(6))


const isEven = (nb) => {
return (!isOdd(nb))
}
console.log(isEven(6))