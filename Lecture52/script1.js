(function (window) {
	var yashGreeter = {};
	yashGreeter.name = "Yash";
	var greeting = "Hello";
	yashGreeter.sayHello = function () {
		console.log(greeting + yashGreeter.name);
	}
	window.yashGreeter=yashGreeter;
})(window);