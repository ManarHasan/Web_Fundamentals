function arr(){
    var arr=[];
    for(var i = 1; i<=255;i++){
        arr.push(i);}
    console.log(arr);
}


function sumOdd5000(){
    var sum=0;
    for(i=1;i<=5000;i+=2){
        sum +=i;
    }
    console.log(sum);
}

function sumEven1000(){
    var sum=0;
    for(i=0;i<=1000;i+=2){
        sum +=i;
    }
    console.log(sum);
}

function iterateAnArray(arr){
    var sum= 0;
    for(var i =0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log(sum);
}

function max(arr){
    var max = arr[0];
    for(var i=0;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    console.log(max);
}

function avg(arr){
    var sum= 0;
    var avg = 0;
    for(var i =0;i<arr.length;i++){
        sum+=arr[i];
    }
    avg = sum/arr.length;
    console.log(avg);
}

function arrOdd(){
    var odd=[];
    for(i=1;i<50;i+=2){
        odd.push(i);
    }
    console.log(odd);
}

function greaterThanY(arr,Y){
    var greater=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>Y){
            greater++;
        }
    }
    console.log(greater);
}

function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}

function negatives(arr){
    for(var i = 0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    console.log(arr);
}

function mma(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var avg = 0;
    var mmaArr= [];
    for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
    }
    for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
    }
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    mmaArr.push(max);
    mmaArr.push(min);
    mmaArr.push(avg);
    console.log(mmaArr);
}

function swap(arr){
    var temp =0;
    temp=arr[arr.length-2];
    arr[arr.length-2]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    console.log(arr);
}

function numToStr(arr){
    for(var i = 0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    console.log(arr);
}