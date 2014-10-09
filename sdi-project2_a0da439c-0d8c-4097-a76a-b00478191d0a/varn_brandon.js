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
var needToBuyYogurt = true;
var areYouGoingToBuyYogurt;

//function variable
var numberOfYogurtBought;
var numberOfYogurtBought = function () {
	if (moneyInBank >50 || moneyInBank < 50){}
};

//function for walking home
	var goingHome
	var goingHome = function(walk) {
		var distance
		promptAnswer = prompt ("How many blocks is it to your house?")
		distance = parseInt(promptAnswer)
		alert (walk + " " + distance + " blocks.") 
		
		
};


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
	for (yogurtHaveInFridge; yogurtHaveInFridge > 0; yogurtHaveInFridge-=4)
		console.log("We have " + yogurtHaveInFridge + " yogurts" + " they take one out each time.");
	
}	

alert ("Now all the yogurt is gone!");


areYouGoingToBuyYogurt = confirm ("Now that we are out of yogurt I have to go buy more.  If not we will be out of yogurt for the kids");
	//making sure he wants to get yogurt for the kids
	if (areYouGoingToBuyYogurt === true ){
    alert ("I'll go and check to see if I have enough in the bank.");
    } else {
    alert ("My kids will be starving for yogurt and will probably not be happy.");
}

	//We will now prompt for the amount of money they have in the bank
	
	promptAnswer = prompt ("How much money do you have in the bank.");
	moneyInBank = parseInt(promptAnswer);
	
	numberOfYogurtBought();	//creating a true false statement with our function

	if (moneyInBank > 50)  // making them have to have more then 50 dollars to go to gas station
	//They should have equal to or more then 50 dollars.
	alert ("I am rich, I am going to take my lazy butt to the gas station even though each 	yogurt costs " + gasStationPrice + ".");
	
	else 
	
	//If they have less then 50 they are headed to the gas station. 
	alert ("Each yogurt at the gas station is a whoping " + gasStationPrice + " I am way to poor to afford that, I am headed to Sams Club.  Sams Club only costs " + samsClubPrice + ".");

alert ("Now that I am at the store I need to find out how many yogurts I can buy!");

//we now need to see how many they can buy based off how much they have in the bank.

 
numberOfYogurtBought(moneyInBank); //creating true false for our function to determine how many we can buy
	if (moneyInBank > 50)  // If they are rich we will divide by the gas station price
	alert ("I spent a lot of money and bought " + (parseInt(moneyInBank/gasStationPrice)) + ".");
	
	else  //If they are broke we will divide by the sams club price
	alert ("I don't have much money and could only buy " + (parseInt(moneyInBank/samsClubPrice)) + ".");
	
	//console.log("We now have more yogurt in the fridge for the kids.");
	alert ("I'm going to leave my car here and walk home just because I need a jog that I like to call the function jog.");
	
goingHome("I have to walk");