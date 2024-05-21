//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name_name = localStorage.getItem("room_name");

const firebaseConfig = {
      apiKey: "AIzaSyAUxPqEycvpodi1N88ssftCCRCm36S3iaw",
      authDomain: "projectletschat-cb8b0.firebaseapp.com",
      projectId: "projectletschat-cb8b0",
      databaseURL: "https://projectletschat-cb8b0-default-rtdb.firebaseio.com",
      storageBucket: "projectletschat-cb8b0.appspot.com",
      messagingSenderId: "102231053521",
      appId: "1:102231053521:web:2ee9c42b23c3d80a5be1f0"
    };
  
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


function send()
{

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";
}


