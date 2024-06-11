var income;
var monthlySpending;
var currency = "USD";
var totalBudget = 0;
var totalSpending=parseFloat(0);
Chart.defaults.global.defaultFontColor = "white";
//var spending = [];
//dictionary of all spending types
var spendingType = {"H" :["Housing", 0], "F":["Food/Drink", 0], "T" : ["Transportation",0], "Ed" : ["Education", 0],
 "Sh" : ["Shopping", 0], "B" : ["Bills/Utilities",0], "En" : ["Entertainment",0], "O" :["Other",0], "Sa" : ["Savings", 0] };
var spendingPercentage = {"H" :["Housing", 0], "F":["Food/Drink", 0], "T" : ["Transportation",0], "Ed" : ["Education", 0],
 "Sh" : ["Shopping", 0], "B" : ["Bills/Utilities",0], "En" : ["Entertainment",0], "O" :["Other",0], "Sa" : ["Savings", 0] };

function makeWord(){
	var word = document.getElementById("word");
	word.style.display = "block";
}

function getBudget(){
	var budgetInput = parseFloat(document.getElementById("userBudget").value);
	if(budgetInput>0)
	{
		totalBudget = budgetInput
	}
	WriteAnalysis();
}

function PutCurrency(){
	var paragraph = document.getElementById("currencyTag");
	//var text = document.createTextNode(currency);
	paragraph.innerHTML = currency;
	console.log("here");

}
function AddSpending(){
	var money = document.getElementById("Spending").value;
	if(money === "")money=0.00;
	var type = document.getElementById("spendingType");
	var typeHold;
	for(const [key,value] of Object.entries(spendingType)){
		if(type.value.localeCompare(key)==0){
			value[1]+=parseFloat(money);
			typeHold=value[0];
		}
	}
	
	var table = document.getElementById("entries")
	var row =table.insertRow(1);
	var amount = row.insertCell(0);
	var category = row.insertCell(0);

	// Add some text to the new cells:
	totalSpending+=parseFloat(money);
	amount.innerHTML = "$"+parseFloat(money).toFixed(2);
	category.innerHTML = typeHold;
	calculatePercentage();
	chart();
	WriteAnalysis();
}
//PutCurrency();

function calculatePercentage(){
	for(const [key,value] of Object.entries(spendingPercentage)){
		value[1] = 100*parseFloat(spendingType[key][1])/totalSpending;
		//console.log(value[1]);
	}
}

function WriteAnalysis(){
	var analysis =document.getElementById("spending_analysis");
	analysis.innerHTML= "Your total spending this period is: $" + totalSpending + ".";
	var analysis2 = document.getElementById("spending_analysis2");
	analysis2.innerHTML = "You have $" + (totalBudget-totalSpending).toString() + " remaining of your  $"+ totalBudget+ " budget.";
}

function addToCSV(){

}
