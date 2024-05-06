/* function calcIt(num1, num2, operator) {

    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else {
        return "????"
    }

}

function calc(num1, num2, operator, callback) {
    let total = callback(num1, num2, operator);
    alert(`${num1}${operator}${num2} = ${total}`);
}

let n1 = Number(prompt("please enter 1st number"));
let n2 = Number(prompt("please enter 2nd number"));
let op = prompt("please enter operator + OR -");

calc(n1, n2, op, calcIt); */

function showContacts() {
    fetch("https://api.shipap.co.il/contact")
        .then(res => res.json())
        .then(data => {
            data.forEach(item => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.createTime}</td>
                    <td>${item.fullName}</td>
                    <td>${item.phone}</td>
                    <td>${item.email}</td>
                    <td>${item.message}</td>
                `;

                document.querySelector('tbody').appendChild(tr);
            });
        });
}

// fetch("https://api.shipap.co.il/contact")
// .then(res => res.json())
// .then(data => {

// });