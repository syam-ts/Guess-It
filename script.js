function startGame() {
  alert("Let's Start");
  // The SecetTest
  var secretTest;
  var userInput;
  var secretTest = prompt("What you want to test ?");
  userInput = prompt("Enter the Desired");
   var count = 0
  while (  secretTest != userInput) {
    if(count < 10){
      count++
      userInput = prompt("YOU ARE FOOL : " + count);
    }
  }
alert(`${count <= 10 ? 'YOU ARE SMART' : 'YOU ARE STUPID'}`);
  window.location.href = "success.html";
}
//Block game
function blockGame() {
  let i = 1;
  while(i < 2000){
     document.write("Error\n");
    i++;
  }

}
