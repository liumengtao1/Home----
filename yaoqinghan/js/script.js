var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


var mp3 = document.querySelector("#mp3");
var mp3btn = document.querySelector(".mp3btn");

mp3btn.addEventListener('click', function () {
    if (mp3.paused) {
        mp3.play();//播放
        mp3btn.style.animationPlayState = 'running'; //图片旋转
    } else {
        mp3.pause();//暂停
        mp3btn.style.animationPlayState = 'paused';  // 暂停
    }
})