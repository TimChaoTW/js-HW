function bmi(h, w) {
  let result = w / h / h;
  return result.toFixed(2);
}
// high useing meter and weigh using kilogram
console.log(bmi(1.6, 80));
