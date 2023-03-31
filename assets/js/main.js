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

buttonB.addEventListener('click', function ({

    let numberX = document.getElementById('numbering').value;

let cpu = randomNumber(10, 1)

console.log(humanFav, cpu);


})