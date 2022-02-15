const hasHiddenFee = (bill, total) =>
  bill.reduce((acc, cur) => acc + parseInt(cur.slice(1)), 0) < parseInt(total.slice(1));
