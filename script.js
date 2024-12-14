//Question 1
document.getElementById('q1Button').onclick = function(){
    let id = ''
    id += document.getElementById('q1Input').value 
    if(id.length === 9){
        console.log('q1 success ' + id)
        return true
    }else{
        console.log('q1 failed id got: ' + id)
        return false
    }
}

//Question 2
function rishoni(numRi){
    for (let i = 2; i <= Math.sqrt(numRi); i++) {
        if (numRi % i === 0) {
            console.log('q2 the number: ' + numRi + ' is not a prime number.')
            return ; // Divisible by a number other than 1 and itself
        }
    }

    console.log('q2 the number: ' + numRi + ' is a prime number')
}

// rishoni(10)
// rishoni(11)
// rishoni(5)
// rishoni(21)

//Question 3
function putSpace (strToPut){
    let strHelp = ''
    let strLen = strToPut.length
    for(let i = 0; i <= strLen; i++){
        if(strToPut.charAt(i) >= 'A' && strToPut.charAt(i) <= 'Z'){
            strHelp += ' ' + strToPut.charAt(i)
        }else{
            strHelp += strToPut.charAt(i)
        }
    }
    console.log('q3 str is: ' + strHelp)
}

// putSpace('grgHDfDgrghFF')

//Question 4
function strInStr(str1,str2){
    let counter = 0
    let i = 0 
    if(str1.length > str2.length){
        while(i <= str1.length){
            if(str1.substring(i , i + str2.length) === str2){
                counter++
            }
            i++;
        }
    }else if(str2.length > str1.length){
        while(i <= str2.length){
            if(str2.substring(i , i + str1.length) === str1){
                counter++
            }
            i++;
        }
    }else{
        if(str1 === str2){
            counter++
        }
    }
    return console.log('q4 the count is: ' + counter);
}

// strInStr('sub', 'hsubbsubijgsubsub')

//Question 5
function sortString (strToSort){
    let helpTarget
    let helpSwapped
    for(let i = 1; i<=strToSort.length; i++){
        for(let j = 0; j<=strToSort.length-1; j++){
            if(strToSort.charAt(j) > strToSort.charAt(j+1) ){
                helpSwapped = strToSort.charAt(j+1)+strToSort.charAt(j)
                helpTarget = strToSort.charAt(j)+strToSort.charAt(j+1)
                strToSort = strToSort.replace(helpTarget , helpSwapped)
            }
        }
    }
    return console.log('q5 the sorted str is: ' + strToSort)
}

// sortString('hreagreahyre')
// sortString('hreagreahyretrhrtshrshtrsjabcdfeghti')