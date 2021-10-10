const inputs = new Array(3); // [firstNumber, operator, secondNumber]
let equalsFlag = false; //flag to see if equals was the last operation performed
let operationFlag = false;//flag to see if operation button was clicked. Needed for operation changes

//Event delegation for input buttons and clearing
document.getElementById("calculatorInput").addEventListener("click", function(event){
    if(inputs[1] != null){
        document.getElementById("calculatorScreen").innerHTML = 0;
    }
    if(equalsFlag == true && operationFlag == false){
        equalsFlag = false;
        clear();
    }
    if(event.target.className == "calculatorButton"){
        switch(event.target.id){
            case "1Btn":
                numberLogic("1Btn");
                break;
            case "2Btn":
                numberLogic("2Btn");
                break;     
            case "3Btn":
                numberLogic("3Btn");
                break;
            case "4Btn":
                numberLogic("4Btn");
                break;
            case "5Btn":
                numberLogic("5Btn");
                break;
            case "6Btn":
                numberLogic("6Btn");
                break;     
            case "7Btn":
                numberLogic("7Btn");
                break;
            case "8Btn":
                numberLogic("8Btn");
                break;
            case "9Btn":
                numberLogic("9Btn");
                break;
            case "0Btn":
                numberLogic("0Btn");
                break;
            case "clearBtn":
                clear();
                break;
            default:
                break;
        }
    }
});

//Event delegation for operations
document.getElementById("calculatorOperations").addEventListener("click", function(event){
    //if(equalsFlag == true) equalsFlag = false;
    operationFlag = true;
    if(event.target.className == "calculatorButton"){
        if(inputs[0] == null){
            inputs[0] = document.getElementById("calculatorScreen").innerHTML;
        }
        switch(event.target.id){
            case "addBtn":
                //operation function
                inputs[1] = "+"

                break;
            case "subBtn":
                //operation function
                inputs[1] = "-"
                break;     
            case "multBtn":
                //operation function of inputs
                inputs[1] = "*"
                break;
            case "divBtn":
                //operation function of inputs
                inputs[1] = "/"
                break;    
            case "equalsBtn":
                //operation function of inputs
                operation();
                equalsFlag = true;
                operationFlag = false;
                break;
        }
        
    }
});

 function operation(){
    let firstNum = Number(inputs[0]);
    if(inputs[2] == null){
        inputs[2] = document.getElementById("calculatorScreen").innerHTML
    }
    let secondNum = Number(inputs[2]);
    console.log(firstNum, secondNum)
    let answer;
    switch(inputs[1]){
        case "+":
            answer = firstNum + secondNum;
            document.getElementById("calculatorScreen").innerHTML = answer;
            inputs[0] = answer;
            break;
        case "-":
            answer = firstNum - secondNum;
            document.getElementById("calculatorScreen").innerHTML = answer;
            inputs[0] = answer;
            break;
        case "*":
            answer = firstNum * secondNum;
            document.getElementById("calculatorScreen").innerHTML = answer;
            inputs[0] = answer;
            break;
        case "/":
            if(secondNum === 0){
                alert("Don't divide by zero. What are you doing?");
                clear();
                return;
            }
            answer = firstNum / secondNum;
            document.getElementById("calculatorScreen").innerHTML = answer;
            inputs[0] = answer;
            break;
        default:
            break;
    }
}

function clear(){
    for(let i = 0; i < inputs.length; i++){
        inputs[i] = null;
    }
    document.getElementById("calculatorScreen").innerHTML = 0;
    return;
}

function numberLogic(str){
    let number = str[0]
    document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML + number)
    if(operationFlag == true){
        inputs[2] = document.getElementById("calculatorScreen").innerHTML;
    }
}