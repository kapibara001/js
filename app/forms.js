/* var text = document.getElementById('text');
text.title = "oknice";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "Прикол";

 document.getElementById('text').style.color = 'white';

var spans = document.getElementsByTagName('span');

var spans = document.getElementsByClassName('simple-text');

for (var i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
} */

function register(data) {
    var name = data.name.value;
    var pass = data.pass.value;
    var repass = data.repass.value;
    var state = data.state.value;

    var failmes = "";
    
    if (name == "" || pass == "" || state == "" ) {
        failmes = "Заполните все поля.";
    }
    else if (name.length < 2 || name.length > 11) {
        failmes = "Введите корректное имя.";
    }
    else if (pass != repass) {
        failmes = "Пароли не совпадают.";
    }
    else if (pass.split("&").length > 1){
        failmes = "Пароль содержит недопустимые символы.";
    }
    // else if (pass.length < 8) {
    //     failmes = "Пароль слишком короткий";
    // }
    
    if (failmes != "") {
        document.getElementById('error').innerHTML = failmes;
    } 
    else {
        alert("Все данные успешно заполнены");
        window.location = 'WWW.youtube.com';
    }

    return false;
}