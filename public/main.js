var loan_amount = 0;
var loan_term = 0;
var apr = 0;
var mPmt = 0;


function getValues() {
  // @ts-ignore
  loan_amount = document.getElementById('loan_amount').value;
  // @ts-ignore
  loan_term = document.getElementById('loan_term').value;
  // @ts-ignore
  apr = document.getElementById('apr').value;
  apr /= 1200;
  loan_term *= 12;
  calculatePayment();
};


function calculatePayment() {
  var payment = (loan_amount * (apr * Math.pow(1 + apr, loan_term))) / (Math.pow(1 + apr, loan_term) - 1);
  // @ts-ignore
  mPmt = payment.toFixed(2);
  drawPayment();

};

function drawPayment() {
  let template = ''
  template += `
  <div id="mPmt" class="flex justify-between items-center rounded-xl border-gray-400 mx-auto mt-4 mb-4 max-w-xl bg-white ">
  <h1 class="py-4 px-4 text-red-400">Monthly Mortgage Payment:</h1>
  <strong class="px-4 text-gray-400">$${mPmt} per month</strong>
  </div>
  `
  // @ts-ignore
  document.getElementById('mPmt').innerHTML = template;
}


drawPayment();