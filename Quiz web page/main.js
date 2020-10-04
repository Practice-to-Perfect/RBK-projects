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

    document.getElementById("afterSubmit").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML = trueValues + " / 4";
}



