// Cú pháp
// for (initilization; condition; increment) {
//   // code to execute
// }

// ví dụ
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Duyệt qua mảng

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ví dụ 3: đếm ngược
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// ví dụ 4: Bước nhảy (step)
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
