$(document).ready(function() {
var rootRef = new Firebase('https://hotel-bot-ju9v-default-rtdb.firebaseio.com/Login/');

   //*** Sending data to firebase
    $("#btnSend").click(function() {
         rootRef.on("value", function(snapshot) {
        //console.log(snapshot.val());
        var txtusrs = $("#txtusr").val();
        var n = txtusrs.toString();
        var txtpsws = $("#txtpsw").val();
        var m = txtpsws.toString();
        var data = snapshot.val();   
        var contador = 0;
        for (player in snapshot.val()) {
            //console.log(player, ',', data[player]);
            if (data[player].Password == m && data[player].Usuario == n) 
            {
               contador = 1;
            }            
        }
        if (contador == 1) {
            window.location.assign("inicio.html")
        }
        else 
        {
            alert("usuario incorrecto")
        }
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
    });
});
