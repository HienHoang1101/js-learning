// sort() - Sắp xếp mảng
const numbers = [5, 2, 8, 1, 9];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 8, 9]

const fruits = ["banana", "apple", "orange"];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']

// Sắp xếp objects
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
];

students.sort((a, b) => b.score - a.score);
console.log(students);
// [{name: 'Bob', score: 92}, {name: 'Alice', score: 85}, {name: 'Charlie', score: 78}]

// every() - Kiểm tra TẤT CẢ phần tử
const ages = [18, 20, 22, 25];
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults); // true

// some() - Kiểm tra CÓ ÍT NHẤT 1 phần tử
const hasMinor = ages.some((age) => age < 18);
console.log(hasMinor); // false

// flat() - Làm phẳng mảng lồng nhau
const nested = [1, 2, [3, 4], [5, [6, 7]]];
console.log(nested.flat()); // [1, 2, 3, 4, 5, [6, 7]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6, 7]

// flatMap() - map() rồi flat()
const sentences = ["Hello world", "JavaScript is fun"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log(words); // ['Hello', 'world', 'JavaScript', 'is', 'fun']

// from() - Tạo mảng từ array-like object
const str = "hello";
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']

// of() - Tạo mảng từ các arguments
const nums = Array.of(1, 2, 3, 4, 5);
console.log(nums); // [1, 2, 3, 4, 5]

// fill() - Điền giá trị vào mảng
const arr1 = new Array(5).fill(0);
console.log(arr1); // [0, 0, 0, 0, 0]

const arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 2, 4);
console.log(arr2); // [1, 2, 0, 0, 5]
