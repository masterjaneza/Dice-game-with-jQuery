let winnerText = $('.winnerText');
let imgOne = $('.firstDiceImg');
let imgtwo = $('.secondDiceImg');

let arrOfImgs = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png']

let firstRandomImg = Math.floor(Math.random() * arrOfImgs.length);
let secondRandomImg = Math.floor(Math.random() * arrOfImgs.length);

$(window).on('load', function() {
    if(firstRandomImg == secondRandomImg) {
        winnerText.text('TIE')        
    } else if(firstRandomImg < secondRandomImg) {
        imgOne.attr('src', arrOfImgs[firstRandomImg])        
        imgtwo.attr('src', arrOfImgs[secondRandomImg])        
        winnerText.text('Player Two Win!')
    } else {
        imgOne.attr('src', arrOfImgs[firstRandomImg])        
        imgtwo.attr('src', arrOfImgs[secondRandomImg])        
        
        winnerText.text('Player One Win!')
    }
})
