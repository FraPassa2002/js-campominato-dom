const startButton = document.getElementById('start-button');
console.log('startButton', startButton, typeof startButton);

// const diffSelect = document.getElementById('difficulty');
// console.log('diffSelect', diffSelect, typeof diffSelect);

const gridContainer = document.querySelector('.grid-container');
console.log('gridContainer', gridContainer, typeof gridContainer);

let points = 0;

startButton.addEventListener('click', startGame);

function startGame () {

    const cellNumber = 100;
    const bombsNumber = 16;

    // Creo un array di 16 numeri casuali tutti diversi
    const bombs = [];
    while (bombs.length < 16) {
        const newRandomNumber = getRandomNumber(1, cellNumber);
        console.log('newRandomNumber', newRandomNumber,typeof newRandomNumber)

        // Aggiungo il numero nell'array se non è già presente all'interno di esso
        if (bombs.includes(newRandomNumber) == false) {
            bombs.push(newRandomNumber);
        }
    }
    console.log('bombs', bombs,typeof bombs)

    gridContainer.innerHTML = '';
    points = 0;

    for (let i = 1; i<= cellNumber; i++) {
        const cell = document.createElement('div');
        cell.innerHTML = '<span>' + i + '</span>';
        cell.classList.add('cell');

        cell.addEventListener('click', function() {
            const allClickedBombs = document.querySelectorAll('.cell.bomb');
            console.log('TUTTE LE CELLE BOMBA', allClickedBombs, typeof allClickedBombs);
            console.log('BOMBE CLICCATE', allClickedBombs.length);

            if (allClickedBombs.length == 0 /*&& allClickedCells.length < (cellNumber - bombsNumber)*/) {
                console.log('this', this, typeof this);

                const numberInCell = parseInt(this.innerText);
                console.log('numberInCell', numberInCell, typeof numberInCell);

                const allClickedCells = document.querySelectorAll('.cell.clicked');
                console.log('TUTTE LE CASELLE CLICKED:', allClickedCells, typeof allClickedCells);
                console.log('PUNTEGGIO:', allClickedCells.length);

                if (bombs.includes(numberInCell) == false) {
                    this.classList.add('clicked');
                }
                else {
                    this.classList.add('bomb'); 

                    alert ('Hai perso! Hai totalizzato ' + allClickedCells + ' punti');
                }
            }
        });

        gridContainer.append(cell);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


