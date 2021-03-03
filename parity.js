/*
const isOdd = (nb) => {
if (nb%2 == 0 ){
return `false : le chiffre ${nb} est paire.`;
}else{
  return `true : le chiffre ${nb} est bien impaire.`;
}
}

console.log(isOdd(5))
*/

const isOdd = (nb) => {
  return (nb%2 == 0 ? 'false' : 'true');
}

//console.log(isOdd(5))

const isEven = (nb1) => {
  return (isOdd ? 'true' : 'false')
}
console.log(isEven(5))
//non fini