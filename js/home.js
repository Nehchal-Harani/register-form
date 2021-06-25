 var userId=localStorage.getItem('id');
 firebase.database().ref('Users/'+userId).once('value').then(function(snapshot){
  var fname=(snapshot.val() && snapshot.val().fristName);
  var phoneNo=(snapshot.val() && snapshot.val().PhoneNo);
  var age=(snapshot.val() && snapshot.val().UserAge);

  document.getElementById('fname').innerHTML=fname;
  document.getElementById('age').innerHTML=age;
  document.getElementById('phoneNo').innerHTML=phoneNo;
 });

 function logout(){
       const user = firebase.auth().currentUser;

    user.delete().then(() => {
      alert("user deleted")
    }).catch((error) => {
         var errorMsg=alert(error.message);

    });
    
 }

 