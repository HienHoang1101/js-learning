// 2.1. Khai báo Object

// Cách 1: Object literal
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

// Cách 2: Sử dụng từ khóa new Object() - Constructor syntax
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

console.log("Khai báo Object:");
console.log("person:", person);
console.log("car:", car);
console.log("------------------------------");

// 2.2. Truy cập và thay đổi thuộc tính của Object
const person2 = {
  name: "Bob",
  age: 25,
  city: "Los Angeles",
};

// Dot notation
const personName = person2.name; // Truy cập thuộc tính name
console.log("Truy cập thuộc tính bằng dot notation:");
console.log("person2.name:", personName);

// Bracket notation - sử dụng dấu ngoặc vuông
console.log(person2["name"]); // Truy cập thuộc tính name
const key = "city";
console.log(person2[key]); // Truy cập thuộc tính city

// Thay đổi giá trị
person2.age = 26; // Thay đổi thuộc tính age
person2["city"] = "San Francisco"; // Thay đổi thuộc tính city

console.log("Sau khi thay đổi, person2:", person2);
console.log("------------------------------");

// Thêm property mới
person2.email = "bob@example.com";
person2["phone"] = "123-456-7890";

console.log("Sau khi thêm thuộc tính mới, person2:", person2);
console.log("------------------------------");

// 2.3. Nested Objects (Object lồng nhau)

const student = {
  name: "Charlie",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Boston",
    zip: "02101",
  },
  courses: ["Math", "Science", "History"],
};

console.log(student.address.city); // Truy cập thuộc tính city trong object address
console.log(student.courses[1]); // Truy cập phần tử thứ hai trong mảng courses
console.log("------------------------------");

// Thay đổi thuộc tính trong nested object
student.address.zip = "02102";
student.courses.push("Art");
console.log("Sau khi thay đổi, student:", student);
console.log("------------------------------");

// 2.4. Các phương thức cơ bản của Object

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

console.log("Sử dụng các phương thức của Object calculator:");
console.log("Add 5 + 3:", calculator.add(5, 3));
console.log("Subtract 10 - 4:", calculator.subtract(10, 4));
console.log("Multiply 6 * 7:", calculator.multiply(6, 7));
console.log("------------------------------");

// 2.5 Object Destructuring (ES6+) - Phá vỡ cấu trúc Object

const laptop = {
  brand: "Dell",
  model: "XPS 13",
  year: 2021,
  specs: {
    ram: "16GB",
    storage: "512GB SSD",
  },
};
// Destructuring - tách các thuộc tính thành biến riêng
const {
  brand,
  model,
  specs: { ram, storage },
} = laptop;
console.log("Object Destructuring:");
console.log("Brand:", brand);
console.log("Model:", model);
console.log("RAM:", ram);
console.log("Storage:", storage);
console.log("------------------------------");

// Đổi tên biến khi destructuring

const { year: manufactureYear } = laptop;
console.log("Manufacture Year:", manufactureYear);
console.log("------------------------------");

// Giá trị mặc định khi destructuring

const { color = "Silver" } = laptop; // color không tồn tại trong laptop, sử dụng giá trị mặc định
console.log("Color (with default):", color);
console.log("------------------------------");

// Kết hợp destructuring với hàm
function displayLaptopInfo({ brand, model, year }) {
  console.log(`Laptop Info: ${brand} ${model}, Year: ${year}`);
}
displayLaptopInfo(laptop);
console.log("------------------------------");

// 2.6. Spread Operator và Rest Operator với Object

// Spread Operator - sao chép và kết hợp Object

const personA = {
  name: "David",
  age: 28,
};

const studentA = {
  ...personA, // Sao chép tất cả thuộc tính từ personA
  studentId: "S12345",
  major: "Computer Science",
};
console.log("Spread Operator - studentA:", studentA);
console.log("------------------------------");

// Merge nhiều Object
const addressA = {
  city: "Seattle",
  country: "USA",
};
const fullProfile = {
  ...personA,
  ...addressA,
};
console.log("Merged Object - fullProfile:", fullProfile);
console.log("------------------------------");
// Rest Operator - gom nhóm các thuộc tính còn lại
const { name: personNameA, ...otherDetails } = fullProfile;
console.log("Rest Operator - personNameA:", personNameA);
console.log("Other Details:", otherDetails);
console.log("------------------------------");

// 2.7 Các phương thức hữu ích của Object

const personB = {
  name: "Eva",
  age: 32,
  city: "Miami",
};

Object.keys(personB); // Lấy tất cả các key
Object.values(personB); // Lấy tất cả các value
Object.entries(personB); // Lấy tất cả các cặp [key, value]
console.log("Các phương thức hữu ích của Object:");
console.log("Keys:", Object.keys(personB));
console.log("Values:", Object.values(personB));
console.log("Entries:", Object.entries(personB));
console.log("------------------------------");

// Kiểm tra sự tồn tại của thuộc tính
const hasAge = personB.hasOwnProperty("age");
console.log("personB có thuộc tính 'age' không?", hasAge);
console.log("------------------------------");

// Xóa thuộc tính
delete personB.city;
console.log("Sau khi xóa thuộc tính city, personB:", personB);
console.log("------------------------------");

// Khóa Object để không thể thêm hoặc xóa thuộc tính
