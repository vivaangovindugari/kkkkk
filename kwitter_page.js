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

user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

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

    function logout()
    {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
    }