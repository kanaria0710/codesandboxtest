/**
 * const, let 等の変数宣言
 */

// var val1 = "var変数";

// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数の上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数の上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数の再宣言";

// const val3 = "const変数";
// console.log(val3);

//constは上書き不可
// val3 = "const変数の上書き";

//constは再宣言も不可能
// const val3 = "const変数の再宣言";

// constで定義したオブジェクトはプロパティ変更可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };
// val4.name = "kanaria";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティ変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// 変数宣言はほとんどconst, 動的に値が変わるのはstate, 処理の中で上書きが必要なのはlet

/**
 * テンプレート文字列
 */

// const name = "じゃけぇ";
// const age = 28;
// //私の名前はじゃけぇです。年齢は28歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**
//  * アロー関数
//  */

// //従来の関数
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です。"));

// //アロー関数
// //return, {}の省略が可能(1行ならok)
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です。"));

// const func3 = (num1, num2) =>{
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myplofile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const message1 = `名前は${myplofile.name}です。年齢は${myplofile.age}です`;
// console.log(message1);

// const { name, age } = myplofile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myPlofile = ["じゃけぇ", 28];

// const message3 = `名前は${myPlofile[0]}です。年齢は${myPlofile[1]}です。`;
// console.log(message3);

// //配列の時は順番に入る
// const [name, age] = myPlofile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */

//  const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
//  sayHello();

/**
 *  スプレッド構文
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー，結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4); //スプレッド構文を使わないとarr8だけでなくarr4の配列も上書きしてしまう．arr4を参照してしまうため
