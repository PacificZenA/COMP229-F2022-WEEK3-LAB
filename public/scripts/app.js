(function () {
  function Start() {
    console.log("App Started");
  }
  window.addEventListener("load", Start);
})();

//Function for redirecting to home page
function myFunction() {
  window.location.href = "http://localhost:3000/home";
}
