
// window.onload = function() {
//   document.getElementById('login').onclick = function check(form) {
//     if (form.userid.value == 'sandra' && form.pswrd.value = '123')
//     	window.open("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml_body_background)
//      }
//      else{
//      	alert("The username and password doesn't match")
//      }
//   };
// };


// $('navbar-head').localScroll();

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}