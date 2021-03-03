const showStars = (nbBase, reverse, char) => {
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      str += char.repeat(i)
      if (i !== nbBase) {
        str += '\n'
      }
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      str += char.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}

console.log(showStars(10, true, 'A'))