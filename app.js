document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name:'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
    ];
    cardArray.sort(() => 0.5 - Math.random());
    // create borad;
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    createBoard();

    //check Match

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        console.log(cardChosenId[0]);
        console.log(cardChosen[0] === cardChosen[1])
        if(cardChosen[0] === cardChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            alert('Sorry, try again');
        }

        cardChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if( cardsWon.length === cardArray.length/2 ) {
            resultDisplay.textContent = "Congratulation! You found them all";

        }
    }
    // flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);
        console.log(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardChosen.length === 2) {
            setTimeout(checkForMatch,500);
        }

    }
})