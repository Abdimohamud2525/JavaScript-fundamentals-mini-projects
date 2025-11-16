// Minimum income and credit score needed for each loan type
const minIncomeForDublix = 60000;
const minCreditScoreforDublix = 700;

const minIncomeForCondo = 40000;
const minCreditScoreForCondo = 650;

const minIncomeForCar = 20000;
const minCreditScoreForCar = 600;

function checkLoanForApp(annualIncome, creditScore) {
  if (
    annualIncome >= minIncomeForDublix &&
    creditScore >= minCreditScoreforDublix
  ) {
    return "Eligible for dublix loan";
  } else if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "Eligible for condo loan";
  } else if (
    annualIncome >= minIncomeForCar &&
    creditScore >= minCreditScoreForCar
  ) {
    return "Eligible for car loan";
  } else {
    return "Not eligible for dublix loan";
  }
}
console.log(checkLoanForApp(70000, 720)); // Eligible for dublix loan
console.log(checkLoanForApp(40000, 750)); // Eligible for condo loan
console.log(checkLoanForApp(25000, 610)); // Eligible for car loan
console.log(checkLoanForApp(15000, 580)); // Not eligible for dublix loan
