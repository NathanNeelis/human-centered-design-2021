const contentBox = document.querySelector('.box')
const startBtn = document.getElementById('start')


startBtn.addEventListener('click', testAnimation)
// resource: https://stackoverflow.com/questions/17246275/settimeout-and-array-each


function testAnimation() {
    const messageOne = document.querySelector(".message1")
    const messageTwo = document.querySelector(".message2")
    const messageThree = document.querySelector(".message3")
    const messageFour = document.querySelector(".message4")
    const messageFive = document.querySelector(".message5")
    // console.log(messages)

    messageOne.classList.add('showOne')
    messageTwo.classList.add('showTwo')
    messageThree.classList.add('showThree')
    messageFour.classList.add('showFour')
    messageFive.classList.add('showFive')
}


function startPodcast() {


    const vasilisIcon = document.querySelector('.roundVasilis')
    const espenIcon = document.querySelector('.roundEspen')
    vasilisIcon.classList.add('waiting');
    vasilisIcon.textContent = '...'



    // transcriptie.forEach(e => {
    //     setTimeout(function () {
    //         console.log(e)
    //     }, 5000);
    // })

}