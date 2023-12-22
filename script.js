function startGame() {
  alert("Let's Start");
  // The SecetTest
  var secretTest;
  var userInput;
  var secretTest = prompt("What you want to test ?");
  var limit = prompt("Enter the limit");
  userInput = prompt("Enter the Desired");
   var count = 0
  while (  secretTest != userInput) {
    if(count < limit){
      count++
      userInput = prompt("YOU ARE FOOL : " + count);
    }
  }
alert(`${count <= limit ? 'YOU ARE SMART' : 'YOU ARE STUPID'}`);
  window.location.href = "success.html";
}
//Block game
function blockGame() {
   setInterval((blockGame) => {
     document.write(' Error');;
   }, 10);
   
 }

