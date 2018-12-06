function signUpForm() {
  document.getElementsByClassName("registerForm")[0].style.display = "block";
  document.getElementsByClassName("login")[0].style.display = "none";
}

function loginForm() {
  document.getElementsByClassName("login")[0].style.display = "block";
  document.getElementsByClassName("registerForm")[0].style.display = "none";
}

function login() {
  debugger;
  var data = {};
  data.name = document.getElementById("username1").value;
  data.password = document.getElementById("password1").value;
  $.ajax({
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    url: "/login",
    success: function(data) {
      console.log("success");
      location.href = "shopping.html";
    }
  });
}

function register() {
  var data = {
    email: document.getElementById("email").value,
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    postcode: document.getElementById("postcode").value,
    mobile: document.getElementById("mobile").value,
    password: document.getElementById("password").value
  };
  $.ajax({
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    url: "/registeruser",
    success: function(data) {
      console.log("success");
      console.log(JSON.stringify(data));
    }
  });
}
