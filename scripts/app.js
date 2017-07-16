console.log('hi');


var firstSentence = 'Go to the Southpole';
var secondSentence = 'Go to South America';
var thirdSentence = 'You were a Martian';
var fourthSentence = 'You were Santa Clause!';
var fifthSentence = 'Conquered the world';
var sixthSentence = 'Over took the mean people';
var seventhSentence = 'You made everyone healthy';
var eighthSentence = 'You captured all the bad people';

window.onload = function(event)	{


	var nameInput = document.getElementById('first_name');
	var nameBtn = document.getElementById('name_btn');
	var resetBtn = document.getElementById('reset_btn');
	var firstChoice = document.getElementById('choice-one');
	var secondChoice = document.getElementById('choice-two');
	var thirdChoice = document.getElementById('choice-three');
	var fourthChoice = document.getElementById('choice-four');
	var fifthChoice = document.getElementById('choice-five');
	var sixthChoice = document.getElementById('choice-six');
	var seventhChoice = document.getElementById('choice-seven');
	var eighthChoice= document.getElementById('choice-eight');



	firstChoice.onclick = function(event) {
		createRow(firstSentence); 
		document.getElementById('first-step').style.display = 'none';
	}

	secondChoice.onclick = function(event) {
		createRow(secondSentence); 
		document.getElementById('first-step').style.display = 'none';
	}

	thirdChoice.onclick = function(event) {
		createRow(thirdSentence); 
		document.getElementById('second-step').style.display = 'none';
	}


	fourthChoice.onclick = function(event) {
		createRow(fourthSentence); 
		document.getElementById('third-step').style.display = 'none';
	}

	
	fifthChoice.onclick = function(event) {
		createRow(fifthSentence); 
		document.getElementById('fourth-step').style.display = 'none';
	}

	
	sixthChoice.onclick = function(event) { 
		createRow(sixthSentence); 
		document.getElementById('fifth-step').style.display = 'none';
	}
 

	seventhChoice.onclick = function(event) {
		createRow(seventhSentence); 
		document.getElementById('sixth-step').style.display = 'none';
	}


	eighthChoice.onclick = function(event) {
		createRow(eighthSentence); 
		document.getElementById('seventh-step').style.display = 'none';
	}


	nameBtn.onclick = function(event) {
		//console.log(event)
		console.log(nameInput.value);
		createRow('Welcome aboard, ' + nameInput.value); 
	}

	resetBtn.onclick = function(event) {
		//refresh page function 
		console.log(reset_btn);
		window.location = window.location;
	}

	console.log(nameInput, nameBtn); 

	}
	// psuedo code imput, change all steps to display/inline block for all steps, get rid of the sentences


	// this function creates and adds rows to our app
function createRow(words) {
  console.log(words);
  // we need a new div
  var row = document.createElement('div');
  var col = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = words;
  row.append(col);
  row.className = 'row';
  col.className = 'col s12';
  col.append(p);
  console.log(row);
  // append the whole thing to app
  var app = document.getElementById('app');
  app.append(row);
}


