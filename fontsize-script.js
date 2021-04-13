const slider = document.getElementById("fontRange");
const sliderLH = document.getElementById("lineHeightRange");
const target = document.querySelectorAll("main");

console.log(target)

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
    slider.value = 22;
    sliderLH.value = 33;

    target.forEach(element => {
        element.style.lineHeight = sliderLH.value + 'px';
        element.style.fontSize = slider.value + 'px';
    })

    document.getElementById('targetedLineHeight').textContent = sliderLH.value + ' px';
    document.getElementById('targetedFontSize').textContent = slider.value + ' px';


})


// show and hide font options
const optionsToggle = document.getElementById('optionsToggle')
const options = document.querySelector('.optionsHeader')
// options.classList.remove('active')
optionsToggle.addEventListener('click', toggleOptions)

function toggleOptions() {
    options.classList.toggle('active')

    const optionsActive = document.querySelector('.active')

    if (optionsActive) {
        optionsToggle.textContent = 'Hide font options'
    } else if (!optionsActive) {
        optionsToggle.textContent = 'Show font options'
    }
}