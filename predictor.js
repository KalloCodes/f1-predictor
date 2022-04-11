let totalAcc = [];
const average = arr => arr.reduce((a,b) => a+b, 0) / arr.length;

function getRandomInt () {
    let array = [];
    let total = 0;
    for (let i=0; i<20; i++) {
        array.push(Math.floor(Math.random() * 20));
    }
    for (let j=0; j<20; j++) {
        if (array[j] === j) {
            total++;
        } else if (array[j] === j+1 || array[j] === j-1) {
            total+=0.5;
        }
    }
    totalAcc.push(total);
}

for (let k=0; k<1000000; k++) {
    getRandomInt();
}

console.log(average(totalAcc));