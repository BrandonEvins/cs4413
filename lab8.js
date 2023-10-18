
function getDataFromForm() {
  
  var firstName = document.querySelector('input[name="fname"]').value;
  var lastName = document.querySelector('input[name="lname"]').value;
  
  runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
var xhttp = new XMLHttpRequest();

    var url = "https://myhomepage-sgn.azurewebsites.net/ajax.php";
    var fullURL = url + "?fname=" + encodeURIComponent(fname) + "&lname=" + encodeURIComponent(lname);
    xhttp.open("GET", fullURL, true);
    console.log("opened");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          console.log("in 'onreadystatechange'");
            document.getElementById("responseString").textContent = xhttp.responseText;
        }
    };
    console.log("Before open");
    xhttp.send();
    console.log("After open");
}
