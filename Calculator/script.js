addListeners();

function addListeners() {

    // adding click listeners to buttons with numbers
    let numbers = document.querySelectorAll(".numbers");

    for (let number of numbers) {
        number.addEventListener('click', function() {{

            if (display.innerHTML === '0') {
                display.innerHTML = +this.innerHTML;
            } else {
                display.innerHTML += +this.innerHTML;
            }
        }})
    }


    // adding click listeners to buttons with operators
    let operations = document.querySelectorAll(".operations");
    let display = document.querySelector(".display");

    for (let operation of operations) {
        operation.addEventListener('click', function() {
    
            let value = this.innerHTML;
            let str = display.innerHTML.trim();
            let lastSymbolShown = str[str.length-1];
    
            switch(value) {
                case 'C': 
                    display.innerHTML = '0';
                    break;
                case '=': 
                    try {
                        display.innerHTML = math.evaluate(display.innerHTML);
                    } catch(err) {
                        if (err) {
                            console.log('Error! Noice!')
                            display.innerHTML = '0';
                        } else {
                            display.innerHTML = math.evaluate(display.innerHTML);
                        } 
                    } 
                    break;
                default:
                    if (!['+','-','/','*'].includes(lastSymbolShown)) {
                        display.innerHTML += ' ' + value + ' ';
                    }       
            }
        })
    }    
}

