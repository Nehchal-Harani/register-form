function RegisterUser() {
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var age=document.getElementById('age').value;
    var phoneNo=document.getElementById('phoneNo').value;
    var fname=document.getElementById('fname').value;
    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
     alert('User Register successfully');
     var id=firebase.auth().currentUser.uid;
     firebase.database().ref('Users/'+id).set({
      fristName:fname,
      UserAge:age,
      PhoneNo:phoneNo,

     });
    }).catch(function(error){
 
     var errormsg=alert(error.message);
 
    });
   }
  