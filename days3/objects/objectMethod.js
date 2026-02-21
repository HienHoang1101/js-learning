// Object.assign() - Sao chép/merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = Object.assign({}, obj1, obj2);
console.log(merged); // {a: 1, b: 2, c: 3, d: 4}

// Hoặc dùng spread operator
const merged2 = { ...obj1, ...obj2 };
console.log(merged2); // {a: 1, b: 2, c: 3, d: 4}

// Object.freeze() - Đóng băng object (không thể thay đổi)
const config = {
  apiUrl: "https://api.example.com",
  timeout: 3000,
};

Object.freeze(config);
config.timeout = 5000; // Không có tác dụng!
console.log(config.timeout); // 3000

// Object.seal() - Niêm phong object (không thể thêm/xóa properties)
const user = {
  name: "John",
  age: 30,
};

Object.seal(user);
user.city = "New York"; // Không thể thêm
delete user.age; // Không thể xóa
user.age = 31; // Có thể thay đổi giá trị
console.log(user); // {name: 'John', age: 31}

// Object.keys(), values(), entries()
const person = {
  name: "Alice",
  age: 25,
  city: "Boston",
};

console.log(Object.keys(person)); // ['name', 'age', 'city']
console.log(Object.values(person)); // ['Alice', 25, 'Boston']
console.log(Object.entries(person));
// [['name', 'Alice'], ['age', 25], ['city', 'Boston']]

// Destructure với Object.entries()
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Object.hasOwnProperty()
const car = { brand: "Toyota", model: "Camry" };
console.log(car.hasOwnProperty("brand")); // true
console.log(car.hasOwnProperty("year")); // false

// Object.is() - So sánh giá trị
console.log(Object.is(0, -0)); // false (khác với ===)
console.log(Object.is(NaN, NaN)); // true (khác với ===)
console.log(0 === -0); // true
console.log(NaN === NaN); // false
