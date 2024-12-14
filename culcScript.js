let displayBoxStr = document.getElementById('displayBox')
let firstValue = ''
let actionPressed = ''
let resultShowed = false

function pressNumber(num){
    if(displayBoxStr.textContent === '0'){
        displayBoxStr.textContent = num
    }else if(resultShowed){
        firstValue = ''
        actionPressed = ''
        displayBoxStr.textContent = num
        resultShowed = false
    }else if(displayBoxStr.textContent === 'please enter an operation first'){
        firstValue = ''
        displayBoxStr.textContent = num
    }else if(displayBoxStr.textContent === 'please enter a number first'){
        displayBoxStr.textContent = num
    } else if(displayBoxStr.textContent === 'please enter a number'){
        displayBoxStr.textContent = num
    }else {
        displayBoxStr.textContent += num
    }
}

function pressAction(action){
    if(displayBoxStr.textContent === ''){
        displayBoxStr.textContent = 'please enter a number'
        return;
    }else{
        firstValue = displayBoxStr.textContent
        actionPressed = action
        displayBoxStr.textContent = ''
        return;
    }
}

function resultPress(){
    if(actionPressed === '' ){
        displayBoxStr.textContent = 'please enter an operation first'

    }else if(firstValue === '' || displayBoxStr.textContent === ''){
        displayBoxStr.textContent = 'please enter a number first'
    }else {
        if(actionPressed === '+'){
            displayBoxStr.textContent = Number(firstValue) + Number(displayBoxStr.textContent)
        }else if(actionPressed === '-'){
            displayBoxStr.textContent = Number(firstValue) - Number(displayBoxStr.textContent)            
        }else if(actionPressed === '*'){
            displayBoxStr.textContent = Number(firstValue) * Number(displayBoxStr.textContent)            
        }else if(actionPressed === '/'){
            if(displayBoxStr.textContent === '0'){
                displayBoxStr.textContent = 'cant divide with 0'
            }else{
                displayBoxStr.textContent = Number(firstValue) / Number(displayBoxStr.textContent)
            }
        }
        resultShowed = true;
    }
}

function pressedC(){
    firstValue = ''
    actionPressed = ''
    displayBoxStr.textContent = ''
}