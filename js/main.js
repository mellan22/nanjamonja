const pictures = { "1.png": 0, "2.png": 0, "3.png": 0, "4.png": 0 };
const nameList = { 1: "name1", 3: "name3" };
const scores = {};
const players = [];

$(function () {
  //player情報を取得
  $(".sendData").click(function () {
    $('input[name^="participant"]').each(function (index, element) {
      players.push(element.value);
      console.log(players);
    });
    // e.preventDefault();
    location.href = "file:///Users/shiowtnb/VSProject/nanjamonja/main.html";
  });
});

//Playgroundに情報を表示
//人数が少ない時はカラムを減らしたい

$("#picture").click(function () {
  //有効な画像がなければ終わり
  //スコアを出す

  //ランダムに画像を取り出す
  Math.random();
  //表示回数を確認する

  //5回以下なら表示

  if (pictures[1][count] <= 5) {
    //countに1足す

    //Namelistにキーがなければ名前入力フォームを出す
    if (!namelist[picnum]) {
      $(".newname").show();
    } else {
      //2回目以降であればWinner入力フォーム・drawボタンを表示する
      //プルダウンにする？
    }
  } else {
    //5回であれば再度回す
  }
});

//   $("#submitName").click(function () {
//     //名前を取得
//     const submitName = "";
//     const picnum = "";
//     //取得した名前がNNamelistにあるか検索
//     if (submitName) {
//       //すでにある名前だよ！と表示したい
//       //公式では重複OK?
//     } else {
//       //なければ名前をNamelistに追加
//       pictures[picnum] = sibmitName;
//     }
//   });

//   $("thistimeWinner").click(function () {
//     //勝者にスコアを追加
//   });

//   $("draw").click(function () {
//     //元の画像に戻る
//   });
// });
