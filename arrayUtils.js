const arrayUtils = (tab) => {
    let biggest = 0;

    for (i = 0; i < tab.length; i++) {
        if (tab[i] > biggest) {
            biggest = tab[i];
        }
    }
    return biggest;
}
console.log(arrayUtils([99, 110, 101, 1]))


const sortAscend = (tab) => {
  return tab.sort((a, b) => a - b)
}

console.log(sortAscend([99, 110, 101, 1]))



const makeUnique = (tab) => {
return [...new Set(tab)]
} 
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))