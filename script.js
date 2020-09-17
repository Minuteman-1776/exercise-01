var a = 5;
var b = 10;


function max(a, b){
    if(a > b){
        console.log('The largest number is = ' +a);
    }else if(b > a){
        console.log('The largest number is = ' +b);
    }else{
        console.log('Both are equal');
    }
};


function min(a, b){
    if(a < b){
        console.log('The smallest number is = ' +a);
    }else if(b < a){
        console.log('The smallest number is = ' +b);
    }else{
        console.log('Both are equal');
    }
};


function operation(a, b){
    var total;
    total = a*b/2;
    return total;
};


function modulo(a, b){
    if( a %2 === 0 ){
        console.log(a + ' Is an even number');
    }else if( a %2 === 1 ){
        console.log(a + ' Is an odd number');
    }
    if( b %2 === 0){
        console.log(b + ' Is and even number');
    }else if( b %2 === 1){
        console.log(b + ' Is an odd number');
    }
}
