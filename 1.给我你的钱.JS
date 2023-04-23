/**
 * 你有10000元，每次提现服务费为你的余额的0.1%，最低提现服务费0.1。
 * @param initialMoney 初始金额
 */
function HowMakeMoney(initialMoney = 10000) {
  let money = initialMoney;
  let delay = 5000;
  const changeArray = [];

  while (money > 0) {
    let charge = Number(money * 0.001).toFixed(2);
    money = Number(money - (charge <= 0.1 ? 0.1 : charge)).toFixed(2); // 最低0.1
    changeArray.push(money);
    // console.log(money, changeArray.length + 1);
  }

  console.table(changeArray);
  console.log(
    `金额${initialMoney}，需要${
      changeArray.length
    }次提现服务费，单次耗时按${delay / 1000}s，总耗时${delay * changeArray.length}s`
  );
}

HowMakeMoney(10000);
