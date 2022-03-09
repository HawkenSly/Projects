// Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

numberList = [5, 15, 3, 7, 4, 54];
numberTotal = 58;
originalLength = numberList.length;

function solveProblem(funcList, k) {
    
    for (let i=0; i < originalLength; i++) {
        let closedListLength = funcList.length;
        numA = funcList[0];
        numB = 0;

        funcList.shift(0);
        closedListLength = funcList.length;

        for (let v=0; v < closedListLength; v++) {
            numB = numA + funcList[v];
            if (numB == k) {
                return numA + " and " + funcList[v] + " match to make " + k + "!";
            }
        }
    }

    return "No matches.";
}

console.log(solveProblem(numberList, numberTotal));
