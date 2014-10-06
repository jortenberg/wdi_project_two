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
	"address": "14 The Loch, Rockville Centre, NY 11570",
	"phone_number": "917-406-5892",
	"picture": "./img/avatar.png",
	"category_id": 2
}
]


window.onload = function(){

	for (var i = 0; i < people.length; i++) {
		addPersonToDom(people[i]);
		//a function call to addPerson where I pass in people[i] GOES RIGHT HERE
	}

	var mainSubmit = document.getElementById("main_submit");

	mainSubmit.addEventListener("click", function(){
		makeNewContactFromModel();
		$('#myModal').modal('hide')
	});
	
};

function addPersonToDom(person) {
//people[i] doesn't exist within this function
//you have to replace it with a parameter that is passed in
	var tableBody = document.getElementById("contacts");
	var tableRow = document.createElement("tr");

	var tableCellPic = document.createElement("td");
	tableCellPic.innerHTML = "<img src=" + person["picture"] + ">";
	tableRow.appendChild(tableCellPic);

	var tableCellName = document.createElement("td");
	tableCellName.innerHTML = "<h5>" + person["name"] + "</h5>";
	tableRow.appendChild(tableCellName);

	var tableCellAge = document.createElement("td");
	tableCellAge.innerHTML = "<h5>" + person["age"] + "</h5>";
	tableRow.appendChild(tableCellAge);

	var tableCellAddress = document.createElement("td");
	tableCellAddress.innerHTML = "<h5>" + person["address"] + "</h5>";
	tableRow.appendChild(tableCellAddress);

	var tableCellPhone = document.createElement("td");
	tableCellPhone.innerHTML = "<h5>" + person["phone_number"] + "</h5>";
	tableRow.appendChild(tableCellPhone);

	var tableCellRadEdit = document.createElement("td");
	tableCellRadEdit.innerHTML = "<input id='edit_contact_dynamicidthis' type='radio'>";
	tableRow.appendChild(tableCellRadEdit);

	var tableCellRadDelete = document.createElement("td");
	tableCellRadDelete.innerHTML = "<input id='delete_contact_dynamicidthis' type='radio'>";
	tableRow.appendChild(tableCellRadDelete);

	tableBody.appendChild(tableRow);
}

	//create a person hash from the bootstrap modal input boxes
	//send that person hash to the addPerson
function makeNewContactFromModel() {
	// var mainSubmit = document.getElementById("main_submit");

	var contactName = document.getElementById("contact_name");
	var newName = contactName.value;

	var contactPicture = document.getElementById("contact_picture");
	var newPicture = contactPicture.value;

	var contactAge = document.getElementById("contact_age");
	var newAge = contactAge.value;

	var contactAddress = document.getElementById("contact_address");
	var newAddress = contactAddress.value;

	var contactPhone = document.getElementById("contact_phone_number");
	var newPhone = contactPhone.value;

	var contactCatId = document.getElementById("cat_family");
	var newCatId = 2

	newPerson = {
		"name": newName,
		"age": newAge,
		"address": newAddress,
		"phone_number": newPhone,
		"picture": "./img/avatar.png",
		"category_id": newCatId
	}

	addPersonToDom(newPerson);
}



