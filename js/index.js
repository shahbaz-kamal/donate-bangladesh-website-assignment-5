// //Essential functions starts
// *function for adding class hidden

function pleaseHide(id) {
  const idElement = document.getElementById(id);
  idElement.classList.add("hidden");
}
function pleaseShow(id) {
  const idElement = document.getElementById(id);
  idElement.classList.remove("hidden");
}

// //Essential functions ends

// console.log("Project setum Done");
// *targeting the essential variable
const donationBtnEl = document.getElementById("donation-btn");
const historyBtnEl = document.getElementById("history-btn");
// const cardNoakhaliEl = document.getElementById("card-noakhali");
// const cardFeniEl = document.getElementById("card-feni");
// const cardQuotaEl = document.getElementById("card-quota");

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
