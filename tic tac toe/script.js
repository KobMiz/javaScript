const divs = document.querySelectorAll("#board>div");
let isX = true;
let isGameOver = false;

// לולאה העוברת על כל המשבצות
divs.forEach(div => {
    // הוספת פונקציה המופעלת בעת לחיצה על אחת המשבצות
    div.addEventListener("click", function (ev) {
        if (isGameOver) {
            return;
        }

        // האלמנט שעליו לחץ השחקן
        const elem = ev.target;

        // אם המשבצת מלאה, הפונקציה נעצרת
        if (elem.innerText) {
            return;
        }

        if (isX) {
            elem.innerText = "X";
        } else {
            elem.innerText = "O";
        }

        // שינוי תור
        isX = !isX;
        // הפעלת הפונקציה של המחווה הויזואלית
        showTurn();
        checkWinner();
    });
})

/**
 * פונקציה הנותנת מחווה של איזה שחקן התור הנוכחי
 */
function showTurn() {
    // קודם כל, הסרנו את הקלאס מהשחקן האחרון
    document.querySelector('.currentTurn').classList.remove('currentTurn');

    // שם את הקלאס בהתאם לתור השחקן
    if (isX) {
        document.querySelector("#players>div:first-child").classList.add('currentTurn');
    } else {
        document.querySelector("#players>div:last-child").classList.add('currentTurn');
    }
}

function checkWinner() {
    // מערך של מערכים של מיקומים אפשריים לניצחון
    const options = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // רץ על המערך של כל האופציות
    for (const op of options) {
        // בודק את המיקומים של כל מערך
        if (op.every(myIndex => divs[myIndex].innerText === 'X')) {
            winner(op, 'X');
            break;
        } else if (op.every(myIndex => divs[myIndex].innerText === 'O')) {
            winner(op, 'O');
            break;
        }
    }
}

function winner(op, win) {
    setTimeout(() => alert(win + " is winner!"), 50);

    op.forEach(x => divs[x].classList.add('win'));

    isGameOver = true;
}
    /*     const opt1 = divs[0].innerText + divs[1].innerText + divs[2].innerText;
        const opt2 = divs[3].innerText + divs[4].innerText + divs[5].innerText;
        const opt3 = divs[6].innerText + divs[7].innerText + divs[8].innerText;
        const opt4 = divs[0].innerText + divs[3].innerText + divs[6].innerText;
        const opt5 = divs[1].innerText + divs[4].innerText + divs[7].innerText;
        const opt6 = divs[2].innerText + divs[5].innerText + divs[8].innerText;
        const opt7 = divs[0].innerText + divs[4].innerText + divs[8].innerText;
        const opt8 = divs[2].innerText + divs[4].innerText + divs[6].innerText;
    
        if (opt1 === "XXX" || opt1 === "OOO") {
    
        } */


/* div.addEventListener("click", function (ev) {
    const elem = ev.target;
    if (elem.style.backgroundColor) {
        elem.style.backgroundColor = "";
    } else {
        elem.style.backgroundColor = "purple";
    } */