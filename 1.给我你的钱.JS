/**
 * 你有10000元，每次提现服务费为你的余额的0.1%，最低提现服务费0.1。
 * @param initialMoney 初始金额
 */
const calculateWithdrawal=(initialMoney = 10000)=> {
  let money = initialMoney;
  let delay = 5000;
  const changeArray = [];
  const minimumCharge = 0.1;

  while (money > 0) {
    const charge = Math.max(money * 0.001, minimumCharge);
    money = +(money - charge).toFixed(2);
    changeArray.push(money);
  }

  console.table(changeArray);
  const totalWithdrawals = changeArray.length + 1;
  console.log(`金额${initialMoney}，需要${totalWithdrawals}次提现服务费，单次耗时按${delay / 1000}s，总耗时${delay * totalWithdrawals}s`);
}

calculateWithdrawal(10000)
