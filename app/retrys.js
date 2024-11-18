/*for (var i = 100; i > 1; i /= 2) { // for
    console.log(i);
}*/

/*var b = 100; // while
while (b>10) {
    b-=10;
    console.log(b); 
}*/

/*var x = 10; // do {что-то делается} while(выполняется какое-то условие)
do {
    console.log(x);
    x--;
} while (x>0);*/

/*for(var i = 10; i<=20; i++) {   // continue;
    // if (i>=15) {
    //     break;
    // }
    if(i%2==0) {
        continue; // Как я понял, типа мы просто пропускаем это четное число и не выводим его в консоль, продолжая при этом выполнение программы
    }
    console.log(i);
}*/

var arr = [5, 7, 8, 2, 7, 15,];
for (var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    console.log("Элемент " + (i+1) + ": " + arr[i]);
}