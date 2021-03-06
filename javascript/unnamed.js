(function () {
	var contacts = [];
	var _count = 0;
	var currentIndex;

	window.onload = function () {
		if(localStorage.getItem("contacts") !== null){
			 contacts=JSON.parse(localStorage['contacts']);
		}
	};

	var showContact = function () {

		document.getElementById("createForm").style.display = "none";
		document.getElementById("updateForm").style.display = "block";
		
		document.getElementById("formHeading").innerHTML = "View/Update:";

		var index = this.id;
	
		var firstName = document.getElementsByName("firstName")[1];
		var lastName = document.getElementsByName("lastName")[1];
		var emailAddr = document.getElementsByName("emailAddr")[1];
		var mobileNum = document.getElementsByName("mobileNum")[1];
	
		firstName.value = contacts[index].firstName;
		lastName.value = contacts[index].lastName;
		emailAddr.value = contacts[index].emailAddr;
		mobileNum.value = contacts[index].mobileNum;
	
		currentIndex = index;
		//console.log(firstName+" "+lastName);
	};
	
	var newContact = function () {
		document.getElementById("createForm").style.display = "block";
		document.getElementById("updateForm").style.display = "none";
		
		document.getElementById("formHeading").innerHTML = "Add new contact:";

		var firstName = document.getElementsByName("firstName")[0];
		var lastName = document.getElementsByName("lastName")[0];
		var emailAddr = document.getElementsByName("emailAddr")[0];
		var mobileNum = document.getElementsByName("mobileNum")[0];
	
		firstName.value = "";
		lastName.value = "";
		emailAddr.value = "";
		mobileNum.value = "";
	};

	var createContact = function () {
		var firstName = document.getElementsByName("firstName")[0];
		var lastName = document.getElementsByName("lastName")[0];
		var emailAddr = document.getElementsByName("emailAddr")[0];
		var mobileNum = document.getElementsByName("mobileNum")[0];
	
		var obj = { 
		};
		obj.firstName = firstName.value;
		obj.lastName = lastName.value;
		obj.emailAddr = emailAddr.value;
		obj.mobileNum = mobileNum.value;
	
		contacts.push(obj);
	
		var element = document.createElement("div");
		element.setAttribute("id", _count++);
		element.className = "contact";
		element.addEventListener('click', showContact, false);
		element.appendChild(document.createTextNode(firstName.value + ' ' + lastName.value));
		var listElement = document.getElementById("list");
		listElement.appendChild(element);
	
	
		firstName.value = "";
		lastName.value = "";
		emailAddr.value = "";
		mobileNum.value = "";
	
		//newContact();
	};

	var updateContact = function () {
	
		var firstName = document.getElementsByName("firstName")[1];
		var lastName = document.getElementsByName("lastName")[1];
		var emailAddr = document.getElementsByName("emailAddr")[1];
		var mobileNum = document.getElementsByName("mobileNum")[1];
	
		var obj = contacts[currentIndex];
	
		obj.firstName = firstName.value;
		obj.lastName = lastName.value;
		obj.emailAddr = emailAddr.value;
		obj.mobileNum = mobileNum.value;
	
		var contact = document.getElementById(currentIndex);
		contact.innerHTML = firstName.value + ' ' + lastName.value;
	
	};

	var deleteContact = function () {
		delete contacts[currentIndex];
		var obj = document.getElementById(currentIndex);
		obj.parentNode.removeChild(obj);
		newContact();
	};

	document.getElementById("create").addEventListener('click', createContact, false);
	document.getElementById("new").addEventListener('click', newContact, false);
	document.getElementById("update").addEventListener('click', updateContact, false);
	document.getElementById("delete").addEventListener('click', deleteContact, false);
	
	window.onbeforeunload = function() {
		localStorage['contacts']=JSON.stringify(contacts);
	};

}());
