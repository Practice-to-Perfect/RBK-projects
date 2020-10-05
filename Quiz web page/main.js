function marks() {
	var Q1 = document.quiz.Q1.value;
	var Q2 = document.quiz.Q2.value;	
	var Q3 = document.quiz.Q3.value;
	var Q4 = document.quiz.Q4.value;
	var Q5 = document.quiz.Q5.value;
	var trueValues = 0;
	if(Q1 === "Dubai (Burj Khalifa)"){
		trueValues++;
	}
	if(Q2 === "2007"){
		trueValues++;
	}
	if(Q3 === "Museum of Modern Art, New York"){
		trueValues++;
	}
	if(Q4 === "Amazon") {
		trueValues++;
	}
	if(Q5 === "Graphics Interchange Format") {
		trueValues++;
	}
var notes=["Hmmmm!","Okay we can work with this..","Great! You can do more..","Wow! You're well educated!"];
var images=["imge/1.gif","imge/2.gif","imge/3.gif","imge/44.gif"];

if (trueValues==0||trueValues==1){
	document.getElementById("note").innerHTML= notes[0];
	document.getElementById("image").src=images[0];
} 
if (trueValues==2){
	document.getElementById("note").innerHTML= notes[1];
	 document.getElementById("image").src=images[1];
}
if (trueValues==3||trueValues==4){
	document.getElementById("note").innerHTML= notes[2];
	 document.getElementById("image").src=images[2];
}
if (trueValues==5){
	document.getElementById("note").innerHTML= notes[3];
	document.getElementById("image").src=images[3];
} 
    document.getElementById("afterSubmit").style.visibility = "visible";
 	document.getElementById("numberCorrect").innerHTML = "You got " + trueValues + " right of 5 Questions!";
}


function canStart(){
	alert("You can start your quiz now!")
}
