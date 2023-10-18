let years = prompt("請輸入年份");

if (years % 4 == 0 && years % 100 != 0) {
  console.log("閏年");
} else if (years % 400 == 0) {
  console.log("閏年");
} else {
  console.log("非閏年");
}
