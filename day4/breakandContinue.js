// break - thoát khỏi vòng lặp
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Dừng vòng lặp khi i bằng 5
  }
  console.log(i); // Output: 1, 2, 3, 4
}

// continue - bỏ qua lần lặp hiện tại và tiếp tục với lần lặp tiếp theo
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Bỏ qua các số chẵn
  }
  console.log(i); // Output: 1, 3, 5, 7, 9
}

// ví dụ: tìm số nguyên tố đầu tiên

function findFirstPrime(numbers) {
  for (let num of numbers) {
    if (isPrime(num)) {
      return num; // Trả về số nguyên tố đầu tiên tìm thấy
    }
  }
  return null; // Nếu không tìm thấy số nguyên tố nào
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(findFirstPrime([4, 6, 8, 9, 10, 11, 12])); // Output: 11
