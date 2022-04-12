// TODO: Declare any global variables we need
let headsFlip = 0       //delcare heads as a variable
let tailsFlip = 0       //declare tails as a variable

document.addEventListener('DOMContentLoaded', function () {
// This is just a sanity check to make sure your JavaScript script is getting loaded

    // TODO: Add event listener and handler for flip and clear buttons
document.getElementById('flip').addEventListener('click', () => {
    let flippedHeads = Math.random() <0.5        //we are using less than 0.5 which is half since there are only 2 sides to the coin
        if (flippedHeads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'    //we are declaring this image to show if flipped heads
            document.getElementById('message').textContent = 'You Flipped Heads!'           //this is the text we want displayed if heads is flipped
            headsFlip +=1                           //this is adding one count to the number of heads flipped
        }
        else {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'    //we are declaring this image to use if flipped tails
            document.getElementById('message').textContent = 'You Flipped Tails!'           //this is the text we want displayed if tails is flipped
            tailsFlip +=1                           //this is adding one count to the number of tails flipped
        }

        let total = headsFlip + tailsFlip           //this will calculate the total number of flips
        let percentHeads = 0                        //we have to create a variable to track the percentage of heads flipped
        let percentTails = 0                        //we have to create a variable to track the percentage of tails flipped

        if (total > 0){
            percentHeads = Math.round((headsFlip / total)*100)      //we cannot divide by zero as this will give us 0 outcome every time
            percentTails = Math.round((tailsFlip / total)*100)
        }
        //this is how we update the scoreboard to show the content in each box during the game
        document.getElementById('heads').textContent = headsFlip
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsFlip
        document.getElementById('tails-percent').textContent = percentTails + '%'
})
        // Clear Button Click Handler
    document.getElementById('clear').addEventListener('click', function () {
        //we need to reset the heads and tails values to zero as we have 'cleared' the scoreboard
        headsFlip = 0
        tailsFlip = 0
        
        document.getElementById('message').textContent = 'Let\'s Get Rolling!'
        let total = headsFlip + tailsFlip
        let percentHeads = 0
        let percentTails = 0

        if (total >0) {
            percentHeads = Math.round((headsFlip / total)*100)     //same as before as we are essentially starting over again
            percentTails = Math.round((tailsFlip / total)*100)
        }
        //This will update the scoreboard back to zero
        document.getElementById('heads').textContent = headsFlip
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsFlip
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
})