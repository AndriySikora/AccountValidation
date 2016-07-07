var acountButtn = document.getElementById('button');
acountButtn.addEventListener('click', checkForm, false);

function checkForm(e){
	e.preventDefault();
	checkName();
	checkEmail();
	checkPass();
	passMatch();
}

function checkName(){
	var nameField = document.getElementById('name');
	if(nameField.value.length < 3){
		addClass(nameField);
		return false;
	}
	// clearInputName();
}
function clearInputName(){
	document.getElementById('name').value = '';
}

function checkEmail(){
	var emailField = document.getElementById('email');
	var emailFieldValue = emailField.value;
	var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]/;
	var temp = regex.test(emailFieldValue);
	if (!temp){
		addClass(emailField);
	}else{
		removeClass(emailField);
	}
	// clearInputEmail();
}
function clearInputEmail(){
	document.getElementById('email').value = '';
}

function checkPass(){
	var pass = document.getElementById('psw');
	if (pass.value.length < 6){
		addClass(pass);
		return false;
	}else{
		removeClass(pass);
		return true;	
	}
	
}

function passMatch(){
	var confirmPsw = document.getElementById('confirmPass');
	var psw = document.getElementById('psw').value;
	var confirmPswValue = confirmPsw.value;
		if(psw === confirmPswValue){
			// clearPassField();
			removeClass(confirmPsw);
			return true;
		}
		else{
			addClass(confirmPsw);
		}
		// clearPassField();
		return false;
}

function clearPassField(){
	document.getElementById('psw').value = '';
	document.getElementById('confirmPass').value = '';
}

function addClass(element){
	element.classList.add('error-input-border');
}

function removeClass(element){
	element.classList.remove('error-input-border');
}
