var firebaseConfig = {
    apiKey: "AIzaSyAeymVXkEchmqJQoEdoPbf67hE_8c_o2dg",
    authDomain: "jkkk-602dc.firebaseapp.com",
    databaseURL: "https://jkkk-602dc-default-rtdb.firebaseio.com",
    projectId: "jkkk-602dc",
    storageBucket: "jkkk-602dc.appspot.com",
    messagingSenderId: "835069395553",
    appId: "1:835069395553:web:8f8febab0c2103e8b22020",
    measurementId: "G-LSE3G68FMJ"
  };
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user name");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";



function addRoom()
{
      room_name = document.getElementById("room name").value;

      firebase.database().ref("/").child(room_name).update({ purpose: "adding room name"   });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names );
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      });});}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}