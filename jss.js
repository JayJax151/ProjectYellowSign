let button1 = document.getElementByTagName("button1");
button1.addEventListener("click", diceRoller(3) );

let button2 = document.getElementByTagName("button2");
button2.addEventListener("click", diceRoller(2));


const diceRoller = (diceQuantity) => {
let accumulator = 0;
for (let i = 0; i < diceQuantity; i++) {
    let num = Math.floor(Math.random() * 6) +1;
    accumulator = accumulator + num;
    }
    if (diceQuantity === 3) {
        return accumulator * 5
     } else if (diceQuantity === 2) {
            return (accumulator + 6) * 5
     }
     
} 