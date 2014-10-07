
window.onload = function(){
	$.ajax({
		url: "http://127.0.0.1:4567/contacts",
		type: "GET"
	}).done(function(data){
		console.log(data);
		})
	// people = JSON.parse(data);

	var people = data;
	for (var i = 0; i < people.length; i++) {
		addPersonToDom(people[i]);
	}

	var mainSubmit = document.getElementById("main_submit");

	mainSubmit.addEventListener("click", function(){
		makeNewContactFromModal();
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
function makeNewContactFromModal() {
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
	var newCatId = 6

	$.ajax({
		url: "http://127.0.0.1:4567/contacts",
		type: "POST",
		data: {	"name": newName,
		"age": newAge,
		"address": newAddress,
		"phone_number": newPhone,
		"picture": "./img/avatar.png",
		"category_id": 6}
	}).done(function(data) {
		console.log(data);
		})

		var newPerson = data;

	addPersonToDom(newPerson);
}



