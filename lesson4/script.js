let counter = 1;

function plus() {
    // הגדלנו את המשתנה ב-1
    counter++;
    // שמנו את הערך ב-HTML
    document.getElementById("count").innerHTML = counter;
    // שיננו את גודל הכתב של המספר בהתאם לערך של המספר
    document.getElementById("count").style.fontSize = counter + "em";
}

function minus() {
    // הקטנו את המשתנה ב-1
    counter--;
    // שמנו את הערך ב-HTML
    document.getElementById("count").innerHTML = counter;
    // שיננו את גודל הכתב של המספר בהתאם לערך של המספר
    document.getElementById("count").style.fontSize = counter + "em";
}

function cityChange() {
    const city = document.getElementById("city").value;

    if (city == "6200") {
        document.getElementById("output1").innerHTML = "נכון מאוד";
    } else {
        document.getElementById("output1").innerHTML = "טעות..";
    }
}

function login() {
    const un = document.getElementById("username").value;
    const pw = document.getElementById("password").value;
    const output = document.getElementById("output2");

    if (un == "banana" && pw == "a123") {
        output.innerHTML = "ההתחברות בוצעה בהצלחה";
        output.style.color = "blue";
    } else {
        output.innerHTML = "שם משתמש או סיסמה לא נכונים";
        output.style.color = "red";

    }
}

function userNumber() {
    const elem = document.getElementById("usernumber");


    if (elem.value > 100) {
        elem.value = 0;
    } else if (elem.value < 0) {
        elem.value = 100;
    }

    const num = Number(elem.value);

    if (num <= 40) {
        elem.style.backgroundColor = "red";
    } else if (num <= 60) {
        elem.style.backgroundColor = "blue";
    } else if (num <= 80) {
        elem.style.backgroundColor = "green";
    } else if (num <= 100) {
        elem.style.backgroundColor = "purple";
    } else {
        elem.style.backgroundColor = "yellow";
    }

}
