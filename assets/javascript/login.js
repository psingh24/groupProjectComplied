$(document).ready(function(){
var user = $("#username");
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
			  console.log(user.displayName)
               if (user) {
                // User is signed in.
                loadMainPage()
                } else {
                // No user is signed in.
                console.log("no one signed in")
            }
            
            user.html("Welcome "+ user.displayName)

			    var data = {
		  	name: user.displayName
		  }
		  ref.push(data)
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
          
           if (user) {
                // User is signed in.
                loadMainPage()
                } else {
                // No user is signed in.
                console.log("no one signed in")
                }
                 user.html("Welcome "+ user.displayName)
		  var data = {
		  	name: user.displayName
		  }
		  ref.push(data)
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

$(".signin").on("click", function() {
	var method = $(this).attr("data")
	console.log("hello")


	if (method === "google") {
		googleSignIn();
          user.html("Welcome "+ user.displayName)
		
	}
	else if(method === "facebook") {
		facebookSignIn();
          user.html("Welcome "+ user.displayName)
		
	} 
})

 function loadMainPage() {
     window.location = 'preferences.html';
 }
//   user.html("Welcome "+ user.displayName)
})