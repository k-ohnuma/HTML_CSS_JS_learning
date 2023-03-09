aray = [1, 2, 3, 4, 5, 8]

function forEach(ary, callback){
    for (let i = 0; i < ary.length; i++){
        num = callback(ary[i]);
        console.log(num);

    }
}

function log(val){
    console.log(val)
}

function double(val){
    val *= 2;
    log(val);
}

forEach(aray, (val) => val *= 2);