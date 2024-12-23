var i = 0;
var images = ["pics/house1.jpg", "pics/house2.jpeg", "pics/house3.jpg"];
var time = 5000;

function changeImg() {
    document.slide.src = images[i];

    if(i < images.length-1) {
        i++;
    }else{
        i = 0;
    }

    setTimeout(changeImg, time);

}
window.onload = changeImg;