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
// console.log(max(a, b))


function min(a, b){
    if(a < b){
        console.log('The smallest number is = ' +a);
    }else if(b < a){
        console.log('The smallest number is = ' +b);
    }else{
        console.log('Both are equal');
    }
};
// console.log(min(a, b))


function operation(a, b){
    var total;
    total = a*b/2;
    return total;
};
// console.log(operation(a, b))

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
// console.log(modulo(a, b))