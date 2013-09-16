//Right-click event handler
var year = new Date().getFullYear();
var message = "XTNAds © All Rights Reserved " + year;
function clickIE4() {
    if (event.button == 2 && document.contains('photos-list')) {
        alert(message);
        return false;
    }
}

function clickNS4(e) {
    if ((document.layers || document.getElementById && !document.all) && document.contains('photos-list')) {
        if (e.which == 2 || e.which == 3) {
            alert(message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS4;
}
else if (document.all && !document.getElementById) {
    document.onmousedown = clickIE4;
}

document.oncontextmenu = new Function("alert(message);return false");
