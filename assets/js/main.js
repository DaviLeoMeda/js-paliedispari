button.addEventListener('click', function () {

    const entireWord = document.getElementById('wording').value;

    let word = entireWord

    // console.log(entireWord.length);

    // let dividedWord = entireWord.split().reverse().join();

    // console.log(dividedWord);

    for (let i = word.length - 1; i >= 0; i--) {

        console.log(word[i - 1])

        document.querySelector('.InvertedSense').innerHTML = `${word[0]}+${word[1]}+${word[0]}+${word[0]}+${word[0]}`






        // if (word[i] == entireWord) {
        //     console.log(`la parola è palindroma`);

        // } else if (word[i] != entireWord) {
        //     console.log(`la parola non è palindroma`);
        // }

        // document.querySelector(`.normalSense`).innerHTML += `${entireWord[i]} `;
    }

})

function randomNumber(max, min) {
    return Math.floor(Math.random() * max) + min;
}

function somma(num1, num2) {
    return num1 + num2;
}


buttonB.addEventListener('click', function () {

    let cpu = randomNumber(10, 1)

    let humanX = document.getElementById('numbering').value;

    let pairOrDispair = document.getElementById('pairOr').value;

    console.log(humanX, cpu);

    document.querySelector('.humanNumber').innerHTML = `${humanX}`;
    document.querySelector('.cpuNumber').innerHTML = `${cpu}`;

    somma(cpu, humanX);

    if (somma % 2 == 0 && pairOrDispair == 'pair') {
        document.querySelector('.results').innerHTML = `ci hai azzeccato, il risultato è  ${pairOrDispair}, ottimo`;
    } else if (somma % 2 != 0 && pairOrDispair == 'dispair') {
        document.querySelector('.results').innerHTML = `ci hai azzeccato, il risultato è  ${pairOrDispair}, ottimo`;
    } else if (somma % 2 == 0 && pairOrDispair == 'dispair') {
        document.querySelector('.results').innerHTML = `ci hai azzeccato, il risultato è  ${pairOrDispair}, ottimo`;
    } else if (somma % 2 != 0 && pairOrDispair == 'pair') {
        document.querySelector('.results').innerHTML = `non ci hai azzeccato, il risultato è  ${pairOrDispair}, buuhh!!!`;
    } else if (somma % 2 == 0 && pairOrDispair == 'dispair') {
        document.querySelector('.results').innerHTML = `non ci hai azzeccato, il risultato è  ${pairOrDispair}, buuhh!!!`;
    }




})