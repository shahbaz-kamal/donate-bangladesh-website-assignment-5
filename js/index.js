// //Essential functions starts

// *function 1: for hiding a section
function pleaseHide(id) {
  const idElement = document.getElementById(id);
  idElement.classList.add("hidden");
}
// *function 2:for displaying a section
function pleaseShow(id) {
  const idElement = document.getElementById(id);
  idElement.classList.remove("hidden");
}
// *function 3: for showing alert
function alertMessage(element) {
  const valueOfInput = element.value;
  if (valueOfInput < 0 || isNaN(valueOfInput)) {
    if (valueOfInput < 0 || isNaN(valueOfInput)) {
      alert("Invalid Donation Amount");
      return false;
    } else if (valueOfInput === 0) {
      alert(
        "Donating 0 Tk. is not actualy donating, please donate greater than 0 tk."
      );
      return false;
    }
  }
  return true;
}
// *function 4: Adding the donation amount to the card amount

function addingCard(textboxInputIdEl, cardBalanceEl, totalBalanceEl) {
  const textboxInput = parseFloat(textboxInputIdEl.value);
  const cardBalance = parseFloat(cardBalanceEl.innerText);
  const totalBalance = parseFloat(totalBalanceEl.innerText);
  const newCardBalance = cardBalance + textboxInput;
  const newTotalBalance = totalBalance - textboxInput;
  cardBalanceEl.innerText = newCardBalance;
  totalBalanceEl.innerText = newTotalBalance;
}

// //Essential functions ends

// console.log("Project setum Done");
// *targeting the essential variables
const donationBtnEl = document.getElementById("donation-btn");
const historyBtnEl = document.getElementById("history-btn");
// const cardNoakhaliEl = document.getElementById("card-noakhali");
// const cardFeniEl = document.getElementById("card-feni");
// const cardQuotaEl = document.getElementById("card-quota");
const totalBalanceEl = document.getElementById("total-balance");
// noakhali
const balanceNoakhaliEl = document.getElementById("balance-noakhali");
const inputNoakhaliEl = document.getElementById("input-noakhali");
const DonateNoakhaliBtnEl = document.getElementById("donate-noakhali-btn");
const modalNoakhali = document.getElementById("my_modal_1");
// feni
const balanceFeniEl = document.getElementById("balance-feni");
const inputFeniEl = document.getElementById("input-feni");
const DonateFeniBtnEl = document.getElementById("donate-feni-btn");
const modalFeniEl = document.getElementById("my_modal_feni");
// feni

// *Updating History button & Donation button functionality while clicking history
historyBtnEl.addEventListener("click", function (event) {
  historyBtnEl.classList.add(
    "font-semibold",
    "bg-btn-primary",
    "text-color-primary"
  );
  historyBtnEl.classList.remove(
    "font-medium",
    "border",
    "border-stroke-primary",
    "text-color-secondary"
  );
  donationBtnEl.classList.remove(
    "font-semibold",
    "bg-btn-primary",
    "text-color-primary"
  );
  donationBtnEl.classList.add(
    "font-medium",
    "border",
    "border-stroke-primary",
    "text-color-secondary"
  );
  pleaseHide("card-noakhali");
  pleaseHide("card-feni");
  pleaseHide("card-quota");
  pleaseShow("card-history");
});

// *Updating History button & Donation button functionality while clicking Donation
donationBtnEl.addEventListener("click", function (event) {
  donationBtnEl.classList.add(
    "font-semibold",
    "bg-btn-primary",
    "text-color-primary"
  );
  donationBtnEl.classList.remove(
    "font-medium",
    "border",
    "border-stroke-primary",
    "text-color-secondary"
  );
  historyBtnEl.classList.remove(
    "font-semibold",
    "bg-btn-primary",
    "text-color-primary"
  );
  historyBtnEl.classList.add(
    "font-medium",
    "border",
    "border-stroke-primary",
    "text-color-secondary"
  );
  pleaseShow("card-noakhali");
  pleaseShow("card-feni");
  pleaseShow("card-quota");
  pleaseHide("card-history");
});
// *Functionality of Noakhali Donate button

DonateNoakhaliBtnEl.addEventListener("click", function () {
  if (alertMessage(inputNoakhaliEl)) {
    addingCard(inputNoakhaliEl, balanceNoakhaliEl, totalBalanceEl);
    modalNoakhali.showModal();
  }
});
DonateFeniBtnEl.addEventListener("click", function () {
  if (alertMessage(inputFeniEl)) {
    addingCard(inputFeniEl, balanceFeniEl, totalBalanceEl);
    modalFeniEl.showModal();
  }
});
