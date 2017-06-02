$(document).ready(function(){
var user = $("#username");
var username;
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgQFFxv6-cd0vRQesrZUD447sO7AEYklo",
    authDomain: "clickevent-e44d0.firebaseapp.com",
    databaseURL: "https://clickevent-e44d0.firebaseio.com",
    projectId: "clickevent-e44d0",
    storageBucket: "clickevent-e44d0.appspot.com",
    messagingSenderId: "673662977249"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var ref = database.ref("user")
console.log(ref)

  //instance of the goggle provider object
var google = new firebase.auth.GoogleAuthProvider();
var facebook = new firebase.auth.FacebookAuthProvider();
  
function googleSignIn() {
		firebase.auth().signInWithPopup(google).then(function(result) {
			  // This gives you a Google Access Token. You can use it to access the Google API.
			  var token = result.credential.accessToken;
			  // The signed-in user info.
			  var user = result.user;
			  // ...
              username = user.displayName;
			  console.log(user.displayName)
               if (user) {
                // User is signed in.
                loadMainPage()
                } else {
                // No user is signed in.
                console.log("no one signed in")
            }
            
			}).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...
			});
  }

function facebookSignIn() {
		  	firebase.auth().signInWithPopup(facebook).then(function(result) {
		  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;

		  console.log(user.displayName)
          loadMainPage()
           console.log(user.displayName)
                
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
});
  }
// Sign in
$(".signin").on("click", function() {
	var method = $(this).attr("data")
	console.log("hello")
        if (method === "google") {
		googleSignIn();
          
		
	}
	else if(method === "facebook") {
		facebookSignIn();

		
	} 
})
// Sign Out
$("#logout").on("click", function() {
firebase.auth().signOut().then(function() {
  // Sign-out successful.
  loadLoginPage();
}).catch(function(error) {
  // An error happened.
});
})


firebase.auth().onAuthStateChanged(function(firebaseUser){
	if(firebaseUser) {
		//USer is signed in
		console.log(firebaseUser)
        user.html("Welcome "+ firebaseUser.displayName) 
            var data = {
		  	name: firebaseUser.displayName
		  }
		  ref.push(data)
		// $(".name").html("<h2>Hi "+firebaseUser+"!</h2>")
	} else {
		console.log("not lgged In")
	}
})

 function loadMainPage() {
     window.location = 'preferences.html';
 }

  function loadLoginPage() {
     window.location = 'index.html';
 }

 ref.on("value", function(snapshot) {
     console.log(snapshot)



 })
//   user.html("Welcome "+ user.displayName)
})