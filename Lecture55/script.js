//Event handling'

document.addEventListener("DOMContentLoaded",
 function(event) {

	function sayHello(event) {
		console.log(event);
		var name = document.getElementById("name").value;
		var message = "<h2>Hello " + name + "!</h2>";

	/*	document.getElementById("content").textContent = message;
	*/
		document.getElementById("content").innerHTML = message;

		if (name === "student") {
			var title = document.querySelector("#title").textContent;

			title += " & LOVEIN IT!";

			document.querySelector("h1").textContent = title;
		}

	}
	document.querySelector("button").addEventListener("click",sayHello);

	document.querySelector("body").addEventListener("mousemove",
		function (event) {
			if (event.shiftKey) {
				console.log("x: " + event.clientX);
				console.log("y: " + event.clientY);
			}
		 }
	  );
	
 }

);

//Unobstrusive event binding
/*document.querySelector("button").addEventListener("click",sayHello);*/

/*document.querySelector("button").onclick=sayHello;*/