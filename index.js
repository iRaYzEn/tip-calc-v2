const bill = document.querySelector(".bill");
const waitersNumber = document.querySelector("#people");
const reset = document.querySelector("#reset");
const custom = document.querySelector(".custom");
const discountNumber = document.querySelectorAll(".btn");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");

function result(num, per, waiterNumber = 1) {
    return (((num / 100) * per) / waiterNumber).toFixed(2);
}

discountNumber.forEach((btn) => {
    btn.addEventListener("click", () => {
        number = parseInt(btn.textContent.trim());
        custom.textContent = number;
        custom.value = number;
        outputTip();
    });
});

reset.addEventListener("click", () => {
    waitersNumber.value = 1;
    bill.value = 0;
    custom.value = 0;
    output1.textContent = "$0.00";
    output2.textContent = "$0.00";
});

custom.addEventListener("input", () => {
    outputTip();
});

waitersNumber.addEventListener("input", () => {
    outputTip();
});
bill.addEventListener("input", () => {
    outputTip();
});

function outputTip() {
    output1.textContent =
        waitersNumber.value <= 0 || bill.value <= 0
            ? "$0.00"
            : "$" + result(bill.value, custom.value, waitersNumber.value);

    output2.textContent =
        waitersNumber.value <= 0 || bill.value <= 0
            ? "$0.00"
            : "$" + result(bill.value, custom.value);
}
