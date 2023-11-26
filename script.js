function startGame() {
  alert("Let's Start");
  // The SecetNumber
  var secretNumber = "mannar";
  var userInput;
  var count = 1
  userInput = prompt("Enter the Alppuzha Town Name");
  while (userInput != secretNumber) {
    if(count < 5){
      count++
      userInput = prompt("Looser : " + count);
    }
  }
alert(`${count < 5 ? 'YOU ARE SMART' : 'YOU ARE STUPID'}`);
  window.location.href = "success.html";
}
