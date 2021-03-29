var array = new Array();
array[0] = "Yash";
array[1] = 2;
array[2] = function (name) {
	console.log("Hello " + name);
};

array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2]("Yaakov");
console.log(array[3].course)



//Short hand array creation
var names = ["Yash","Pritesh","Vrund"];
//console.log(names);

for (var i=0; i<names.length; i++) {
	console.log("Hello " + names[i]);
}



var names2 = ["Yash","Pritesh","Vrund"];

var myObj = {
	name: "Yash",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};

names2.greeting = "Hi!";

for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}