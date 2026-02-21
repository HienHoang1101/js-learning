// Ví dụ 1: Bảng cửu chương
for (let i = 1; i <= 10; i++) {
  console.log(`Bảng ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("---");
}

// Ví dụ 2: Ma trận 2D
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

// Ví dụ 3: Pattern - Tam giác sao
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
/*
Output:
* 
* * 
* * * 
* * * * 
* * * * * 
*/
