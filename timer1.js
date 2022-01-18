timerInput = process.argv.slice(2);
a = 0
for (let element of timerInput) {
  if (Number(element) > 0) {
    a += Number(element);
    setTimeout(() => process.stdout.write('\x07'), a*1000);
  }  
} 