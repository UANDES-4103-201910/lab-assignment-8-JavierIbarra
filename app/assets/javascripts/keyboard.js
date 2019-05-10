// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	class KeyboardController {

		constructor(id_target) {
	        this.target= $(id_target);
	        this.element = document.getElementById("print");
    	}

    	pressed(key) {
	        if (key.text().includes("Tab")){
	          this.element.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
	        }
	        else if (key.hasClass("key-space")){
	          this.element.innerHTML += "&nbsp"
	        }
	        else if (key.text().includes("Enter")){
	          this.element.innerHTML += "<p>"
	        }
	        else if (key.text().includes("Shift")){
	          this.element.innerHTML += "Shift"
	        }
	        else if (key.text().includes("Accept")){
	          alert("Accepted")
	        }
	        else if (key.text().includes("Cancel")){
	          alert("Canceled")
	        }
	        else if (key.text().includes("Bksp")){
		        if (this.element.innerHTML.length > 0){
		        	this.element.innerHTML = this.element.innerHTML.slice(0,-1)
		        }
	        }
	        else{
	          this.element.innerHTML += key.text().trim().toLowerCase() 
	        }
	    }

	    hideKeyboard(){
	      	var k = document.getElementById("kcontainer")
	      	if (k.style.display == "none"){
	        	k.style.display = "block"
	      	}
	      	else{
	        	k.style.display = "none"
	      	}
	    }
	}

	var x = new KeyboardController("print")

	$(".key").click(function(){ x.pressed($(this)) });

	$("#btn").click(function(){ x.hideKeyboard() });
});
