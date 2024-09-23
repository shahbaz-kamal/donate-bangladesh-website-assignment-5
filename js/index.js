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
  const valueOfTotalAmount = parseFloat(
    document.getElementById("total-balance").innerText
  );
  if (
    parseFloat(valueOfInput) < 0 ||
    isNaN(valueOfInput) ||
    valueOfInput === "" ||
    valueOfInput > valueOfTotalAmount ||
    valueOfInput === "0"
  ) {
    if (
      parseFloat(valueOfInput) < 0 ||
      isNaN(valueOfInput) ||
      valueOfInput === "" ||
      valueOfInput > valueOfTotalAmount
    ) {
      alert("Invalid Donation Amount");
    } else if (valueOfInput === "0") {
      alert(
        "Donating 0 Tk. is not actualy donating, please donate greater than 0 tk."
      );
    }
    element.value = "";
    return false;
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
  cardBalanceEl.innerText = newCardBalance.toFixed(2);
  totalBalanceEl.innerText = newTotalBalance.toFixed(2);
}

// //Essential functions ends

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
// Quota
const balanceQuotaEl = document.getElementById("balance-quota");
const inputQuotaEl = document.getElementById("input-quota");
const DonateQuotaBtnEl = document.getElementById("donate-quota-btn");
const modalQuotaEl = document.getElementById("my_modal_quota");

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
    const donatedAmount = parseFloat(inputNoakhaliEl.value).toFixed(2);
    // console.log(donatedAmount);

    // history functionality

    const historyItem = document.createElement("div");
    historyItem.className =
      "p-6 lg:p-8 border border-stroke-secondary rounded-2xl shadow-md";
    historyItem.innerHTML = `
        <h2 class="font-bold text-base lg:text-xl text-color-primary mb-3 lg-mb-4">
             ${donatedAmount} Taka is Donated for famine—2024 at Noakhali, Bangladesh
        </h2>
        <p class="font-light text-color-secondary text-sm lg:text-base">
            Date : ${new Date().toString()}
        </p>`;
    const cardHistory = document.getElementById("card-history");
    cardHistory.insertBefore(historyItem, cardHistory.firstChild);

    // clearing the input field
    inputNoakhaliEl.value = " ";
    // hiding No donation message
    pleaseHide("no-donation-message");
  }
});

// *Functionality of Feni Donate button
DonateFeniBtnEl.addEventListener("click", function () {
  if (alertMessage(inputFeniEl)) {
    addingCard(inputFeniEl, balanceFeniEl, totalBalanceEl);
    modalFeniEl.showModal();
    // history functionality
    const donatedAmount = parseFloat(inputFeniEl.value).toFixed(2);
    const historyItem = document.createElement("div");
    historyItem.className =
      "p-6 lg:p-8 border border-stroke-secondary rounded-2xl shadow-md";
    historyItem.innerHTML = `
        <h2 class="font-bold text-base lg:text-xl text-color-primary mb-3 lg-mb-4">
             ${donatedAmount} Taka is Donated for Flood Relief in Feni,BangIadesh
        </h2>
        <p class="font-light text-color-secondary text-sm lg:text-base">
            Date : ${new Date().toString()}
        </p>`;
    const cardHistory = document.getElementById("card-history");
    cardHistory.insertBefore(historyItem, cardHistory.firstChild);
    // Clearing input field
    inputFeniEl.value = " ";
    // hiding No donation message
    pleaseHide("no-donation-message");
  }
});

// *Functionality of Quota Donate button
DonateQuotaBtnEl.addEventListener("click", function () {
  if (alertMessage(inputQuotaEl)) {
    addingCard(inputQuotaEl, balanceQuotaEl, totalBalanceEl);
    modalQuotaEl.showModal();
    // history functionality
    const donatedAmount = parseFloat(inputQuotaEl.value).toFixed(2);
    const historyItem = document.createElement("div");
    historyItem.className =
      "p-6 lg:p-8 border border-stroke-secondary rounded-2xl shadow-md";
    historyItem.innerHTML = `
        <h2 class="font-bold text-base lg:text-xl text-color-primary mb-3 lg-mb-4">
             ${donatedAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
        </h2>
        <p class="font-light text-color-secondary text-sm lg:text-base">
            Date : ${new Date().toString()}
        </p>`;
    const cardHistory = document.getElementById("card-history");
    cardHistory.insertBefore(historyItem, cardHistory.firstChild);
    // Clearing input field
    inputQuotaEl.value = " ";
    // hiding No donation message
    pleaseHide("no-donation-message");
  }
});
