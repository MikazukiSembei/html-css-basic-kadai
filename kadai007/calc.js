// 任意の数値を変数numに代入
let num = Math.floor(Math.random() * 100)+1; // 0〜99のランダムな整数

// 条件に応じて分岐
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  console.log("5の倍数です");
} else {
  console.log(num);
}