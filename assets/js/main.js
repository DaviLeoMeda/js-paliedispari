button.addEventListener('click', function () {

    const entireWord = document.getElementById('wording').value;

    let word = entireWord

    // console.log(entireWord.length);

    // let dividedWord = entireWord.split().reverse().join();

    // console.log(dividedWord);
    let rivoltedWord = ` `

    for (let i = word.length - 1; i >= 0; i--) {

        rivoltedWord += word[i];

    }

    return rivoltedWord;


    if (word == rivoltedWord) {
        document.querySelector('.sense').innerHTML = `la parola ${word} è palindroma!`
    } else {
        document.querySelector('.sense').innerHTML = `la parola ${word} non è palindroma!`
    }

    // if (word[i] == entireWord) {
    //     console.log(`la parola è palindroma`);

    // } else if (word[i] != entireWord) {
    //     console.log(`la parola non è palindroma`);
    // }

    // document.querySelector(`.normalSense`).innerHTML += `${entireWord[i]} `;


})

function randomNumber(max, min) {
    return Math.floor(Math.random() * max) + min;
}

function somma(num1, num2) {
    return num1 + num2;
}


buttonB.addEventListener('click', function () {

    let cpu = randomNumber(10, 1)

    let humanX = parseInt(document.getElementById('numbering').value);

    let pairOrDispair = document.getElementById('pairOr').value;


    document.querySelector('.humanNumber').innerHTML = `your number is ${humanX}`;
    document.querySelector('.pcNumber').innerHTML = `its number is ${cpu}`;

    somma(cpu, humanX);

    console.log(somma);

    if (somma % 2 == 0 && pairOrDispair == 'pair') {
        document.querySelector('.results').innerHTML = `ci hai azzeccato, il risultato è  ${pairOrDispair}, ottimo`;
    } else if (somma % 2 != 0 && pairOrDispair == 'dispair') {
        document.querySelector('.results').innerHTML = `ci hai azzeccato, il risultato è  ${pairOrDispair}, ottimo`;
    } else if (somma % 2 != 0 && pairOrDispair == 'pair') {
        document.querySelector('.results').innerHTML = `non ci hai azzeccato, il risultato non è  ${pairOrDispair}, buuhh!!!`;
    } else if (somma % 2 == 0 && pairOrDispair == 'dispair') {
        document.querySelector('.results').innerHTML = `non ci hai azzeccato, il risultato non è  ${pairOrDispair}, buuhh!!!`;
    }




})