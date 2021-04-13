console.log(transcriptie)

const contentBox = document.querySelector('.box')
const startBtn = document.getElementById('start')

startBtn.addEventListener('click', startPodcast)

// resource: https://stackoverflow.com/questions/17246275/settimeout-and-array-each


function startPodcast() {


    const vasilisIcon = document.querySelector('.roundVasilis')
    vasilisIcon.classList.add('waiting');
    vasilisIcon.textContent = '...'
    var offset = 0;
    transcriptie.forEach(function (message) {

        setTimeout(function () {
            vasilisIcon.textContent = 'Vasilis'
            vasilisIcon.classList.remove('waiting')

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