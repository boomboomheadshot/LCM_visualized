/*var path = document.querySelectorAll("svg polygon");
i = 0;

path.forEach(function(item, index) {

    i++;

    var pathlength = item.getTotalLength();


    console.log(index, pathlength)

});
*/

const path = anime.path('#inner_track polygon');
const path2 = anime.path('#outer_track polygon');

console.log(Math.min(path('y')));

var animProgress = document.getElementById('animProgress');
let lCompleted = 0;
var g1 = document.querySelector('#green_1');
var g2 = document.querySelector('#green_2');
var r1 = document.querySelector('#red_1');
var r2 = document.querySelector('#red_2');
var r3 = document.querySelector('#red_3');

var inner_animation = anime({
    targets: '#dot1',
    translateY: path('y'),
    translateX: path('x'),
    easing: 'linear',
    height: ['30px', '29px', '28px', '27px', '26px', '24px', '22px', '22px', '22px', '22px', '22px', '22px', '23px', '24px', '25px', '26px', '27px', '28px', '29px', '29px', '30px', '30px', '30px', '30px', '30px'],
    width: ['30px', '29px', '28px', '27px', '26px', '24px', '22px', '22px', '22px', '22px', '22px', '22px', '23px', '24px', '25px', '26px', '27px', '28px', '29px', '29px', '30px', '30px', '30px', '30px', '30px'],
    loop: 2,
    duration: 6000,
    autoplay: false,

    update: function(anim) {
        animProgress.innerHTML = (lCompleted) * 60 + Math.round(0.6 * Math.round(anim.progress)) + 's';
    },

    loopBegin: function(anim) {
        if (lCompleted == 0) {
            g1.style.display = "none";
            g2.style.display = "none";
        }
    },
    loopComplete: function(anim) {
        lCompleted++;
        if (lCompleted == 1) {
            g1.style.display = "inline-block";
        }
        if (lCompleted == 2) {
            g2.style.display = "inline-block";
        }


    },


})

var outer_loop = 0;

var outer_animation = anime({
    targets: '#dot2',
    translateY: path2('y'),
    translateX: path2('x'),
    rotate: path2('angle'),
    easing: 'linear',

    height: ['30px', '29px', '28px', '27px', '26px', '24px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '23px', '24px', '25px', '25px', '26px', '27px', '28px', '29px', '30px', '30px', '30px', '30px', '30px', '30px', '30px', '30px', '30px', '30px'],
    width: ['30px', '29px', '28px', '27px', '26px', '24px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '22px', '23px', '24px', '25px', '25px', '26px', '27px', '28px', '29px', '30px', '30px', '30px', '30px', '30px', '30px', '30px', '30px', '30px', '30px'],

    loop: 3,
    duration: 4000,
    autoplay: false,

    loopBegin: function(anim) {
        if (outer_loop == 0) {
            r1.style.display = "none";
            r2.style.display = "none";
            r3.style.display = "none";
        }
    },

    loopComplete: function(anim) {
        outer_loop++;

        if (outer_loop == 1) {
            r1.style.display = "inline-block";
        }
        if (outer_loop == 2) {
            r2.style.display = "inline-block";
        }
        if (outer_loop == 3) {
            r3.style.display = "inline-block";
        }

    }
});


function animateAll() {
    inner_animation.play();
    outer_animation.play();
    lCompleted = 0;
    outer_loop = 0;

}
document.querySelector('#start').onclick = animateAll;

var btn = document.getElementById('start');
var timer = document.getElementById('animProgress');

btn.addEventListener('click', btnAnimation);

function btnAnimation() {
    btn.classList.add("btnAnimation");
    timer.classList.add("timerAnimation");
    btn.innerHTML = 'Running...';

    setTimeout(function() {
        btn.innerHTML = 'START';
        btn.classList.remove("btnAnimation");
        timer.classList.remove("timerAnimation");
    }, 12000);
}