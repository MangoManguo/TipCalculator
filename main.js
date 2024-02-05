// Tip Calculator

// Event Listeners

document.getElementById("calc").addEventListener("click", calc);
document.getElementById("clear").addEventListener("click", clearCalc);

// Variables

let price = document.getElementById("price");
let tipPercent = document.getElementById("tipPercent");
let people = document.getElementById("people");

// Functions

function calc() {
  //input
  let Price = +price.value;
  let Percent = +tipPercent.value;
  let People = +people.value;

  //process
  let tipAm = (Percent / 100) * Price;
  tipAm.toFixed(2);
  tipAm = Math.round(tipAm * 100) / 100;

  let total = tipAm + Price;
  total.toFixed(2);
  total = Math.round(total * 100) / 100;

  let APP = (tipAm + total) / People;
  APP.toFixed(2);
  APP = Math.round(APP * 100) / 100;

  //output
  document.getElementById("tipAmount").innerHTML = `$${tipAm}`;
  document.getElementById("total").innerHTML = `$${total}`;
  document.getElementById("perPerson").innerHTML = `$${APP}`;
  document.getElementById(
    "moneyGif"
  ).innerHTML = `<img src="img/Money.gif" alt="Money" width="450px" />`;
}

function clearCalc() {
  price.value = ``;
  tipPercent.value = ``;
  people.value = ``;

  document.getElementById("tipAmount").innerHTML = ``;
  document.getElementById("total").innerHTML = ``;
  document.getElementById("perPerson").innerHTML = ``;
  document.getElementById("moneyGif").innerHTML = ``;
}
