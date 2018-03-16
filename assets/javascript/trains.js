$(document).ready(function () {

  console.log("ready!");

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

  var timeArr = [];






  $(".submit").on("click", function () {
    

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


    //get the current time:
    var currentTime = moment().format('hh:mm');
    console.log("current time: " + currentTime);

    //subtract the entered time from the current time
    var minutes = moment.duration(currentTime).subtract(time);
    var msAway = (minutes * -1);
    var mins = moment.duration(msAway).asMinutes();




    timeArr.push(mins);

    var min = Math.min.apply(Math, timeArr);
    console.log(min);
    $('.float').html(" <marquee>The next train will arrive in " + min + " Minutes! </marquee>");




    console.log("minutes away:" + mins);


    //display the entered information on to the table
    $('.table tr:last').after('<tr><td>' + name + '</td>' + '<td>' + dest + '</td>' + '<td>' + time + '</td>' + '<td>' + freq + '</td>' + '<td>' + mins.toString() + '</td>' + '</tr>');










    // database.ref().on("child_added", function(snapshot){

    //     console.log("snapshot: ",  snapshot);
    //     console.log(snapshot.val());
    //     console.log(snapshot.val().name);
    //     console.log(snapshot.val().dest);
    //     console.log(snapshot.val().time);
    //     console.log(snapshot.val().freq);
    // })

  });

  


  // function buttonCheck(){
  //   if ($(".name").val() === "" || ($(".dest").val()=== "" || ($(".time").val()==="" || ($(".freq").val()==="")))){
  //     console.log("You didn't fill every field!");
  //   }

  // };

  $('.submit').attr('disabled',true);

  $('#input').keyup(function(){
      if($(this).val().length !=0){
          $('.submit').prop('disabled', false);
      }
      else
      {
          $('.submit').prop('disabled', true);        
      }
     
  })

 







});