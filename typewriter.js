const sentence = "hello there from lighthouse labs";
let time = 0;

for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char)
  }, 1000 + time)
  time += 50;
}