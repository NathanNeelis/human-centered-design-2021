const contentBox = document.querySelector('.box')


// function startPodcast() {


const vasilisIcon = document.querySelector('.roundVasilis')
const espenIcon = document.querySelector('.roundEspen')
const instructions = document.querySelector('.instructions')
// vasilisIcon.classList.add('waiting');
// vasilisIcon.textContent = '...'
var offset = 0;
var index = -1;



vasilisIcon.addEventListener('click', changeText)
espenIcon.addEventListener('click', changeText)

function changeText() {
    index++;
    index %= transcriptie.length

    if (transcriptie[index].reader === 'Vasilis') {
        vasilisIcon.classList.add('waiting');
        vasilisIcon.textContent = '...'
    } else if (transcriptie[index].reader === 'Espen') {
        espenIcon.classList.add('waiting');
        espenIcon.textContent = '...'
    }

    // timeout of 2 seconds to simulate talking
    setTimeout(function () {

        if (index < 1) {
            instructions.textContent = "Now click the right speaker icon to continue the dialog"
        } else if (index >= 1) {
            instructions.textContent = "";
        }

        if (transcriptie[index].reader === 'Vasilis') {
            espenIcon.classList.remove('inactive')
            vasilisIcon.classList.add('inactive')
            vasilisIcon.textContent = 'Vasilis'
            vasilisIcon.classList.remove('waiting')
        } else if (transcriptie[index].reader === 'Espen') {
            espenIcon.classList.add('inactive')
            vasilisIcon.classList.remove('inactive')
            espenIcon.textContent = 'Espen'
            espenIcon.classList.remove('waiting')
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
    }, 2000);
}