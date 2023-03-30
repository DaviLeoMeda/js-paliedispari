button.addEventListener('click', function () {

    const entireWord = document.getElementById('wording');

    let dividedWord = entireWord.value.split(' ');

    console.log(dividedWord[2]);

    for (let i = 0; i < dividedWord.length; i++) {
        console.log(dividedWord[i]);
    }

})