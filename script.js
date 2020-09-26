const firstValue = parseInt(document.getElementById('first')).value;
        const operator = document.getElementById('operand');
        const secondValue = parseInt(document.getElementById('second'));
    switch(operator){
        case "+":
            console.log(firstValue+secondValue);
        break;
        case "-":
            console.log(firstValue-secondValue);
        break;
        case "/":
            if(secondValue === 0){
                console.log("Forbidden")
            }
            console.log(firstValue/secondValue);
        break;
        case "*":
            console.log(firstValue*secondValue);
        break;
        default:
            console.log("Invalid operator");
        break;
        }
        
        firstValue = document.getElementById('FirstValue').value
