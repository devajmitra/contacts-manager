$(document).ready(function (){
	var contacts = [];
	var _count = 0;
	var currentIndex;

	/*window.onload = function () {
		if(localStorage.getItem("contacts") !== null){
			 contacts=JSON.parse(localStorage['contacts']);
		}
	};*/

	// var showContact = function (e) {

	// 	$("#createForm").hide();
	// 	$("#updateForm").show();
		
	// 	$("#formHeading").html("View/Update:");

	// 	var index = this.id;
	
	// 	var firstName = $("#firstName");
	// 	var lastName = $("#lastName");
	// 	var emailAddr = $("#emailAddr");
	// 	var mobileNum = $("#mobileNum");
	
	// 	firstName.val(contacts[index].firstName);
	// 	lastName.val(contacts[index].lastName);
	// 	emailAddr.val(contacts[index].emailAddr);
	// 	mobileNum.val(contacts[index].mobileNum);
		
	// 	currentIndex = index;
	// 	//console.log(firstName+" "+lastName);
	// };
	
	var newContact = function () {
		$("#createForm").show();
		$("#updateForm").hide();
		
		$("#formHeading").html("Add new contact:");

		var firstName = $("#firstName");
		var lastName = $("#lastName");
		var emailAddr = $("#emailAddr");
		var mobileNum = $("#mobileNum");
	
		firstName.val("");
		lastName.val("");
		emailAddr.val("");
		mobileNum.val("");
	};

	

	var createContact = function () {		
		
		var firstName = $("#firstName");
		var lastName = $("#lastName");
		var emailAddr = $("#emailAddr");
		var mobileNum = $("#mobileNum");

		var obj = { 
		};
		obj.firstName = firstName.val();
		obj.lastName = lastName.val();
		obj.emailAddr = emailAddr.val();
		obj.mobileNum = mobileNum.val();
	
		contacts.push(obj);
		
		try {
			var source = $("#handlebars").html();
			var template = Handlebars.compile(source);
			
			var data = {
				count: _count,
				fName: firstName.val(),
				lName: lastName.val()
			};
			
			var html = template(data);
		} catch (e) {
			console.log(e);
		}
		_count++;
		
		/*var element = document.createElement("div");
		element.setAttribute("id", _count++);
		element.className = "contact";
		element.addEventListener('click', showContact, false);
		element.appendChild(document.createTextNode(firstName.value + ' ' + lastName.value));*/
		
		var listElement = $("#list");
		listElement.append(html);
	
	
		firstName.val("");
		lastName.val("");
		emailAddr.val("");
		mobileNum.val("");
	
		//newContact();
	};

	var updateContact = function () {
	
		var firstName = document.getElementsById("firstName");
		var lastName = document.getElementsById("lastName");
		var emailAddr = document.getElementsById("emailAddr");
		var mobileNum = document.getElementsById("mobileNum");
	
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

	$(document).on("click",".contact", function(e) {
		$("#createForm").hide();
		$("#updateForm").show();
		
		$("#formHeading").html("View/Update:");

		var index = this.id;
	
		var firstName = $("#firstName");
		var lastName = $("#lastName");
		var emailAddr = $("#emailAddr");
		var mobileNum = $("#mobileNum");

		firstName.val(contacts[index].firstName);
		lastName.val(contacts[index].lastName);
		emailAddr.val(contacts[index].emailAddr);
		mobileNum.val(contacts[index].mobileNum);
		
		currentIndex = index;
		//console.log(firstName+" "+lastName);
	});

	/*window.onbeforeunload = function() {
		localStorage['contacts']=JSON.stringify(contacts);
	};*/

});

