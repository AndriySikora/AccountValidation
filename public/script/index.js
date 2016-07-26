window.onload = initPage;

function initPage() {
	document.getElementById('name').onblur = checkUsername;
	// document.getElementById('button').disabled = true;
}

function checkUsername() {
	var name = document.getElementById('name');
	name.className ='thinking';
	request = createRequest();
	if(request == null)
		alert('Unable to create request');
	else{
		var theName = name.value;
		var username = escape(theName);
		var url = 'form?name=' + username;
		request.onreadystatechange = showUsernameStatus;
		request.open('GET', url, true);
		request.send(null);
	}
}

function showUsernameStatus() {
	var name = document.getElementById('name');
	if (request.readyState == 4) {
    	if (request.status == 200) {
    	alert(request.responseText);
    	// document.getElementById('button').disabled = false;
		}
	}
}	

