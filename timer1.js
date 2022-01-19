// timerInput = process.argv.slice(2);
// a = 0
// for (let element of timerInput) {
//   if (Number(element) > 0) {
//     a += Number(element);
//     setTimeout(() => process.stdout.write('\x07'), a*1000);
//   }  
// } 

const time = process.argv.slice(2);
for (let index of time) {
  index = Number(index);
  if (typeof(index) === "number" && index > 0) {
    console.log(index)
    setTimeout(() => process.stdout.write("\x07"), index * 1000);
  }
}