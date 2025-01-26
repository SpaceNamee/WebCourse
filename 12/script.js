
// 1 -----------------------------------------------------
// 2 -----------------------------------------------------------------------

document.write("<p style='text-align:center'>Приклад знаходження більшого числа</p>");
let a = parseInt(prompt("Введи 1 число: ")); 
let b = parseInt(prompt("Введи 2 число: "));
let c = parseInt(prompt("Введи 3 число: ")); 

if (a > b && a > c) {
    document.write("Найбільше серед трьох чисел - 1. ", a);
} else if (b > c) {
    document.write("Найбільше серед трьох чисел - 2. ", b);
} else if (c > a) {
    document.write("Найбільше серед трьох чисел - 3. ", c);
} else {
    document.write("Числа однакові");
}

let max = (a > b) ? a : b;
max = (max > c) ? max : c;

if (a != b || b != c || a != c) {
    document.write("<p>Значення найбільшого серед трьох чисел - ", max, "</p>");
}

// 3 ------------------------------------------------
let age = parseInt(prompt("Введіть вік cобаки в роках"));
switch (age) { 
    case 1:
        document.write("Щенячий вік");
        break;
    case 2:
        document.write("Юнацький вік");
        break;
    case 3:
        document.write("Юнацький вік");
        break;
    case 4:
        document.write("Юнацький вік");
        break;
    case 5:
        document.write("Юнацький вік");
        break; 
    case 6:
        document.write("Юнацький вік");
        break;
    case 7:
        document.write("Юнацький вік");
        break;
    case 8:
        document.write("Старший вік");
        break;
    case 9:
        document.write("Старший вік");
        break;
    case 10: 
        document.write("Старший вік");
        break;
    default: 
        document.write("Старість");
        break;
}

// 4 --------------------------------------------------
document.write("<p>Використання оператора циклу	<b>FOR</b></p>");			
// Зведення числа x у ступінь
let x; // задане число



do {
    x = parseInt(prompt("Введіть число x"));
} while (isNaN(x));

let factorial = 1;
for(let i = 1; i <= x; i++){
    factorial *= i;
}

let start = true;
while (start) {
    let s = prompt("Який я люблю колір?");

    switch (s) {
        case "синій":
            document.write("Так! Мій улюблений колір — синій!");
            start = false;
            break;
        default:
            alert("Він небесного кольору.");
            break;
    }
}            

document.write("Результат: " +  x.toString() + "!" + "= " + factorial.toString() );	

// 5 ---------------------------------------------------------------------------
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
};

let propertyInfo = "";

// Цикл for...in перебирає властивості об'єкта
for (let propertyName in car) {
    propertyInfo = propertyName + ": " + car[propertyName];
    document.write(propertyInfo + "<br>");
}

// 6 --------------------------------
let secretWord = "гречка";  
let f = true; 
let userGuess; 
let attemptCount = 0;
let answer = confirm("Хочеш зіграти? Вгадай слово!");

if (answer) {
    while (f) {
        // Користувач вводить своє припущення
        userGuess = prompt("Введіть слово:");
        attemptCount++;
        
        if (userGuess === secretWord) {
            alert("Вітаємо! Ви вгадали слово!\nКількість спроб: " + attemptCount);
            f = false; // Завершуємо гру, якщо слово вгадано
        } else {
            alert("Неправильно. Спробуйте ще раз. На англійській мові це buckwheat ");
        }
    }
} else {
    alert("Шкода! Може бути в інший раз.");
}
