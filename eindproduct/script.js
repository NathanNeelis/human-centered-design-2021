// console.log(transcriptie)

const contentBox = document.querySelector('.box')
const startBtn = document.getElementById('start')

const vasilisIcon = document.querySelector('.roundVasilis')
const espenIcon = document.querySelector('.roundEspen')

// startBtn.addEventListener('click', startPodcast)
// vasilisIcon.addEventListener('click', playScript(0))
// espenIcon.addEventListener('click', startPodcast)

// resource: https://stackoverflow.com/questions/17246275/settimeout-and-array-each

console.log(transcriptie)

const words = document.querySelectorAll('.message1 .words')
// console.log(words[0])



// function addContent() {

//     transcriptie.forEach(dialog => {
//         // console.log('dialog', dialog.duration)

//         let offset = dialog.start;
//         // let waitingTime = dialog.duration;
//         console.log('offset1', offset)

//         setTimeout(() => {
//             console.log(dialog.content)
//             const dialogArray = dialog.content.split(' ')
//             console.log(dialogArray)
//             // console.log(waitingTime)

//             // print messages
//             let contentWrap = document.createElement("p");
//             let reader = document.createElement("span")
//             reader.classList.add(dialog.reader)

//             contentBox.appendChild(contentWrap).appendChild(reader)
//             reader.textContent = dialog.reader + ': '

//             let text = document.createTextNode(dialog.content);
//             contentWrap.appendChild(text)

//             let dialogLength = dialogArray.length
//             // console.log('length of array', dialogLength)

//             let timeEachWord = 0;
//             let sometimer = dialog.duration / dialogLength
//             // dialog.duration / dialogLength
//             // console.log('time for each word', timeEachWord)

//             dialogArray.forEach(word => {
//                 // console.log(word)
//                 setTimeout(() => {
//                     console.log('each word', word)
//                 }, 5000 + timeEachWord);
//                 timeEachWord += sometimer;

//             })

//             timeEachWord += dialog.duration / dialogLength
//             console.log('time for each word', timeEachWord)


//             // auto scrolling
//             contentBox.scrollTop = contentBox.scrollHeight;





//         }, 1000 + offset);


//     })

// transcriptie.forEach(function (message) {
//     var offset = 0;

//     setTimeout(() => {
//         console.log('inside', message.duration)
//     }, 1000 + offset);

//     console.log('outside', message.duration)
//     offset += 5000;
// });
// }





function startPodcast() {


    const vasilisIcon = document.querySelector('.roundVasilis')
    const espenIcon = document.querySelector('.roundEspen')
    vasilisIcon.classList.add('waiting');
    vasilisIcon.textContent = '...'
    var offset = 0;
    transcriptie.forEach(function (message) {


        setTimeout(function () {
            if (message.reader === 'Vasilis') {
                espenIcon.classList.add('waiting');
                espenIcon.textContent = '...'
                vasilisIcon.textContent = 'Vasilis'
                vasilisIcon.classList.remove('waiting')
            } else if (message.reader === 'Espen') {

                vasilisIcon.classList.add('waiting');
                vasilisIcon.textContent = '...'

                espenIcon.textContent = 'Vasilis'
                espenIcon.classList.remove('waiting')
            }



            // print messages
            let contentWrap = document.createElement("p");
            let reader = document.createElement("span")
            reader.classList.add(message.reader)

            contentBox.appendChild(contentWrap).appendChild(reader)
            reader.textContent = message.reader + ': '

            let text = document.createTextNode(message.content);
            contentWrap.appendChild(text)


            // auto scrolling
            contentBox.scrollTop = contentBox.scrollHeight;
        }, 5000 + offset);
        offset += 5000;
    });

    // transcriptie.forEach(e => {
    //     setTimeout(function () {
    //         console.log(e)
    //     }, 5000);
    // })

}