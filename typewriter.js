const string = "hello there from lighthouse labs\n";
let delay = 0;
for (let letter of string) {
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay);
  delay += 100;
}