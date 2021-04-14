const contentBox = document.querySelector('.box')


// function startPodcast() {


const vasilisIcon = document.querySelector('.roundVasilis')
// vasilisIcon.classList.add('waiting');
// vasilisIcon.textContent = '...'
var offset = 0;
var index = -1;
const espenIcon = document.querySelector('.roundEspen')


vasilisIcon.addEventListener('click', changeText)
espenIcon.addEventListener('click', changeText)

function changeText() {
    index++;
    index %= transcriptie.length
    // text.innerHTML = texts[index];

    console.log(transcriptie[index].reader)

    if (transcriptie[index].reader === 'Vasilis') {
        espenIcon.classList.remove('inactive')
        vasilisIcon.classList.add('inactive')
    } else if (transcriptie[index].reader === 'Espen') {
        espenIcon.classList.add('inactive')
        vasilisIcon.classList.remove('inactive')
    }


    // print messages
    let contentWrap = document.createElement("p");
    let reader = document.createElement("span")
    reader.classList.add(transcriptie[index].reader)

    contentBox.appendChild(contentWrap).appendChild(reader)
    reader.textContent = transcriptie[index].reader + ': '

    let text = document.createTextNode(transcriptie[index].content);
    contentWrap.appendChild(text)


    // auto scrolling
    contentBox.scrollTop = contentBox.scrollHeight;
}


// transcriptie.forEach(function (message) {

//     if (message.reader === 'Vasilis') {
//         vasilisIcon.addEventListener('click', sendContent)
//     } else if (message.reader === 'Espen') {
//         espenIcon.addEventListener('click', sendContent)
//     }

//     function sendContent() {
//         // print messages
//         let contentWrap = document.createElement("p");
//         let reader = document.createElement("span")
//         reader.classList.add(message.reader)

//         contentBox.appendChild(contentWrap).appendChild(reader)
//         reader.textContent = message.reader + ': '

//         let text = document.createTextNode(message.content);
//         contentWrap.appendChild(text)


//         // auto scrolling
//         contentBox.scrollTop = contentBox.scrollHeight;
//     }

// });

// }