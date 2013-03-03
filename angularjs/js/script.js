function contactManager($scope) {
	var count = 0;			
	$scope.delHidden = true;
	$scope.addHidden = false;
	$scope.contacts = [];
	$scope.contact = {};
	$scope.formHeading = "Add new contact:";
	
	$scope.newContact = function () {
		$scope.formHeading = "Add new contact:";		
		
		$scope.contact = {};
		$scope.delHidden = true;
		$scope.addHidden = false;
	};
	
	$scope.createContact = function () {
		
		var obj = { firstName : $scope.contact.firstName,
			lastName : $scope.contact.lastName,
			emailAddr : $scope.contact.emailAddr,
			mobileNum : $scope.contact.mobileNum,
			index : count			
		};
		count++;
		$scope.contacts.push(obj);
		
		$scope.newContact();
	};
	
	$scope.showContact = function (contact) {
		$scope.formHeading = "Update/delete contact:";
		$scope.contact = contact;
		$scope.delHidden = false;
		$scope.addHidden = true;
	};
	
	
	$scope.deleteContact = function () {
		delete $scope.contacts[$scope.contact.index];
		$scope.newContact();
	};
}
