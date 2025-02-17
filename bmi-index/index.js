const form = document.getElementById('formBMI');
const resultContainer = document.getElementById('resultcontainer');
const resultText = document.getElementById('bmiresult');



let age = 0.00;
let weight = 0.00;
let height = 0.00;

const calcBtn = document.getElementById('calcBtn');


calcBtn.addEventListener('click', () => {
     age = parseFloat(document.getElementById('input-age').value);
     weight = parseFloat(document.getElementById('input-weight').value);
     height = parseFloat(document.getElementById('input-height').value);
    calculateBMI();
    
})

function calculateBMI() {
    let result = weight / (height * height);
    console.log(result);
    resultContainer.style.visibility = "visible";
    resultText.innerText += ` ${result}`;
}
