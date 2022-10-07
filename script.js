var b=prompt("Confirm name:")

function validate() {

	/*if(document.getElememtById('textbox').checked){
		alert("Do you want to submit?")
	}
	else{
		alert("Answer all questions.")
	}*/


	var question1= document.QUIZ.question1.value;
	var question2= document.QUIZ.question2.value;
	var question3= document.QUIZ.question3.value;
	var question4= document.QUIZ.question4.value;
	var question5= document.QUIZ.question5.value;
	var question6= document.QUIZ.question6.value;
	var correct=0;

	if(question1=="Abuja"){
		correct++;
	}
	if(question2=="Akure"){
		correct++;
	}
	if(question3=="Sublimation"){
		correct++;
	}
	if(question4=="22/7"){
		correct++;
	}
	if(question5=="1963"){
		correct++;
	}
	if(question6=="Vaccum tube"){
		correct++;
	}

	if(document.QUIZ.question2.checked){
		alert("Do you want to submit")
	}
	else{
		alert("Do you want to submit?")
	}


	/*var remark= [" Excellent! ", "Great Job!", " You can do better " , "Fair" , " Poor" ];

	var range;
	if(correct<1){
		range=4;
	}
	if(correct>0 && correct<3){
		range=3;
	}
	if(correct=3 || correct=4){
		range=2;
	}
	if(correct=5){
		range=1;
	}
	if(correct>5){
		range=0;
	}*/


	document.getElementById("when_done").style.visibility = "visible";

	//document.getElementById("remark").innerHTML = remark[range];
	document.getElementById("number_correct").innerHTML = b + " , you got " + correct + " correct. ";
}