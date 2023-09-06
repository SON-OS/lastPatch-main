var login = document.getElementById('login');


//document.onload= localStorage.setItem('isLoggedInnn', "false");

login.onclick = (e) => {
 
  e.preventDefault();

  var usernameAddress = document.getElementById('username').value;
  var passwordAddress = document.getElementById('password').value;
  //document.onload= localStorage.setItem('isLoggedInnn', false);
  var getUser = localStorage.getItem('Username');
  var getPass = localStorage.getItem('Password');

  if (usernameAddress == '' && passwordAddress == '') {
    alert('Input field has no value');
  } else {
    if (usernameAddress == getUser && passwordAddress == getPass) {
      alert(`Login successfull, hi ${usernameAddress}`);
      localStorage.setItem('isLoggedInnn', "true");
      //window.location.href = './index.html';
      
     
    } else {
      alert('Something is wrong');
    }
  }
};

// // change course details btn
// if (localStorage.length == 0) {
//   // function isLoggedin() {
//   // change btn learn html
//   var learnBtn = document.getElementById('startCourse');
//   learnBtn.style.backgroundColor = '#5fcf80';
//   learnBtn.innerHTML = 'Enroll Now';
//   learnBtn.addEventListener('click', function () {
//     window.location.href = 'forms/login.html';
//    // b_button.style.display= "none";
//   });
// } else {
//   // hide btn login
//   var b_button = document.getElementById('LOOPER');
//   var k_button = document.getElementById('niGGa');
//   var h_button = document.getElementById('PooP');
//   var o_button = document.getElementById('ShiiT');
//   var p_button = document.getElementById('letsGo');
//  // var b_button = document.createElement('display');
//   //b_button.innerHTML = 'Logout';
//   //b_button.setAttribute('type', 'button');
//  // b_button.setAttribute('class', 'btn btn-primary');
//   //b_button.setAttribute('style', 'display : none');
//   b_button.style.display= "none";
//   k_button.innerHTML="Welcome "+ localStorage.getItem("username")+" !"
//   k_button.style.display="block";
//   h_button.style.display="block";
//   o_button.style.display="none";
//   p_button.innerHTML="Keep GOING !!! You are the Best "+localStorage.getItem("username")
//   p_button.style.display="block";


//   // logout
//   document.getElementById('logoutBtn').addEventListener('click', () => {
//     localStorage.removeItem();
//     window.location.href('index.html');
//   });



var userLoggedIn= localStorage.getItem('isLoggedInnn')
console.log(userLoggedIn)

  if (!userLoggedIn) {
    // function isLoggedin() {
    // change btn learn html
    var learnBtn = document.getElementById('startCourse');
    learnBtn.style.backgroundColor = '#5fcf80';
    learnBtn.innerHTML = 'Enroll Now';
    learnBtn.addEventListener('click', function () {
      window.location.href = 'forms/login.html';
     // b_button.style.display= "none";
    });
  } else {
    // hide btn login
    var b_button = document.getElementById('LOOPER');
    var k_button = document.getElementById('niGGa');
    var h_button = document.getElementById('PooP');
    var o_button = document.getElementById('ShiiT');
    var p_button = document.getElementById('letsGo');
   // var b_button = document.createElement('display');
    //b_button.innerHTML = 'Logout';
    //b_button.setAttribute('type', 'button');
   // b_button.setAttribute('class', 'btn btn-primary');
    //b_button.setAttribute('style', 'display : none');
    b_button.style.display= "none";
    k_button.innerHTML="Welcome "+ localStorage.getItem("username")+" !"
    k_button.style.display="block";
    h_button.style.display="block";
    o_button.style.display="none";
    p_button.innerHTML="Keep GOING !!! You are the Best "+localStorage.getItem("username")
    p_button.style.display="block";
  
  
    // logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem();
      window.location.href('index.html');
    });















}
