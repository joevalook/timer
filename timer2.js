const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao! \n');
    process.exit();
  }
  if (Number(key)) {
    setTimeout(() => process.stdout.write("\x07"), key * 1000);
  }
  if (key === 'b') {
    process.stdout.write("\x07");
  }
  if (!Number(key) && key !== 'b') {
    process.stdout.write("Numbers or b only please!");
    process.stdout.write('\n');
  }
});

console.log('Welcome to the timed beep program! \nPress any number from 1 to 9 to beep after that many seconds.\nPress b to beep now! Press ctrl + c to exit');