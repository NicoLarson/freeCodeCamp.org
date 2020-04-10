document.addEventListener("DOMContentLoaded", () => {
    // card option
    const cardArray = [
        {
            name: 'gboy',
            img: 'images/gboy.png'
        },
        {
            name: 'gboy',
            img: 'images/gboy.png'
        },
        {
            name: 'hammer',
            img: 'images/hammer.png'
        },
        {
            name: 'hammer',
            img: 'images/hammer.png'
        },
        {
            name: 'leg',
            img: 'images/leg.png'
        },
        {
            name: 'leg',
            img: 'images/leg.png'
        },
        {
            name: 'link',
            img: 'images/link.png'
        },
        {
            name: 'link',
            img: 'images/link.png'
        },
        {
            name: 'mario',
            img: 'images/mario.png'
        },
        {
            name: 'mario',
            img: 'images/mario.png'
        },
        {
            name: 'mushr',
            img: 'images/mushr.png'
        },
        {
            name: 'mushr',
            img: 'images/mushr.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        }
    ]
    const grid = document.querySelector('.grid')

    //create your board
    let createBoard = () => {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }


    //check for matches

    //flip card
    let flipCard = () => {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()


})