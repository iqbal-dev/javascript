

// /**************** feet to mile *********/ 

function feetToMile(feet){
    if(mile<0){
        return 'your input is invalid!, please etner positive number'
    }
    var mile = feet/5280
    return mile.toFixed(4)
}
console.log(feetToMile(1000))




 /*************wood calculator***********/

function woodCalculator(chair,table,bed){
    var total = 0;

    if(Number.isInteger(chair)==false|| Number.isInteger(table)==false||Number.isInteger(bed)==false){
        return 'your input is negative,decimal or infinity. please enter valid number!'
    }

    chair *= 1;
    table *= 3;
    bed *= 5;

    total = chair + table + bed;
    return total
}
console.log(woodCalculator(14,2,2))




//  /******** brick calculator *********/

function brickCalculator(floor){
    var totalBrick = 0
    if(floor<0){
        return 'Your input is invalid!,Please enter positive number'
    }
    else if(floor<11){
        var totalFeet = floor*15;
        totalBrick = totalFeet*1000;
        return totalBrick;
    }
    else if(floor>10 && floor<=20){
        var remainFloor = floor - 10;
        var remainFloorFeet = remainFloor*12;

        totalFeet = 10*15 + remainFloorFeet;

        totalBrick = totalFeet*1000;

        return totalBrick;
    }
    else{
        remainFloor = floor - 20;
        remainFloorFeet = remainFloor*10;

        totalFeet = (10*15) + (10*12) +remainFloorFeet;

        totalBrick = totalFeet*1000;

        return totalBrick
    }
}


console.log(brickCalculator(15))




/*************** tiny friends ***********/
var array = []
function tinyFriends(arr){
    if(arr == ''){
        return 'your input array is empty'
    }
    else{
        var smallFriend = arr[0]
        for(var i = 0; i<arr.length; i++){
            var elements = arr[i]
            if(elements.length<smallFriend.length && elements[i]!=' '){
                smallFriend = arr[i]
            }
        }
        return smallFriend
    }
}
console.log(tinyFriends(array))
