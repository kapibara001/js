// setInterval(my_func, 1000); // 1 параметр - название функции, 2 - кол-во миллисекунд

// var counter = 0;
// function my_func() {
//     counter++;
//     console.log(counter + " сек.");
// }



/* 
var id = setInterval(my_func, 1000); // если нужно будет останавливать интервал, то его нужно будет поместить в любую переменную

var counter = 0;
function my_func() {
    counter++;
    console.log(counter + " секунд прошло.");

    if (counter == 3) {
        clearInterval(id); // остановка работы ИНТЕРВАЛА
    }
}
*/




setTimeout(function() { // Создание таймера
    console.log("Timer is Working");
    myfunc();

}, 2000);

function myfunc() {
    var timer = 0;
    var id = setInterval(function() {
        timer++;
        console.log("Second " + timer);

        if (timer == 10) {
            for (var i = 0; i<2; i++) {
                alert(i + " открытие");
            }
            clearInterval(id);
        }
    }, 1000)
}
