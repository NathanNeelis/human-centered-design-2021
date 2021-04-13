const testDialog = document.querySelectorAll('main p')
const splitTest = testDialog[3].textContent.split(' ');
const dialog = testDialog[3].textContent
// console.log(splitTest);

// setTimeout(setColor(), 3000);

// splitTest.forEach(element => {
//     setTimeout(setColor(element), 3000)
//     // element.style.color = "green";
//     // setTimeOut
// })


function loopThroughSplittedText(splitTest, dialog) {
    let newDialog = '';

    for (var i = 0; i < splitTest.length; i++) {
        (function (i) {
            setTimeout(function () {
                // let str = dialog.split(' ')
                // let newDialog = ''

                // function checkWord(word, check, p) {
                //     let rightWord = ''
                //     let paragraph = p
                //     word.forEach(element => {
                //         if (element === check) {
                //             rightWord = element
                //             paragraph = p.replace(rightWord, "<span class='testClass'>" + rightWord + "</span>");
                //             return paragraph
                //         }
                //     })
                //     return paragraph;
                // }

                const newWord = "<span class='testClass'>" + splitTest[i] + "</span>"
                // console.log('something new', newWord)

                dialog = dialog.replace(splitTest[i], "<span class='testClass'>" + splitTest[i] + "</span>");
                // newDialog = checkWord(str, splitTest[i], dialog);

                const oldDialog = testDialog[3]
                oldDialog.innerHTML = dialog
                // console.log(oldDialog.innerHTML)
            }, 500 * i);
            // return newDialog

        })(i);
        // return newDialog
    };
    return newDialog
}
loopThroughSplittedText(splitTest, dialog);
// const newDialog = loopThroughSplittedText(splitTest, dialog);