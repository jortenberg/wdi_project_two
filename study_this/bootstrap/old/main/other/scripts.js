people = [
{
	"name": "Amy Williamson",
	"age": 20,
	"address": "12 Pine Street, New York, NY 10021",
	"phone_number": "917-406-5678",
	"picture": "./img/avatar.png",
	"category_id": 2
},
{
	"name": "Judy Ortenberg",
	"age": 60,
	"address": "20 Princeton Street, Rockville Centre, NY 11570",
	"phone_number": "917-406-7812",
	"picture": "./img/avatar.png",
	"category_id": 2
},
{
	"name": "Bari Williamson",
	"age": 17,
	"address": "14 The Lock, Rockville Centre, NY 11570",
	"phone_number": "917-406-5892",
	"picture": "./img/avatar.png",
	"category_id": 2
}
]


window.onload = function(){

	var tableBody = document.getElementById("contacts");
	var tableRow = document.createElement("tr");
	tableBody.appendChild(tableRow);

	for (var i = 0; i < people.length; i++) {
		var tableCellPic = document.createElement("td");
		tableCellPic.innerHTML = "<img src=" + people[i]["picture"] + ">";
		tableRow.appendChild(tableCellPic);

		var tableCellName = document.createElement("td");
		tableCellName.innerHTML = "<h5>" + people[i]["name"] + "</h5>";
		tableRow.appendChild(tableCellName);

		var tableCellAge = document.createElement("td");
		tableCellAge.innerHTML = "<h5>" + people[i]["age"] + "</h5>";
		tableRow.appendChild(tableCellAge);

		var tableCellAddress = document.createElement("td");
		tableCellAddress.innerHTML = "<h5>" + people[i]["address"] + "</h5>";
		tableRow.appendChild(tableCellAddress);

		var tableCellPhone = document.createElement("td");
		tableCellPhone.innerHTML = "<h5>" + people[i]["phone_number"] + "</h5>";
		tableRow.appendChild(tableCellPhone);

		var tableCellRadEdit = document.createElement("td");
		tableCellRadEdit.innerHTML = "<input id='edit_contact_dynamicidthis' type='radio'>";
		tableRow.appendChild(tableCellRadEdit);

		var tableCellRadDelete = document.createElement("td");
		tableCellRadDelete.innerHTML = "<input id='delete_contact_dynamicidthis' type='radio'>";
		tableRow.appendChild(tableCellRadDelete);
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


