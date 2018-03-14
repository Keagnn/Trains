$( document ).ready(function() {

    console.log( "ready!" );

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUXC6y9bVNi77gWmRyYVCdjbHgGJdko6Y",
    authDomain: "mavs-firebase.firebaseapp.com",
    databaseURL: "https://mavs-firebase.firebaseio.com",
    projectId: "mavs-firebase",
    storageBucket: "mavs-firebase.appspot.com",
    messagingSenderId: "114496442870"
  };
  firebase.initializeApp(config);

 var database = firebase.database();
 

  $(".submit").on("click", function (){
    var name = $(".name").val().trim();
    var role = $(".role").val().trim();
    var start = $(".start").val().trim();
    var rate = $(".rate").val().trim();
    console.log(name);
    console.log(role);
    console.log(start);
    console.log(rate);

    database.ref().push({
        name: name,
        role: role,
        start: start,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    })

    $("<tr><td></td></tr>").text('hey');
   
  
     

    database.ref().on("child_added", function(snapshot){

        console.log("snapshot: ",  snapshot);
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().role);
        console.log(snapshot.val().start);
        console.log(snapshot.val().rate);
    })

  });

  
 

 
  

  $("#click-button").on("click", function() {
    clickCounter++;
    database.ref().set({
      clickCount: clickCounter
    });
  });

});
