// let this check to be a function
function years() {
  if (years % 4 == 0 && years % 100 != 0) {
    return "閏年";
  } else if (years % 400 == 0) {
    return "閏年";
  } else {
    return "平年";
  }
}
console.log(years(2023));
// let result = years(2010);
// console.log(result)
