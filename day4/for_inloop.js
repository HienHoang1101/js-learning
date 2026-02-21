/*
for in loop is used to iterate over the properties of an object or the elements of an array. It allows you to execute a block of code for each property or element in the collection.

Syntax:
for (variable in object) {
  // code to be executed
}

 */

// Ví dụ 1:Duyệt object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log("${key}: ${person[key]}");
}

// ví dụ 2: duyệt array (không khuyến khích)
const numbers = [10, 20, 30, 40];
for (const index in numbers) {
  console.log(`${index}: ${numbers[index]}`);
}
// Output: 0: 10, 1: 20, 2: 30, 3: 40
// ⚠️ Nên dùng for...of thay vì for...in với arrays!

// Thêm property vào object
const car = {
  make: "Toyota",
  model: "Camry",
};
Object.prototype.year = 2020; // Thêm property vào prototype

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
// Output: make: Toyota, model: Camry, year: 2020
// Để tránh lặp qua các property kế thừa, bạn có thể sử dụng hasOwnProperty:
for (let key in car) {
  if (car.hasOwnProperty(key)) {
    console.log(`${key}: ${car[key]}`);
  }
}
// Output: make: Toyota, model: Camry
