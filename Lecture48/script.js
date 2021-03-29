function test1() {
	console.log(this);
	this.myName = "Yaakov";
}

test1();
console.log(window.myName);

function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this.radius,2)
};

var myCircle = new Circle(10);
console.log(myCircle.getArea);