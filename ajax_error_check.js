function updatePage() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            alert("server is done");
        } else if (request.status == 404) {
            alert("Request URL does not exist");
        } else {
            alert("Error: status code is " + request.status);
        }
    }
}
