
// //each function
// function each(coll, f) {
// if(Array.isArray(coll)) {
// 	for(var i = 0; i < coll.length; i++) {
// 		f(coll[i], i);
// 	}
// } else {
// 	for(var key in coll) {
// 		f(coll[key], key);
// 	}
// }
// }

// //filter function
// function filter(array, predicate) {
// 	var acc = [];
// 	each(array, function(element) {
// 		acc.push(element);
// 	});
// 	return acc;
// }

// var trueValues = ["Dubai (Burj Khalifa)", "2007", "Museum of Modern Art, New York", "Amazon"];

// function marks(array) {
// return filter( === trueValues);
// }

function marks() {
	var Q1 = document.quiz.Q1.value;
	var Q2 = document.quiz.Q2.value;	
	var Q3 = document.quiz.Q3.value;
	var Q4 = document.quiz.Q4.value;
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
var notes=["hmmmm!","okay we can work with this ..","great!you can do more","WOW!! you are well educated!"];
// var images=["imge/onee.png","imge/twoo.jpg","imge/three.jpg", "imge/fourr.png"];
 if (trueValues==0||trueValues==1){
	document.getElementById("note").innerHTML= notes[0];
	// document.getElementById("image").src=images[0];
}
 if (trueValues==2){
	document.getElementById("note").innerHTML= notes[1];
	// document.getElementById("image").src=images[1];
}

if (trueValues==3){
	document.getElementById("note").innerHTML= notes[2];
	// document.getElementById("image").src=images[2];
}
 if (trueValues==4){
	document.getElementById("note").innerHTML= notes[3];
	// document.getElementById("image").src=images[3];
}
    document.getElementById("afterSubmit").style.visibility = "visible";
 	document.getElementById("numberCorrect").innerHTML = "YOU GOT " + trueValues + " of 4 Questions!";
}
