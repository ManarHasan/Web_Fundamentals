sigma(num){
    var sum = 0;
    for(var i = 0;i<sum;i++){
        sum+=i;
    }
    return sum;
}

function factorial(num){
    if(num == 0){
        return 1;
    }
    return factorial(num-1)*num;
}

function fibonacci(num) 
{ 
    var num1=0; 
    var num2=1; 
    var sum; 
    var i=0; 
    for (i = 0; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
}

function secondToLast(arr){
    if(arr.length <= 1){
        return null;
    }
    return arr[arr.length-2];
}

function nthToLast(arr, num){
    if(arr.length <= 1){
        return null;
    }
    return arr[arr.length-num];
}

function secondLargest(arr){
    if(arr.length <= 1){
        return null;
    }

    var start=0;
    var end =arr.length;
    var swapped = true;

    while(swapped){
        swapped = false;
        for(var i = start; i<end-1; i++){
            if (arr[i]>arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
        end--;
        if(!swapped){
            break;
        }
        swapped = false;
        for(var i = end -1;i>start;i--){
            if (arr[i-1] > arr[i]){
                var temp = arr[i];
                arr[i] = arr[i-1]
                arr[i-1] = temp;
                swapped = true;
            }
        }
        start++
    }
    return arr[arr.length-2];
}

function doubleTrouble(arr){

    for(var i = 0;i<arr.length;i+=2){

        arr.splice(i,0,arr[i]);

    }
    return arr;
}