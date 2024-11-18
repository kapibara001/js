var arr = [3, true, "work", -102, 5.7]; // или через new Array(..., ..., ...,)
arr[2] = "home"; // замена 3 элемента
console.log(arr.length); // длина


var matrix = [[1, 2, 4], 
    ["bew", "new"], 
    [false, false, false, true],
];

console.log(matrix);
console.log(matrix[0][2], matrix[2][3]); // из 1-го в списке массива выбираем 3 элемент, то есть 4