function palindrome(str) {
  let str2 = ""
  let c = str.length % 2 === 0 ? 0 : 1;

  str = str.replace(/[^0-9a-zA-Z]/g, "")
  str2 = str.slice((-str.length + c) / 2)
  str2 = str2.split("").reverse().join("")
  str = str.slice(0, (str.length - c) / 2)

  return str.toLowerCase() === str2.toLowerCase()
}