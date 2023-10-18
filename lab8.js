
function getDataFromForm() {
  
  var firstName = document.querySelector('input[name="fname"]').value;
  var lastName = document.querySelector('input[name="lname"]').value;
  
  runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
 
  var xhttp = new XMLHttpRequest();

  var url = "./ajax.php"; 
  xhttp.open("GET", url, true);

  xhttp.onload = function () {
          document.getElementById("responseString").textContent = xhttp.responseText;
  };

  xhttp.send();
}
