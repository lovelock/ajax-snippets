function callServer() {
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    if ((city === null) || (city === "")) return;
    if ((state === null ) || (state === "")) return;

    var url = "getZipCode.php?city=" + escape(city) + "&state=" + escape(state);

    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = updatePage;
    xmlHttp.send(null);
}

function updatePage() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 'complete') {
        document.getElementById("zipCode").value = xmlHttp.responseText;
    }
}
