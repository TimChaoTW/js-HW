function createTree(n) {
  for (var i = 1; i <= n; i += 1)
    //   畫星星和空白用repeat方法畫出指定的數量，空白數是層數扣掉星星數，星星數是2倍的層數-1
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  //  下面的樹幹星星固定為一個，空白則為層數-1(星星)
  for (var j = 1; j <= 2; j += 1) console.log(" ".repeat(n - 1) + "*");
}

createTree(3);
