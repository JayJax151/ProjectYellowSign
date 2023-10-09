
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