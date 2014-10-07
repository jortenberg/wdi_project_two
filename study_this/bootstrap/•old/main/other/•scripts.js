people = [
{
	"name": "Amy Williamson",
	"age": 20,
	"address": "12 Pine Street, New York, NY 10021",
	"phone_number": "917-406-5678",
	"picture": "./images/avatar.png",
	"category_id": 2
},
{
	"name": "Judy Ortenberg",
	"age": 60,
	"address": "20 Princeton Street, Rockville Centre, NY 11570",
	"phone_number": "917-406-7812",
	"picture": "./images/avatar.png",
	"category_id": 2
},
{
	"name": "Bari Williamson",
	"age": 17,
	"address": "14 The Lock, Rockville Centre, NY 11570",
	"phone_number": "917-406-5892",
	"picture": "./images/avatar.png",
	"category_id": 2
}
]


window.onload = function(){

	var list = document.getElementById("list");
		for (var i = 0; i < people.length; i++) {
			var listItem = document.createElement("li");
			listItem.innerHTML = "<h5>" + people[i]["name"] + people[i]["age"] + people[i]["address"] + "</h5>";
			list.appendChild(listItem);
	}

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

			var list = document.getElementById("list");
			var listItems = list.children;

			for (var i = 0; i < listItems.length; i++){
				if (listItems[i].innerText == textbox.value){
					listItems[i].parentNode.removeChild(listItems[i]);
				}
			}

			textbox.value = "";
		});

	};


