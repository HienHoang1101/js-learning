/*
for(variable of iterable) {
    // code to execute
}
Giải thích: Vòng lặp for...of được sử dụng để lặp qua các phần tử của một iterable (như mảng, chuỗi, Map, Set, v.v.). Trong mỗi lần lặp, biến sẽ nhận giá trị của phần tử hiện tại trong iterable. Vòng lặp sẽ tiếp tục cho đến khi tất cả các phần tử đã được duyệt qua.

*/

// ví dụ 1: Duyệt mảng
const fruits = ["red", "green", "blue", "yellow"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: red, green, blue, yellow

// ví dụ 2: duyệt string
const message = "Hello, World!";
for (const char of message) {
  console.log(char);
}
// Output: H, e, l, l, o, ,,  , W, o, r, l, d, !

// ví dụ 3: Duyệt set
const uniqueNumbers = new Set([1, 2, 3, 2, 1]);
for (const num of uniqueNumbers) {
  console.log(num);
}
// Output: 1, 2, 3

// ví dụ 4: Duyệt Map
const userRoles = new Map();
userRoles.set("Alice", "admin");
userRoles.set("Bob", "editor");
userRoles.set("Charlie", "viewer");
for (const [user, role] of userRoles) {
  console.log(`${user}: ${role}`);
}
// Output: Alice: admin, Bob: editor, Charlie: viewer
