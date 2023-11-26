function startGame() {
  alert("Let's Start");
  // The SecetNumber
  var secretNumber = "tripura";
  var userInput;
  var count=0
  userInput = prompt("Enter the Indian State Name");
  while (userInput != secretNumber) {
    count++
    userInput = prompt("YOU ARE FOOL : " + count);
  }
alert(`${count < 5 ? 'YOU ARE SMART' : 'YOU ARE STUPID'}`);
  window.location.href = "success.html";
}

