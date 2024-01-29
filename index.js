const bill = document.querySelector(".bill");
const waitersNumber = document.querySelector("#people");
const reset = document.querySelector("#reset");
const custom = document.querySelector(".custom");
const discountNumber = document.querySelectorAll(".btn");
const errorElement = document.querySelector("#error");
const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");

waitersNumber.addEventListener("input", () => {
    errorElement.style.display = "none";
    waitersNumber.style.borderWidth = "0px";
});

// function finallResult() {
//   btn.addEventListener("click", () => {
//     if (people.value == 0 || people.value == null) {
//       messages.push("Can't be zero, put a Number");
//       errorElement.textContent = messages[0];
//       errorElement.style.display = "block";
//       people.style.borderColor = "rgb(244 63 94)";
//       people.style.borderWidth = "2px";
//     } else {
//       let finallResult = (
//         Math.round(result(bill.value, custom.value) * 100) / 100
//       ).toFixed(2);
//
//       console.log(finallResult);
//       let total = result(bill.value, custom.value) * people.value;
//       if (custom.value > "") {
//         output1.textContent = `$${finallResult}`;
//         output2.textContent = `$${(Math.round(total * 100) / 100).toFixed(2)}`;
//         custom.value = "";
//       } else {
//         output1.textContent = `$${finallResult}`;
//         output2.textContent = `$${(Math.round(total * 100) / 100).toFixed(2)}`;
//       }
//     }
//   });
// }
//
// finallResult();

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
