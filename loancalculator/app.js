// event listeners
document.querySelector('#loan-form').addEventListener('submit', function(e){
  // hide results
  document.querySelector('#results').style.display = 'none';
  // show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calcLoan, 2000);

  e.preventDefault();
});

// event functions
function calcLoan(e){

  // UI variables
  const amountLoan = document.querySelector('#amount');
  const amountInterest = document.querySelector('#interest');
  const amountYears = document.querySelector('#years');

  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  // calculations
  const principal = parseFloat(amountLoan.value);
  const calcInterest = parseFloat(amountInterest.value) / 100 / 12;
  const calcPayments = parseFloat(amountYears.value) * 12;

  const x = Math.pow(1 + calcInterest, calcPayments);
  const monthly = (principal*x*calcInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calcPayments).toFixed(2);
    totalInterest.value = ((monthly * calcPayments)-principal).toFixed(2);
    // show results
    document.querySelector('#results').style.display = 'block';
    // hide spinner
    document.querySelector('#loading').style.display = 'none';
  } else{
    showError('Please check you numbers');
  }

}

function showError(error){
  // hide results
  document.querySelector('#results').style.display = 'none';
  // hide spinner
  document.querySelector('#loading').style.display = 'none';

  // create div
  const errorDiv = document.createElement('div');
  // get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // add class
  errorDiv.className = 'alert alert-danger';
  // create text node and append div
  errorDiv.appendChild(document.createTextNode(error));
  // insert error above heading
  card.insertBefore(errorDiv, heading);
  // clear error (timeout)
  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}
