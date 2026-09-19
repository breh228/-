let balance = 0;

let cars = [];

const balanceText = document.getElementById("balance");
const carsBlock = document.getElementById("cars");
const earnButton = document.getElementById("earn");
const x2Button = document.getElementById("x2");


// Оновлення балансу
function updateBalance() {
    balanceText.textContent = `Баланс: $${balance.toLocaleString()}`;
}



earnButton.addEventListener("click", function () {

    balance += 100;

    updateBalance();

});



x2Button.addEventListener("click", function () {

    if (balance <= 0) {
        alert("У тебе немає грошей!");
        return;
    }

    if (Math.random() < 0.5) {

        balance *= 2;

        alert(" Баланс подвоєно!");

    } else {

        balance = Math.floor(balance / 2);

        alert(" Баланс поділено навпіл!");

    }

    updateBalance();

});



function buy(name, price) {

    if (balance < price) {

        alert(" Недостатньо грошей!");

        return;
    }

    balance -= price;

    cars.push({
        name: name,
        price: price
    });

    updateBalance();

    showCars();
}