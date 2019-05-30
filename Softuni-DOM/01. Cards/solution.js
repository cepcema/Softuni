function solve() {
    let playerOneDeck = Array.from(document.querySelectorAll(`#player1Div img`));
    let playerTwoDeck = Array.from(document.querySelectorAll(`#player2Div img`));

    let result = Array.from(document.querySelectorAll('#result span'));
    let history = document.querySelector('#history');

    playerOneDeck.forEach(c => c.addEventListener('click', compareCards));
    playerTwoDeck.forEach(c => c.addEventListener('click', compareCards));

    function compareCards() {
        this.src = './images/whiteCard.jpg';
        if (this.parentNode.id === 'player1Div') {
            result[0].textContent = this.name;
        } else if (this.parentNode.id === 'player2Div') {
            result[2].textContent = this.name;
        }

        let p1CardValue = result[0].textContent;
        let p2CardValue = result[2].textContent;

        if (p1CardValue !== '' && p2CardValue !== '') {
            let p1Card = playerOneDeck.find(c => c.name === p1CardValue);
            let p2Card = playerTwoDeck.find(c => c.name === p2CardValue);

            if (p1CardValue > p2CardValue) {
                p1Card.style.border = '2px solid green';
                p2Card.style.border = '2px solid darkred';
            } else if (p1CardValue < p2CardValue) {
                p1Card.style.border = '2px solid darkred';
                p2Card.style.border = '2px solid green';
            }

            history.textContent += `[${p1CardValue} vs ${p2CardValue}] `;

            result[0].textContent = '';
            result[2].textContent = '';

        }
        this.removeEventListener('click', compareCards);
    }
}