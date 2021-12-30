// let xhttp = new XMLHttpRequest();
// xhttp.open('GET', url, true);
// xhttp.send();

// xhttp.onload = function() {
//   // What to do when the response is ready
// }
console.log('Hi Shra');
loadDoc();

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    // xhttp.onload = function() {
    //   document.getElementById("demo").innerHTML = this.responseText;
    // }
    xhttp.open("GET", "http://localhost:3000/categories", true);
    xhttp.send();
}