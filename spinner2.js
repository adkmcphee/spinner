const sentence = "|/-\\|/-\\|";
const sentenceEnd = sentence + '\n';
let time = 100;
for (const char of sentenceEnd) {
  setTimeout(() => {
    process.stdout.write('\r'+ char);
  }, time);
  time += 200;
}




// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1200);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 1900);
