function biggieSize(arr){
    for(var i = 0;i<arr.length;i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return arr;
}

function printLowReturnHigh(arr){
    var max = arr[0];
    var min = arr[0];
    for(var i = 0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
        if(min>arr[i]){
            min=arr[i];
        }
    }
    document.write(min);
    return max;
}

function printOneReturnAnother(arr){
    document.write(arr[arr.length-2]);
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 == 1){
            return arr[i];
        }
    }
}

function DoubleVision(arr){
    var newArr=[];
    for(var i = 0; i<arr.length;i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}

function CountPositives(arr){
    var counter=0;
    for(var i = 0;i<arr.length;i++){
        if(arr[i]>0){
            counter++;
            arr[arr.length-1] = counter;
        }
    }
    return arr;
}

function evensAndOdds(arr) {
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1 && arr[i + 2] % 2 == 		1) {
        document.write("That's odd!")
    }
    if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 		0) {
        document.write("Even more so!")
    }
    }
}

function IncrementTheSeconds(){
    for(var i = 1;i<arr.length;i+=2){
        arr[i]+=1;
    }
    for(var i=0;arr.length;i++){
        console.log(arr[i]);
    }
    return arr;
}

function previousLengths(arr){
    for(var i = arr.length-1;i>0;i--){
        var a = arr[i]
        arr[i] = a.length;
    }
    return arr;
}

function addSeven(arr){
    arrNew=[];
    for(var i = 0;i<arr.length;i++){
        arrNew.push(arr[i]+7);
    }
    return arrNew;
}

function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
function negative(arr){
    var negative = [];
    for(var i =0;i<arr.length;i++){
        if(arr[i] > 0){
            arr[i]= arr[i]*-1;
        }
        negative.push(arr[i]);
    }
}

function hungry(arr){
    var gotFood = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy");
            gotFood = true;
        }
    }
    if (gotFood == false){
        console.log("I'm hungry");
    }
}

function centerSwap(arr){
    for (var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

function scaleArray(arr,num){
    for(var i = 0;i<arr.length;i++){
        arr[i]*=num;
    }
    console.log(arr);
}
