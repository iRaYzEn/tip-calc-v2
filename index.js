const bill = document.querySelector(".bill");
const waitersNumber = document.querySelector("#people");
const reset = document.querySelector("#reset");
const custom = document.querySelector(".custom");
const discountNumber = document.querySelectorAll(".btn");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const errorElement = document.querySelector("#error");

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
    custom.value = "";
    output1.textContent = "$0.00";
    output2.textContent = "$0.00";
});

custom.addEventListener("input", () => {
    outputTip();
});

let messages = [];
waitersNumber.addEventListener("input", () => {
    outputTip();
    if (waitersNumber.value <= 0) {
        messages.push("this filed can't be zero")
        errorElement.textContent = messages[0];
        errorElement.style.display = "block";
        waitersNumber.style.borderColor = "rgb(244 63 94)";
        waitersNumber.style.borderWidth = "2px";
    } else {
        errorElement.style.display = "none";
        waitersNumber.style.borderWidth = "0px";
    }
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
