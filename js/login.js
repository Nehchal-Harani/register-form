function LoginUser(){
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email,password).then(function(){


   var id=firebase.auth().currentUser.uid;
   window.location.replace("../pages/home.html");
   localStorage.setItem('id',id);
   
  }).catch(function(error){

   var errorMsg=alert(error.message);

  });
 }
 