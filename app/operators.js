var isHasHouse;
var Square;

var name = "Sergey";
isHasHouse = false;
Square = 97;

/*if (isHasHouse && Square >= 100) { // && - and - и 
    console.log("Хорошо");
}
if (!isHasHouse || Square <= 34) { // || - or - или
    console.log("Дом маленький")
} */

switch (name) {
    case "Sergey":
        console.log("105");
        break;
    default: // Можно не прописывать break; т.к и так используется для крайних случаев
        console.log("Ничего не подошло.");
}