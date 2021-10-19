console.log("page loaded...");

var x = document.getElementById("myVideo"); 

function over(element) { 
    x.muted = true;
    x.play(); 
} 

function out(element){
    x.pause();
}

