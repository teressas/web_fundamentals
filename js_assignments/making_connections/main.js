var username = document.querySelector("#username");

function edit() {
    username.innerText = "Teressa Sung";
}

var requests = document.querySelector("#requests");
var connections = document.querySelector("#connections");

function accept(id){
    var element = document.querySelector(id);
    element.remove();
    requests.innerText--;
    connections.innerText++;
}

function ignore(id){
    var element = document.querySelector(id);
    element.remove();
    requests.innerText--;
}