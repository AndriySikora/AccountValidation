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
		alert("Please enter your name");
		nameField.focus();
		return false;
	}
	clearInputName();
}
function clearInputName(){
	document.getElementById('name').value = '';
}

function checkEmail(email){
	var emailField = document.getElementById('email').value;
	var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]/;
	var temp = regex.test(emailField);
	if (!temp){
		alert('Your email is invalid');
	}
	clearInputEmail();
}
function clearInputEmail(){
	document.getElementById('email').value = '';
}

function checkPass(){
	var pass = document.getElementById('psw');
	if (pass.value.length < 6){
		pass.classList.add('error-input-border');
		return false;
	}else{
		pass.classList.remove('error-input-border');
		return true;	
	}
	
}

function passMatch(){
	var psw = document.getElementById('psw').value;
	var confirmPsw = document.getElementById('confirmPass').value;
		if(psw == confirmPsw){
			clearPassField();
			return true;
		}
		else{
			alert('Password do not match');

		}
		clearPassField();
		return false;
}

function clearPassField(){
	document.getElementById('psw').value = '';
	document.getElementById('confirmPass').value = '';
}
