let randomNumber = Math.floor((Math.random() * 100) + 1);



function guessNumber() {

		//Collect input from the user
		let guess = document.querySelector('.inputs-Values').value;

		//If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
	
		//If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

		//If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

		//If the user has guessed the random number correctly print out the randomnumber with a message "is correct, You Win!!!"
	
		//Extension task
		//Develop the application further and display the number of tries taken for the user to guess the number
		//If the user guesses the random number within the number of tries, print 'It took you ' + TriesTaken + ' tries';

		//Extension task
		//Lets make our application a little more cooler, incorporate a tries functionality, where a user only has certain number of tries to guess the number
		//If the user were to exeed the number of tries the print out a message print 'You Lose, the number was ' + randomNumber;
	
	
}

//For this task we will be making newGame button function which will reset our game, once the user clicks on thos button the user will have new random number to guess
//1. reset the values inside the body of the function
//2. Attach our new game button using an evenlistener to the .btnNewGame button
function newGame() {

	//Your code here
	//Reset randomNumber
	//Reset users input feild

	//Extention 
	//Reset tries, and triesTaken by the user


}

//keyboard exception
function keyBoardEvents(e) {

	if (e.keyCode === 13) {
		guessNumber();
	}

}


document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.addEventListener('keypress', keyBoardEvents);