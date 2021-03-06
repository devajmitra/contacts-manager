$(document).ready(function (){
	var contacts = [];
	var _count = 0;
	var currentIndex;
	
	$("#create").show("slow");
	$("#update").hide();
	$("#delete").hide();

	var showContact = function (e) {

		$("#create").hide("slow");
		$("#update").show("slow");
		$("#delete").show("slow");
		
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
	};
	
	var newContact = function () {

		$("#create").show("slow");
		$("#update").hide("slow");
		$("#delete").hide("slow");
				
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
		
		var template = "<div id =" + _count + " class = 'contact'>" + firstName.val() + ' ' + lastName.val() + "</div>";

		_count++;
		
		var listElement = $("#list");
		listElement.append(template);
	
	
		firstName.val("");
		lastName.val("");
		emailAddr.val("");
		mobileNum.val("");
	
	};
	
	var updateContact = function () {
	
		var firstName = $("#firstName");
		var lastName = $("#lastName");
		var emailAddr = $("#emailAddr");
		var mobileNum = $("#mobileNum");
	
		var obj = contacts[currentIndex];
	
		obj.firstName = firstName.val();
		obj.lastName = lastName.val();
		obj.emailAddr = emailAddr.val();
		obj.mobileNum = mobileNum.val();
	
		$("#"+currentIndex).html(firstName.val() + ' ' + lastName.val());
	
	};
	
	var deleteContact = function () {
		delete contacts[currentIndex];
		$("#"+currentIndex).slideUp("slow", function () {
			this.remove();
		});
		newContact();
	};

	$("#create").on('click', createContact);
	$("#new").on('click', newContact);
	$("#update").on('click', updateContact);
	$("#delete").on('click', deleteContact);
	$(document).on("click",".contact",showContact);
	
});
