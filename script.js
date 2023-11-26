function startGame() {
  alert("Let's Start");
  var secretNumber = "lisa";
  var userInput;
 var userInput = prompt("Enter the secret Name");
    while (userInput != secretNumber){
        userInput = prompt("You are a Fool");
      }
   window.location.href = "success.html";
  }
