const contentBox = document.querySelector('.box')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')

const vasilisIcon = document.querySelector('.roundVasilis')
const espenIcon = document.querySelector('.roundEspen')

// var spns = document.getElementsByTagName("SPAN");
let spns = document.querySelectorAll('.box span')
var audi = document.getElementById("adi");

audi.addEventListener("timeupdate", read);


// const smile = document.getElementById('Smile')
const smile = document.querySelector('.roundVasilis #Smile')
const AEI = document.querySelector('.roundVasilis #AEI')
const Neutral = document.querySelector('.roundVasilis #Neutral')
const O = document.querySelector('.roundVasilis #oMouth')
const THL = document.querySelector('.roundVasilis #THL')
const FV = document.querySelector('.roundVasilis #FV')
const QW = document.querySelector('.roundVasilis #QW')

smile.classList.add('showItem')

const espenSmile = document.querySelector('.roundEspen #EspenSmile')
const espenAEI = document.querySelector('.roundEspen #EspenAEI')
const espenNeutral = document.querySelector('.roundEspen #EspenNeutral')
const espenO = document.querySelector('.roundEspen #Espeno')
const espenTHL = document.querySelector('.roundEspen #EspenTHL')
const espenFV = document.querySelector('.roundEspen #EspenFV')
const espenQW = document.querySelector('.roundEspen #EspenQW')

const highlight = "rgb(252, 186, 3)"
const highlightO = "rgba(252, 186, 3, 0.3)"

espenSmile.classList.add('showItem')

function read() {
    var i;
    // style spoken text
    for (i = 0; i < spns.length; i++) {
        var time = Number(spns[i].id.slice(2));
        if (time < audi.currentTime) {
            if (i > 0) spns[i - 1].style.backgroundColor = highlightO;
            spns[i].style.backgroundColor = highlight;
        }
    }

    // scroll into view 
    for (i = 0; i < spns.length; i++) {
        var time = Number(spns[i].id.slice(2));
        if (time < audi.currentTime) {
            if (spns[i].style.backgroundColor === highlight) {
                spns[i].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
            }
        }
    }

    // ANIMATE NUANCES
    for (i = 0; i < spns.length; i++) {
        var time = Number(spns[i].id.slice(2));
        if (time < audi.currentTime) {
            if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("thumble")) {
                // ADD THUMBLE WEED -> desktop only
                const thumbleWeed = document.querySelector('.thumbleWeed')
                thumbleWeed.classList.add('showTW')
                thumbleWeed.classList.add('rollTW')

                // hide thumbleweed
                const thumbleWeedActive = document.querySelector('.showTW')

                if (thumbleWeedActive) {

                    setTimeout(function () {

                        // const thumbleWeed = document.querySelector('.thumbleWeed')
                        thumbleWeed.classList.remove('showTW')
                        thumbleWeed.classList.remove('rollTW')

                        // thumbleWeed.style.Opacity = 0;
                    }, 7000)
                }
                // console.log('thumble weed')

            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("suprised")) {
                // ADD FRIENDS GIF SUPRISED -> Desktop only
                const friendsGif = document.querySelector('.friendsSuprised')
                friendsGif.classList.add('showFriends')
                setTimeout(function () {
                    friendsGif.classList.remove('showFriends')
                }, 5000)

            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("mushroom")) {
                // ADD Mario mushroom
                const mario = document.querySelector('.mario')
                mario.classList.add('run')

                setTimeout(function () {
                    mario.classList.remove('run')
                }, 9000)
            }
        }

    }

    // showItem class
    // st4 to hide


    // lip sync
    for (i = 0; i < spns.length; i++) {
        var time = Number(spns[i].id.slice(2));
        if (time < audi.currentTime) {
            if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("smile") && spns[i].classList.contains("vasilis")) {
                smile.classList.add('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                // console.log('smile')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("aei") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.add('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                // console.log('aei mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("neutral") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.add('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                // console.log('Neutral mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("oMouth") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.add('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                // console.log('o mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("thl") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.add('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                // console.log('THL mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("fv") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.add('showItem')
                QW.classList.remove('showItem')
                // console.log('FV mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("qw") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.add('showItem')
                // console.log('QW mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("smile") && spns[i].classList.contains("espen")) {
                espenSmile.classList.add('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                // console.log('smile')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("aei") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.add('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                // console.log('aei mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("neutral") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.add('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                // console.log('Neutral mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("oMouth") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.add('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                // console.log('o mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("thl") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.add('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                // console.log('THL mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("fv") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.add('showItem')
                espenQW.classList.remove('showItem')
                // console.log('FV mouth')
            } else if (spns[i].style.backgroundColor === highlight && spns[i].classList.contains("qw") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.add('showItem')
                // console.log('QW mouth')
            }
        }

    }

}


// const audioClick = document.querySelector(".audioClick")

startBtn.addEventListener('click', playAudio)
pauseBtn.addEventListener('click', pauseAudio)
resetBtn.addEventListener('click', startOver)
pauseBtn.classList.add('hide')

function playAudio() {
    audi.play();
    startBtn.classList.add('hide')
    pauseBtn.classList.remove('hide')
    pauseBtn.classList.add('active')
}

function pauseAudio() {
    audi.pause();
    startBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
    startBtn.classList.add('active')
}

function startOver() {
    spns.forEach(e => {
        e.style.backgroundColor = "";
    })

    audi.currentTime = 0
    audi.pause();

    startBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
    pauseBtn.classList.remove('active')
    startBtn.classList.remove('active')



    smile.classList.add('showItem')
    AEI.classList.remove('showItem')
    Neutral.classList.remove('showItem')
    O.classList.remove('showItem')
    THL.classList.remove('showItem')
    FV.classList.remove('showItem')
    QW.classList.remove('showItem')
    espenSmile.classList.add('showItem')
    espenAEI.classList.remove('showItem')
    espenNeutral.classList.remove('showItem')
    espenO.classList.remove('showItem')
    espenTHL.classList.remove('showItem')
    espenFV.classList.remove('showItem')
    espenQW.classList.remove('showItem')

}


// podcast info
const podcastInfoBtn = document.querySelector('.podcastInfoClicker')
const podcastInfo = document.querySelector('.infoWrapper')
podcastInfoBtn.addEventListener('click', showInfo)

function showInfo() {
    podcastInfoBtn.classList.toggle('active')
    podcastInfo.classList.toggle('active')
}


// EYES OPEN OR CLOSED 
// BLINKING

const vasilisEyesOpen = document.querySelector('.vasilisEyesOpen')
const vasilisEyesClosed = document.querySelector('.vasilisEyesClosed')

const espenEyesOpen = document.querySelector('.espenOpenEyes')
const espenEyesClosed = document.querySelector('.espenClosedEyes')

vasilisEyesOpen.classList.add('active')
espenEyesOpen.classList.add('active')

setInterval(function () {
    // toggle the class every five second
    vasilisEyesClosed.classList.toggle('active');
    vasilisEyesOpen.classList.toggle('active');

    setTimeout(function () {
        // toggle back after 1 second
        vasilisEyesClosed.classList.toggle('active');
        vasilisEyesOpen.classList.toggle('active');
    }, 300)

}, 5000);

setInterval(function () {
    // toggle the class every five second
    espenEyesClosed.classList.toggle('active');
    espenEyesOpen.classList.toggle('active');

    setTimeout(function () {
        // toggle back after 1 second
        espenEyesClosed.classList.toggle('active');
        espenEyesOpen.classList.toggle('active');
    }, 300)

}, 7000);