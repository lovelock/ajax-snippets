// for Mozilla and other non-IE browsers
var xmlHttp = new XMLHttpRequest();

// for Internet Explorer

var xmlHttp = false;
try {
    xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
    try {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e2) {
        xmlHttp = false;
    }
}


// multi-target method
var xmlHttp = false;
try {
    xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
    try {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e2) {
        xmlHttp = false;
    }
}

if (!xmlHttp && typeof XMLHttpRequest !== 'undefined') {
    xmlHttp = new XMLHttpRequest();
}
