
var btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener("click",logginSubmit);

function logginSubmit(e) {

  event.preventDefault(e);
  var userIn = document.getElementById('userIn').value;
  var passIn = document.getElementById('passIn').value;
  var isRoot = validarLoggin(userIn,passIn);
  if (isRoot) {
    console.log("Is Root User");
    location.href="../html/dashboard.html";
  }else {
    console.log("Is Not Root User");
  }
}

function validarLoggin(userIn,passIn) {
  if ((userIn == "yerman") && ( passIn == "yerman")) {
    alert("WELLCOME YERMAN");
    console.log(passIn,userIn)
    return true;

  }else if((userIn == "" && passIn == "")){
    alert("WRITE SOMETHING");
    console.log(passIn,userIn)
    return false;

    }else {
      alert("U ARE'NT YERMAN");
      console.log(passIn,userIn)
      return false;
  }
}
