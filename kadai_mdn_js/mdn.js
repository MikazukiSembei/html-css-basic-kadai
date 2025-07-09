// 2024年10月12日を作成
const date = new Date(2024, 9, 12);  

// 年・月・日を取得
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

// 出力
console.log(`${year}年${month}月${day}日`);
