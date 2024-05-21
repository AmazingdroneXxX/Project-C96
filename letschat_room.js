user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name+"!";



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

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id= " + Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row
//End code
});});}
getData();




  function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({

            purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
    
}

function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
  console.log(name);
  window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}