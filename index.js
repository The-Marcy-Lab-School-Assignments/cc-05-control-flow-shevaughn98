//1
function absoluteValue(num){
    if(typeof num === "number"){
        if( Math.sign(num) > 0 ){
            return num * -1
    }else{
        return num
    }
    
    }
}

absoluteValue(10.35)

