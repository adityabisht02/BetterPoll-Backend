//Function to generate 5 digit random number
function randomNum(){
    let fiveDigitNum = Math.floor(Math.random() * 90000) + 10000;
    return fiveDigitNum;
}