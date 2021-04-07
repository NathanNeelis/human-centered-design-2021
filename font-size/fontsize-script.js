const slider = document.getElementById("fontRange");
const sliderLH = document.getElementById("lineHeightRange");
const target = document.querySelectorAll("main p");

slider.oninput = () => {
    target.forEach(element => {
        element.style.fontSize = slider.value + 'px';
    })
    document.getElementById('targetedFontSize').textContent = slider.value + ' px';
}

sliderLH.oninput = () => {
    target.forEach(element => {
        element.style.lineHeight = sliderLH.value + 'px';
    })
    document.getElementById('targetedLineHeight').textContent = sliderLH.value + ' px';
}



const radios = document.getElementsByName('font');
const htmlFont = document.querySelector('main')

// var ra = document.myForm.myRadios;
var prev = null;
for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        // (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            prev = this;
        }
        if (this.value === 'Roboto') {
            console.log('checked roboto')
            htmlFont.style.fontFamily = 'var(--fontRoboto)'
        } else if (this.value === 'playFair') {
            console.log('checked play fair')
            htmlFont.style.fontFamily = 'var(--fontPlayFair)'
        } else if (this.value === 'gloria') {
            console.log('checked gloria')
            htmlFont.style.fontFamily = 'var(--fontGloria)'
        }

        // console.log(this.value)
    };
}


const resetButton = document.getElementById("resetButton")
resetButton.addEventListener('click', () => {
    slider.value = 16;
    sliderLH.value = 24;

    target.forEach(element => {
        element.style.lineHeight = sliderLH.value + 'px';
        element.style.fontSize = slider.value + 'px';
    })

    document.getElementById('targetedLineHeight').textContent = sliderLH.value + ' px';
    document.getElementById('targetedFontSize').textContent = slider.value + ' px';


})

console.log(radios)