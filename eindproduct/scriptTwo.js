const contentBox = document.querySelector('.box')
const startBtn = document.getElementById('start')

const vasilisIcon = document.querySelector('.roundVasilis')
const espenIcon = document.querySelector('.roundEspen')

var spns = document.getElementsByTagName("SPAN");
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


espenSmile.classList.add('showItem')

function read() {
    var i;
    // style spoken text
    for (i = 0; i < spns.length; i++) {
        var time = Number(spns[i].id.slice(2));
        if (time < audi.currentTime) {
            if (i > 0) spns[i - 1].style.backgroundColor = "white";
            spns[i].style.backgroundColor = "red";
        }
    }

    // scroll into view 
    for (i = 0; i < spns.length; i++) {
        var time = Number(spns[i].id.slice(2));
        if (time < audi.currentTime) {
            if (spns[i].style.backgroundColor === "red") {
                spns[i].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
            }
        }
    }

    // ANIMATE ICONS ON SPEAKER 
    for (i = 0; i < spns.length; i++) {
        var time = Number(spns[i].id.slice(2));
        if (time < audi.currentTime) {
            if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("vasilis")) {
                console.log('Animate vasilis icon')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("espen")) {
                console.log('Animate espen icon')
            }
        }

    }



    // showItem class
    // st4 to hide


    // lip sync
    for (i = 0; i < spns.length; i++) {
        var time = Number(spns[i].id.slice(2));
        if (time < audi.currentTime) {
            if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("smile") && spns[i].classList.contains("vasilis")) {
                smile.classList.add('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                console.log('smile')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("aei") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.add('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                console.log('aei mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("neutral") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.add('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                console.log('Neutral mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("oMouth") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.add('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                console.log('o mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("thl") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.add('showItem')
                FV.classList.remove('showItem')
                QW.classList.remove('showItem')
                console.log('THL mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("fv") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.add('showItem')
                QW.classList.remove('showItem')
                console.log('FV mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("qw") && spns[i].classList.contains("vasilis")) {
                smile.classList.remove('showItem')
                AEI.classList.remove('showItem')
                Neutral.classList.remove('showItem')
                O.classList.remove('showItem')
                THL.classList.remove('showItem')
                FV.classList.remove('showItem')
                QW.classList.add('showItem')
                console.log('QW mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("smile") && spns[i].classList.contains("espen")) {
                espenSmile.classList.add('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                console.log('smile')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("aei") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.add('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                console.log('aei mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("neutral") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.add('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                console.log('Neutral mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("oMouth") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.add('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                console.log('o mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("thl") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.add('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.remove('showItem')
                console.log('THL mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("fv") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.add('showItem')
                espenQW.classList.remove('showItem')
                console.log('FV mouth')
            } else if (spns[i].style.backgroundColor === "red" && spns[i].classList.contains("qw") && spns[i].classList.contains("espen")) {
                espenSmile.classList.remove('showItem')
                espenAEI.classList.remove('showItem')
                espenNeutral.classList.remove('showItem')
                espenO.classList.remove('showItem')
                espenTHL.classList.remove('showItem')
                espenFV.classList.remove('showItem')
                espenQW.classList.add('showItem')
                console.log('QW mouth')
            }
        }

    }

}


// const audioClick = document.querySelector(".audioClick")

startBtn.addEventListener('click', tstFunciton)

function tstFunciton() {
    audi.play();
}

// audi.addEventListener("click", showText);
// audioClick.addEventListener("click", showText);

// function showText() {
//     const message0 = document.querySelector("message0")
//     console.log(message0)
//     setTimeout(function () {
//         const message = document.querySelector("message0")
//         message.classList.add('show')
//         console.log('show message 0')
//     }, 100)

//     setTimeout(function () {
//         const message = document.querySelector("message1")
//         message.classList.add('show')
//         console.log('show message 1')
//     }, 5500)

//     setTimeout(function () {
//         const message = document.querySelector("message2")
//         message.classList.add('show')
//         console.log('show message 2')
//     }, 7500)
// }