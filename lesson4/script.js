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
