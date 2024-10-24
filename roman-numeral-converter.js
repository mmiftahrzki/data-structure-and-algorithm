function convertToRoman(num) {
  let rta = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  let num_stringify = num.toString();
  let power = 0;
  let multiplier = 10 ** power;
  let result = "";

  if (num >= 4000) {
    throw new Error("angka terlalu besar.");
  }

  if (rta[num] !== undefined) {
    result = rta[num];

    return result;
  }

  power = num_stringify.length - 1;
  for (let i = 0; i < num_stringify.length; i++) {
    let curr_digit = 0;

    multiplier = 10 ** power;
    curr_digit = num_stringify[i] * multiplier;

    if (rta[curr_digit] !== undefined) {
      result = result.concat(rta[curr_digit]);
      curr_digit = 0;
    }

    if (curr_digit > 5 * multiplier) {
      result = result.concat(rta[5 * multiplier]);
      curr_digit -= 5 * multiplier;
    }

    while (curr_digit > 0) {
      result = result.concat(rta[multiplier]);
      curr_digit -= multiplier;
    }

    power = power === 0 ? 0 : power - 1;
  }

  return result;
}
