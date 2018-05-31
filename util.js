const leftPad = (input, length, padChar) => {
  if ((input + '').length >= length) {
    return input
  } else {
    return leftPad(padChar + '' + input, length, padChar)
  }
}

export const formatTime = time => {
  console.log(time)
  const minutes = leftPad(Math.floor(time / 60), 2, '0')
  const seconds = leftPad(time % 60, 2, '0')
  return `${minutes}:${seconds}`
}
