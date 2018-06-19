require('./main.css');
require('./bootstrap/dist/css/bootstrap.min.css');
require('bootstrap')
let app = document.querySelector('#app')

app.innerHTML = '<h2>Welcome to summer-school-simple-todos</h2>'
function AddData(){
        var rows = "";
        var task = document.getElementById("task").value;
        var time =document.querySelector("time").value;
        var des = document.getElementById("des").value; 

        rows += "<tr><td>" + task + "</td><td>" + time + "</td><td>" + des + "</td><td>";
        $(rows).appendTo("#list tbody");
    }   


function ResetForm(){
    var test = document.getElementById("button");
    test.addEventListener("click", function(ResetForm) {

    });
}