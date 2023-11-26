function startGame() {
  alert("Let's Start");
  // The SecetTest
  var secretTest;
  var userInput;
  var secretTest = prompt("What you want to test ?");
  var count = 1
  userInput = prompt("Enter the Desired");
  while (  secretTest != userInput) {
    if(count < 5){
      count++
      userInput = prompt("YOU ARE FOOL : " + count);
    }
  }
alert(`${count < 5 ? 'YOU ARE SMART' : 'YOU ARE STUPID'}`);
  window.location.href = "success.html";
}
