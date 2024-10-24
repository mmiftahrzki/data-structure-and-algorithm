function telephoneCheck(str) {
  const pattern = /^1?[ -]?(\(\d{3}\)|\d{3}){1}[ -]?(\d{3}){1}[ -]?\d{4}$/g

  return pattern.test(str)
}