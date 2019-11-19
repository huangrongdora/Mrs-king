var slider = document.getElementsByClassName("slider")[0];
var imgs = slider.getElementsByTagName("img");
var lis = slider.getElementsByTagName("li");


var j = 0;
for (var i = 0; i < lis.length; i++) {

    lis[i].onclick = function () {
        var j = this.getAttribute("dora");
        for (var a = 0; a < lis.length; a++) {
            lis[a].className = "";
            imgs[a].className = "";
        }
        lis[j].className = "active";
        imgs[j].className = "active";
        j++;
        if (j == 3) {
            j = 0;
        }
    }
}

var timer = setInterval(function () {
    for (var a = 0; a < lis.length; a++) {
        lis[a].className = "";
        imgs[a].className = "";
    }
    lis[j].className = "active";
    imgs[j].className = "active";
    j++;
    if (j == 3) {
        j = 0;
    }
}, 2000)

slider.onmouseover = function () {
    clearInterval(timer);
}
slider.onmouseout = function () {
    setInterval(function () {
        for (var a = 0; a < lis.length; a++) {
            lis[a].className = "";
            imgs[a].className = "";
        }
        lis[j].className = "active";
        imgs[j].className = "active";
        j++;
        if (j == 3) {
            j = 0;
        }
    }, 2000)
}