let xhttp;

document.getElementById("btnexample1").addEventListener("click", e => {
    console.log("Click event triggered");
    xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", e => {
      console.log("Request completed sucessfully");
      document.getElementById("result").innerHTML = e.target.responseText;
    });

    xhttp.addEventListener("error", e => {
      console.error("Request failed");
    });

    xhttp.open("GET", "contents.json");
    xhttp.send();
});




document.getElementById("btnexample1").addEventListener("click", e => {
    const xhttp = new XMLHttpRequest();

xhttp.addEventListener("load", e => {
    const modules = JSON.parse(e.target.responseText);

    let output = "";
    modules.forEach(module => {
        output += "<p>name: " + module.name + ", Leader: " + module.leader + "</p>";
    });

    document.getElementById("result").innerHTML = output;
});

xhttp.open("GET", "modules.json");
xhttp.send();
