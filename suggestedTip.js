//Suggested Tip

function tipCalc(){
    
    // grab the input values
    const billAmount = document.querySelector("#cost").value;
    
    //turn strings into numbers
    const billAmountNumber = parseFloat(billAmount);
    
    // calculations
    const totalAmountTen = (0.10 * billAmountNumber);
    const totalAmountFifteen = (0.15 * billAmountNumber);
    const totalAmountTwenty = (0.20 * billAmountNumber);
    
    const tipTotalTen = document.querySelector(".ten-tip");
    tipTotalTen.innerHTML = "$" + (totalAmountTen).toFixed(2);

    const tipTotalFifteen = document.querySelector(".fifteen-tip");
    tipTotalFifteen.innerHTML =  "$" + (totalAmountFifteen).toFixed(2);

    const tipTotalTwenty = document.querySelector(".twenty-tip");
    tipTotalTwenty.innerHTML = "$" + (totalAmountTwenty).toFixed(2);

}

const calcBtn = document.querySelector("#calculateBtn")
function alertMe(){
alert("ERROR!")
}

function changeButtonColor(){
    
    let color = Math.floor(Math.random() * 16777215).toString(16)
    
    calcBtn.style.backgroundColor = `#${color}`
}
        
        calcBtn.addEventListener('click', function(e){
        tipCalc()
        changeButtonColor()
        })
        
        
        
        