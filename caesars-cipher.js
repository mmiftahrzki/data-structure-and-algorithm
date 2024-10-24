function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const regex = /\w/
  let result = ""

  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i]) === false) {
      result = result.concat(str[i])
      continue
    }

    let index = (alphabet.indexOf(str[i]) + 13) % alphabet.length

    result = result.concat(alphabet[index])
  }

  return result;
}