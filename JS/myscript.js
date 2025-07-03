function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function changeText() {
document.getElementById('change').innerHTML = "Hello Javascript!";
}

function changeFontSize() {
  document.getElementById('style').style.fontSize='35px';
  document.getElementById('style').style.color='red';
  document.getElementById('style').style.backgroundColor='blue';
}

function hideMe() {
  document.getElementById('hide').style.display='none';
}
function showMe() {
  document.getElementById('hide').style.display='block';
}
function writeMe() {
window.print(5+8);
}
function outputHTML() {
  document.getElementById("output").innerHTML = "<b>JavaScript can output HTML content.</b>";
}
function calculate() {
  window.alert("Registered successfully!");
  console.log(5+6); // Outputs 11 to the console
}
