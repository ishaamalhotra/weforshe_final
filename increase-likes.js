const numberDisplay = document.querySelector('.number');
const plusSymbol = document.querySelector('.likes');

let number = parseInt(numberDisplay.textContent);

plusSymbol.addEventListener('click', () => {
    // number++;
    // numberDisplay.textContent = number;
    plusSymbol.classList.toggle('active');

    if(plusSymbol.classList.contains('active')){
        number++;

    }else{
        number--;
    }

    numberDisplay.textContent=number;
    numberDisplay.classList.toggle('active');
});