var firebaseConfig = {
      apiKey: "AIzaSyDtX0MA8A0JF73-Df6_NcOrz65EOaMsqq0",
      authDomain: "project-95-7f1bc.firebaseapp.com",
      databaseURL: "https://project-95-7f1bc-default-rtdb.firebaseio.com",
      projectId: "project-95-7f1bc",
      storageBucket: "project-95-7f1bc.appspot.com",
      messagingSenderId: "242478827964",
      appId: "1:242478827964:web:08326fbead1c0a6323c3b9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    ;
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
msg=document.getElementById("msg").value ;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}