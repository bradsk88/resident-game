'use strict'
function reqListener (data) {
document.body.innerHTML += this.responseText + '&lt;br&gt;';
}
setInterval(function () {
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:3000/api");
oReq.send();
}, 3000);
