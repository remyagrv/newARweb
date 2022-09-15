

ARbtn.style.display = "none";
// document.getElementById("ARbtn").addEventListener("click", function() {
    if(navigator.userAgent.match(/Android/i)){
        ARbtn.style.display = "block";
        console.log("Button visible only on Android devices");
        } 
        else if(navigator.userAgent.match(/iPhone/i)){
        ARbtn.style.display = "none";
        console.log("AR button not visible in iPhone");
        
       } 
       else if(navigator.userAgent.match(/Windows/i)){
        
        ARbtn.style.display = "none";
        console.log("AR button not visible in Windows");
    }
//   });