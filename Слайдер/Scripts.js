document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;
function sliderLeft(){
    var poloska = document.getElementById('polosa');
    left = left - 128;
    if (left < -256){
        left = 0;
    }
    poloska.style.left = left + 'px';
}

document.getElementById('slider-right').onclick = sliderRight;
var right = 0;
function sliderRight(){
    var poloska = document.getElementById('polosa');
    right = right + 128;
    if (left < 256){
        left = 0;
    }
    poloska.style.right = right - 'px';
}
 