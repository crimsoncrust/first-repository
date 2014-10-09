//Author Brandon C Varn
//SDI 2

var childrenEatYogurt;
var yogurtGone = true;
var numberOfChildren = 4;
var yogurtHaveInFridge;
var moreThenOneYogurt = true;
var promptAnswer;
var goToGasStation;
var goToSamsClub;
var gasStationPrice = 2.50;
var samsClubPrice = 1.50;
var moneyInBank;
var needToBuyYogurt = true


console.log("My children eat a lot of yogurt");
console.log("Each child eats a yogurt every day.");
console.log("Everyday I have to check my fridge for the number of yogurt left.");
console.log("Once those little kids eat all the yogurt I have to buy more");
console.log("I have two choices of markets to buy yogurt.");
console.log("The first market is the gas station across the street, the other is Sams club.  Sam's club is cheaper, the gas station is closer.");
console.log("It is cheaper to go to Sams Club, but sometimes I am lazy.");
console.log("If I have enough in my bank I will go to the gas station instead of Sams Club.");

	if (moreThenOneYogurt === true){ 
    	 //this should prompt for number of yogurt
		 promptAnswer = prompt ("How much Yogurt do you have in your fridge");
		 //This should remove 4 yogurts a day until you have no yogurt. looping each time.
		 yogurtHaveInFridge = parseInt(promptAnswer);
		 //This should now subtract 4 yogurt each day until the yogurt runs out.
	for (yogurtHaveInFridge - 4; yogurtHaveInFridge > 0; yogurtHaveInFridge--)
		console.log("We have " + yogurtHaveInFridge + " yogurts" + " they take one out each time.");
	
}	

console.log("Now all the yogurt is gone!");

console.log("Now that we are out of yogurt I have to go buy more.");
	
if (needToBuyYogurt=== true){
	promptAnswer = prompt ("How much money do you have in the bank.");
	moneyInBank = parseInt(promptAnswer);
	//They should have equal to or more then 50 dollars.
	moneyInBank >= 50
	console.log("I am rich, I am going to take my lazy butt to the gas station even though each yogurt costs " + gasStationPrice + ".");
} else {
	//If they have less then 50 they are headed to the gas station.
	console.log("Each yogurt at the gas station is a whoping " + gasStationPrice + " I am way to poor to afford that, I am headed to Sams Club.  Sams Club only costs " + samsClubPrice + ".");
}
