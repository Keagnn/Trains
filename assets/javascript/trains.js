$( document ).ready(function() {

    console.log( "ready!" );

  // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCUXC6y9bVNi77gWmRyYVCdjbHgGJdko6Y",
//     authDomain: "mavs-firebase.firebaseapp.com",
//     databaseURL: "https://mavs-firebase.firebaseio.com",
//     projectId: "mavs-firebase",
//     storageBucket: "mavs-firebase.appspot.com",
//     messagingSenderId: "114496442870"
//   };
//   firebase.initializeApp(config);

//  var database = firebase.database();
 

  $(".submit").on("click", function (){
    var name = $(".name").val().trim();
    var dest = $(".dest").val().trim();
    var time = $(".time").val().trim();
    var freq = $(".freq").val().trim();
    console.log(name);
    console.log(dest);
    console.log(time);
    console.log(freq);

    // database.ref().push({
    //     name: name,
    //     dest: dest,
    //     time: time,
    //     freq: freq,
    //     dateAdded: firebase.database.ServerValue.TIMESTAMP

    // })

    $('.table tr:last').after('<tr><td>'+ name + '</td>'+'<td>'+ dest + '</td>'+ '<td>'+ time + '</td>'+'<td>'+ freq + '</td>'+'</tr>');

  
   
  
     

    // database.ref().on("child_added", function(snapshot){

    //     console.log("snapshot: ",  snapshot);
    //     console.log(snapshot.val());
    //     console.log(snapshot.val().name);
    //     console.log(snapshot.val().dest);
    //     console.log(snapshot.val().time);
    //     console.log(snapshot.val().freq);
    // })

  });

  
 

 
  

  
 

});
