function calculateInvestment() {
    var initialAmount = parseFloat(document.getElementById("initialAmount").value);
    var monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
    var annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
    var years = parseInt(document.getElementById("years").value);
    var months = years * 12;

    var futureValue = initialAmount;
    for (var i = 0; i < months; i++) {
        futureValue *= (1 + (annualInterestRate / 100 / 12)); // juros mensais
        futureValue += monthlyContribution;
    }
    futureValue = futureValue.toFixed(2);

    document.getElementById("result").innerHTML = "Valor do investimento após " + years + " anos: R$ " + futureValue;
}