
function getDataFromForm() {
  
  var firstName = document.querySelector('input[name="fname"]').value;
  var lastName = document.querySelector('input[name="lname"]').value;
  
  runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
var xhttp = new XMLHttpRequest();

    var url = "https://myhomepage-sgn.azurewebsites.net/Lab8/ajax.php";
    var fullURL = url + "?fname=" + encodeURIComponent(fname) + "&lname=" + encodeURIComponent(lname);
    xhttp.open("GET", fullURL, true);
    console.log("opened");
    xhttp.onreadystatechange = function () {
      console.log("in 'onreadystatechange'");
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          console.log("in if statement'onreadystatechange'");
            document.getElementById("responseString").textContent = xhttp.responseText;
        }
    };
    console.log("Before open");
    xhttp.send();
    console.log("After open");
}
