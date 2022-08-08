//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyATgw8WPGiy1LCWwWg32KvSUEudsF6i19k",
    authDomain: "lets-chat-f7d7c.firebaseapp.com",
    databaseURL: "https://lets-chat-f7d7c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-f7d7c",
    storageBucket: "lets-chat-f7d7c.appspot.com",
    messagingSenderId: "535947171552",
    appId: "1:535947171552:web:f31631278887b6c7362285"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}