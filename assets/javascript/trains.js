$(document).ready(function () {




      console.log("ready!");

      //Initialize Firebase
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

      

      var timeArr = [];

      


      database.ref().on("child_added", function (snapshot) {

        //each train has a specified "key" this targets that "key"
        var snapKey = snapshot.key

        //Log out all of the values from firebase
        console.log("snapshot: ", snapshot);
        console.log(snapshot.key);
        console.log(snapshot.val());
        console.log(snapshot.val().name);
        console.log(snapshot.val().dest);
        console.log(snapshot.val().time);
        console.log(snapshot.val().freq);
        console.log(snapshot.val().mins);

        
        //change each v
        name = snapshot.val().name;
        dest = snapshot.val().dest;
        time = snapshot.val().time;
        freq = snapshot.val().freq;
        mins = snapshot.val().mins;
        
        $('.table').append('<tr><td>' + name +
        '</td>' + '<td>' + dest +
        '</td>' + '<td>' + time +
        '</td>' + '<td>' + freq +
        '</td>' + '<td>' + mins +
        '</td>' + '<td>' + '<button type="button" class="btn btn-danger btn-sm delete"></button>' +
        '</td>' + '</tr>');
        

         $(".delete").on("click", function () {
        
        database.ref().child(snapKey).remove();
  
        });
        $(".delete").on("click", function () {
        
          $(this).parent().prevAll().parent().remove();
  
        });

        
      });

     


      $(".submit").on("click", function () {

        var currentTime = moment().format('hh:mm');
        console.log("current time: " + currentTime);

        var name = $(".name").val().trim();
        var dest = $(".dest").val().trim();
        var time = $(".time").val().trim();
        var freq = $(".freq").val().trim();

        var minutes = moment.duration(currentTime).subtract(time);

        var msAway = Math.abs(minutes);


        var mins = moment.duration(msAway).asMinutes();

        console.log(name);
        console.log(dest);
        console.log(time);
        console.log(freq);
        console.log(mins);

        

        database.ref().push({
          name: name,
          dest: dest,
          time: time,
          freq: freq,
          mins: mins,
          dateAdded: firebase.database.ServerValue.TIMESTAMP
        })


        timeArr.push(mins);

        var min = Math.min.apply(Math, timeArr);
        console.log(min);

        $('.float').html(" <marquee>The next train will arrive in " + min + " Minutes! </marquee>");

        console.log("minutes away:" + mins);

        //display the entered information on to the table
        

        //delete row button
        


      });
     

      $('.submit').attr('disabled', true);

      $('#input').keyup(function () {
        if ($(this).val().length != 0) {
          $('.submit').prop('disabled', false);
        } else {
          $('.submit').prop('disabled', true);
        }

      })

     
      
 







    
    });