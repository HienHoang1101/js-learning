// 1.1. Khai báo Arrasys
// Cách 1: Sử dụng dấu ngoặc vuông [] - Literal syntax
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "two", true, null, undefined, { name: "John" }, [1, 2, 3]];

// Cách 2: Sử dụng từ khóa new Array() - Constructor syntax
const colors = new Array("red", "green", "blue");
const emptyArray = new Array(5); // Tạo mảng rỗng với độ dài 5

console.log("Khai báo mảng:");
console.log("numbers:", numbers);
console.log("fruits:", fruits);
console.log("mixed:", mixed);
console.log("colors:", colors);
console.log("emptyArray:", emptyArray);
console.log("------------------------------");

// 1.2. Truy cập phần tử trong mảng

const firstFruit = fruits[0]; // Truy cập phần tử đầu tiên
const lastNumber = numbers[numbers.length - 1]; // Truy cập phần tử cuối cùng

console.log("Truy cập phần tử trong mảng:");
console.log("firstFruit:", firstFruit);
console.log("lastNumber:", lastNumber);
console.log("------------------------------");

// Thay đổi phần tử trong mảng
fruits[1] = "grape"; // Thay đổi phần tử thứ hai
console.log("Sau khi thay đổi, fruits:", fruits);
console.log("------------------------------");

// Thêm phần tử
fruits[fruits.length] = "kiwi"; // Thêm phần tử mới vào cuối mảng
console.log("Sau khi thêm phần tử, fruits:", fruits);
console.log("------------------------------");

// 1.3. Các phương thức cơ bản của mảng

// Thêm phần tử vào cuối mảng - push()
fruits.push("mango");
console.log("Sau khi push, fruits:", fruits);

// Xóa phần tử cuối mảng - pop()
const lastFruit = fruits.pop();
console.log("Sau khi pop, fruits:", fruits);
console.log("Phần tử bị xóa:", lastFruit);

// Thêm phần tử vào đầu mảng - unshift()
fruits.unshift("strawberry");
console.log("Sau khi unshift, fruits:", fruits);

// Xóa phần tử đầu mảng - shift()
const firstRemovedFruit = fruits.shift();
console.log("Sau khi shift, fruits:", fruits);
console.log("Phần tử bị xóa:", firstRemovedFruit);
console.log("------------------------------");

// Tìm kiếm và kiểm tra

//includes() - Kiểm tra sự tồn tại của phần tử
const hasBanana = fruits.includes("banana");
console.log("fruits có chứa 'banana' không?", hasBanana);
//indexOf() - Tìm vị trí của phần tử
const orangeIndex = fruits.indexOf("orange");
console.log("Vị trí của 'orange' trong fruits:", orangeIndex);
console.log("------------------------------");
// find() - Tìm phần tử thỏa mãn điều kiện
const foundFruit = fruits.find((fruit) => fruit.length > 5);
console.log("Phần tử đầu tiên có độ dài > 5:", foundFruit);
// filter() - Lọc các phần tử thỏa mãn điều kiện
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log("Các phần tử có độ dài > 5:", longFruits);
console.log("------------------------------");

// Chỉnh sửa mảng

const numbers2 = [1, 2, 3, 4, 5];

//slice() - Cắt mảng (không thay đổi mảng gốc)
const sliced = numbers2.slice(1, 4);
console.log("Sliced array (1,4):", sliced);
console.log("Original numbers2 after slice:", numbers2);

// splice() - Thêm/Xóa phần tử (thay đổi mảng gốc)
numbers2.splice(2, 1, 10, 11); // Xóa 1 phần tử tại index 2 và thêm 10, 11
console.log("numbers2 after splice:", numbers2);
console.log("------------------------------");

// concat() - Nối mảng
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log("Combined array:", combined);
console.log("------------------------------");

// Duyệt qua Arrays

const letters = ["a", "b", "c", "d", "e"];
// Sử dụng for loop
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}
console.log("------------------------------");
// Sử dụng for...of
for (const letter of letters) {
  console.log(letter);
}
console.log("------------------------------");

// Sử dụng forEach()
letters.forEach((letter, index) => {
  console.log(`Index ${index}: ${letter}`);
});
console.log("------------------------------");

// Sử dụng map() - Tạo mảng mới
const upperLettes = letters.map((letter) => letter.toUpperCase());
console.log("Uppercase letters:", upperLettes);
console.log("------------------------------");
// Sử dụng reduce() - Tính tổng các số
const sum = numbers2.reduce((accumulator, current) => accumulator + current, 0);
console.log("Tổng các số trong numbers2:", sum);
console.log("------------------------------");

// 1.4. Mảng đa chiều (Multidimensional Arrays)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Mảng đa chiều (matrix):", matrix);
console.log("Phần tử tại hàng 2, cột 3:", matrix[1][2]); // Truy cập phần tử
console.log("------------------------------");

// Duyệt mảng đa chiều
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}
console.log("------------------------------");

// Kết thúc bài học về Arrays
console.log("Kết thúc bài học về Arrays");
