window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");

  const inputs = {
    amount: +(10000),
    years: +(5),
    rate: +(5),
  }
  amount.value = inputs.amount;
  years.value = inputs.years;
  rate.value = inputs.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let monthly = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate / 1200);
  let n = (-1 * Math.floor(values.years * 12));
  let payment = (p * i)/(1-((1+i)**n));
  let roundPayment = payment.toFixed(2);
  return roundPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthPay = document.getElementById('monthly-payment');
  monthPay.innerText = `$ ${monthly}`;
}
