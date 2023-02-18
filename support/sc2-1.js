const firebaseConfig = {
	apiKey: "AIzaSyDNgWYRezi22VQUbkEFW3NyWzVqWIyQYl8",
	authDomain: "otp-7747d.firebaseapp.com",
	projectId: "otp-7747d",
	storageBucket: "otp-7747d.appspot.com",
	messagingSenderId: "972921190077",
	appId: "1:972921190077:web:22bc5da0fc47653b8f69d4",
	measurementId: "G-8F7T61XEEL"
};
	firebase.initializeApp(firebaseConfig);
render();
function render(){
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
	recaptchaVerifier.render();
}
	// function for send message
function phoneAuth(){
	var number = document.getElementById('number').value;
	firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
		window.confirmationResult = confirmationResult;
		coderesult = confirmationResult;
		document.getElementById('sender').style.display = 'none';
		document.getElementById('verifier').style.display = 'block';
	}).catch(function(error){
		alert(error.message);
	});
}
	// function for code verify
function codeverify(){
	var code = document.getElementById('verificationcode').value;
	coderesult.confirm(code).then(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'block';
		document.getElementsByClassName('n-conf')[0].style.display = 'none';
	}).catch(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'none';
		document.getElementsByClassName('n-conf')[0].style.display = 'block';
	})
}
