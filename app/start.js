// document.write("Java говорит привет!");  Устаревший метод. Не позволяет выводить определенную инфу а каких=то объектах
        
// console.log("Скрипт сработал. Java говорит привет!"); //Обыкновенный вывод в консоль
// console.info("console.info"); // то же самое, что лог
// console.error("Ошибка asdasda");
// console.warn("Уведомление фывфывф"); 

var num1 = "11245"; // variable - переменная(с англ.). В var можно подставлять числа, строки, булевые выражения, и другие
var num2 = 11245; // constant - константа(с англ.)

console.log("Вычитание: " + (num2-num1))
console.log("Сложение: " + (num2+num1))
console.log("Умножение: " + (num2*num1))
console.log("Деление: " + (num2/num1))

num1 = Number(num1) // Приведение из строки в число
console.log("Вычитание: " + (num2-num1))
console.log("Сложение: " + (num2+num1))
console.log("Умножение: " + (num2*num1))
console.log("Деление: " + (num2/num1))

console.log("Math: PI - " + Math.PI)  // Метод Math, можно поработать со встроенными библеотеками
console.log("min: " + Math.min(num1, num2, 10241235))
console.log("max: " + Math.max(num1,num2, 1092450912))
