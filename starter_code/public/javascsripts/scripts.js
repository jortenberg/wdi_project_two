window.onload = function(){

	var addButton = document.getElementById("add_button");

		// function addToList(){}

		// button.addEventListener("click", addToList);

		addButton.addEventListener("click", function(){
			var textbox = document.getElementById("user_input");
			var text = textbox.value;
			if(text != ""){
				var listItem = document.createElement("li");
				// listItem.innerText = text;
				listItem.innerHTML = "<h3>" + text + "</h3>";

				var list = document.getElementById("list");
				list.appendChild(listItem);

				textbox.value = "";
			}
		});

		var deleteButton = document.getElementById("delete_button");

		deleteButton.addEventListener("click", function(){
			var textbox = document.getElementById("user_input");
			var text = textbox.value;

			var list = document.getElementById("list");
			var listItems = list.children;

			for( var i = 0; i < listItems.length; i++){
				if(listItems[i].innerText == text){
					listItems[i].parentNode.removeChild(listItems[i]);
				}
			}

			textbox.value = "";
		});

	};


// person = {"name": "Amy Williamson",
// 	"age": 20,
// 	"address": "12 Pine Street, New York, NY 10021",
// 	"phone_number": "917-406-5678",
// 	"picture": "headshot.jpg",
// 	"category_id": 2}

