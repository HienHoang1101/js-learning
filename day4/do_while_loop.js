// Cú pháp
do {
  // code to execute
} while (condition);

// Ví dụ 1: So sánh với while
let x = 10;
do {
  console.log(x);
  x++;
} while (x < 5);
// Output: 10 (chạy 1 lần dù điều kiện sai)

let y = 10;
while (y < 5) {
  console.log(y);
  y++;
}
// Output: (không in gì)

// Ví dụ 2: Menu selection
let choice;
do {
  choice = prompt("Choose an option:\n1. Add\n2. Delete\n3. Exit");

  switch (choice) {
    case "1":
      console.log("Adding...");
      break;
    case "2":
      console.log("Deleting...");
      break;
    case "3":
      console.log("Exiting...");
      break;
    default:
      console.log("Invalid choice!");
  }
} while (choice !== "3");
