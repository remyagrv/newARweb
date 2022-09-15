ARbtn.style.display = "none";
// document.getElementById("ARbtn").addEventListener("click", function() {
if (navigator.userAgent.match(/Android/i)) {
  ARbtn.style.display = "block";
  console.log("Button visible only on Android devices");
} else if (navigator.userAgent.match(/iPhone/i)) {
  ARbtn.style.display = "none";
  console.log("AR button not visible in iPhone");
} else if (navigator.userAgent.match(/Windows/i)) {
  ARbtn.style.display = "none";
  console.log("AR button not visible in Windows");
}
else if (navigator.userAgent.match(/iPad/i)) {
  ARbtn.style.display = "none";
  console.log("AR button not visible in iPad");
} else if (navigator.userAgent.match(/iPod/i)) {
  ARbtn.style.display = "none";
  console.log("AR button not visible in iPod");
}else{
    ARbtn.style.display = "none";
}
