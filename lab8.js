
function getDataFromForm() {
  // Obtain the first name and last name from the form elements
  var firstName = document.querySelector('input[name="fname"]').value;
  var lastName = document.querySelector('input[name="lname"]').value;

  // Call the runAjax function and send the two strings as arguments
  runAjax(firstName, lastName);
}

function runAjax(fname, lname) {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Define the URL and the HTTP method (GET)
  var url = "./ajax.php"; // Update the URL to your PHP script
  xhr.open("GET", url, true);

  // Set the request header if needed
  // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Define the function to handle the response
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Handle the response here
          document.getElementById("responseString").textContent = xhr.responseText;
      }
  };

  // Send the request with the first and last names as part of the URL
  var params = "?firstName=" + fname + "&lastName=" + lname;
  xhr.send(params);
}
