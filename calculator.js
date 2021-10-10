//let inputs = document.getElementById("calculatorInput");
const inputs = new Array(3);
let equalsFlag = false;
let operationFlag = false;

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
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"2")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;     
            case "3Btn":
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"3")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;
            case "4Btn":
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"4")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;
            case "5Btn":
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"5")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;
            case "6Btn":
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"6")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;     
            case "7Btn":
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"7")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;
            case "8Btn":
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"8")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;
            case "9Btn":
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"9")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;
            case "0Btn":
                document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"0")
                if(operationFlag == true){
                    inputs[2] = document.getElementById("calculatorScreen").innerHTML;
                }
                break;
            case "clearBtn":
                clear();
                break;
            default:
                break;
        }
    }
});

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
//                    inputs[2] = document.getElementById("calculatorScreen").innerHTML
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

    
    // if(event.target.className == "calculatorButton" && event.target.id =="1Btn"){
    //     alert("hello")
    //     document.getElementById("calculatorScreen").innerHTML = Number(document.getElementById("calculatorScreen").innerHTML +"1")
    // }
    //else if(event.target.className =="indivDiv"){
    //     event.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    // }

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