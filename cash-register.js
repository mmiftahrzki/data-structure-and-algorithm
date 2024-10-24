const currency_unit = {
  "ONE HUNDRED": 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

function checkCashRegister(price, cash, cid) {
  const result = { status: "INSUFFICIENT_FUNDS", change: [] };
  let change = cash - price;
  let change_int = change * 100;

  for (let i = cid.length - 1; i >= 0; i--) {
    const curr_cid_unit = cid[i][0];
    let currency_unit_curr_cid_unit_int = currency_unit[curr_cid_unit] * 100;
    let curr_currency_unit_in_drawer = (cid[i][1] * 100) / currency_unit_curr_cid_unit_int;

    if (currency_unit_curr_cid_unit_int > change_int) {
      continue;
    }

    let temp_val = 0;

    while (curr_currency_unit_in_drawer > 0 && change_int >= currency_unit_curr_cid_unit_int) {
      temp_val += currency_unit_curr_cid_unit_int;
      change_int -= currency_unit_curr_cid_unit_int;
      curr_currency_unit_in_drawer--;
    }

    temp_val = temp_val / 100;

    result.change.push([curr_cid_unit, temp_val]);
  }

  if (change_int > 0) {
    result.change = [];
  }

  if (change_int == 0) {
    result.status = "OPEN";

    for (const e of cid) {
      if (e[1] == 0) {
        result.change = cid;
        result.status = "CLOSED";
        break;
      }
    }
  }

  return result;
}
