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

	for (var i = 0; i < people.length; i++) {
		var tableRow = document.createElement("tr");

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

		tableBody.appendChild(tableRow);
	}

	var mainSubmit = document.getElementById("main_submit");

		mainSubmit.addEventListener("click", function(){
			var contactName = document.getElementById("contact_name");
			var newName = contactName.value;
			console.log(newName);

			var contactPicture = document.getElementById("contact_picture");
			var newPicture = contactPicture.value;
			console.log(newPicture);

			var contactAge = document.getElementById("contact_age");
			var newAge = contactAge.value;
			console.log(newAge);

			var contactAddress = document.getElementById("contact_address");
			var newAddress = contactAddress.value;
			console.log(newAddress);

			var contactPhone = document.getElementById("contact_phone_number");
			var newPhone = contactAddress.value;
			console.log(newPhone);

			var contactFriend = document.getElementById("contact_friend");
			if contactFriend.value == "checked" {
				var newCategory_id = 1;
			}
			var contactFamily = document.getElementById("contact_family");
			if contactFamily.value == "checked" {
				var newCategory_id = 2;
			}
			var contactWork = document.getElementById("contact_work");
			if contactWork.value == "checked" {
				var newCategory_id = 3;
			}
			makeNewContact();
		});

// post request
	function makeNewContact() {
		$.ajax({
		  url: "http://127.0.0.1:4567/contacts",
		  type: "POST"
		  data: {	"name": newName,
				"age": newAge,
				"address": newAddress,
				"phone_number": newPhone,
				"picture": newPicture,
				"category_id": newCategory_id.value}
		}).done(function(data) {
			console.log(data)
			// people = JSON.parse(data);
			var tableBody = document.getElementById("contacts");
			var tableRow = document.createElement("tr");

			var tableCellPic = document.createElement("td");
			tableCellPic.innerHTML = "<img src=" + newPicture + ">";
			tableRow.appendChild(tableCellPic);

			var tableCellName = document.createElement("td");
			tableCellName.innerHTML = "<h5>" + newName + "</h5>";
			tableRow.appendChild(tableCellName);

			var tableCellAge = document.createElement("td");
			tableCellAge.innerHTML = "<h5>" + newAge + "</h5>";
			tableRow.appendChild(tableCellAge);

			var tableCellAddress = document.createElement("td");
			tableCellAddress.innerHTML = "<h5>" + newAddress + "</h5>";
			tableRow.appendChild(tableCellAddress);

			var tableCellPhone = document.createElement("td");
			tableCellPhone.innerHTML = "<h5>" + newPhone + "</h5>";
			tableRow.appendChild(tableCellPhone);

			var tableCellRadEdit = document.createElement("td");
			tableCellRadEdit.innerHTML = "<input id='edit_contact_dynamicidthis' type='radio'>";
			tableRow.appendChild(tableCellRadEdit);

			var tableCellRadDelete = document.createElement("td");
			tableCellRadDelete.innerHTML = "<input id='delete_contact_dynamicidthis' type='radio'>";
			tableRow.appendChild(tableCellRadDelete);

			tableBody.appendChild(tableRow);
		});
	};


};



	




