var array = [1,2,3,4,5,6,7,8,9,10];


function addition(a){
    const newNumber = a.reduce((accumulator, currentValue) =>
    accumulator + currentValue);

    // console.log(newNumber)
}
// addition(array);


function multiplication(a){
    const newNumber = a.map(a => a * 2);

    // console.log(newNumber)
}
// multiplication(array);


function reverse(a){
    a.sort((a,b)=>b-a);

    // console.log(a)
}
// reverse(array);


function printAll(){
    for (var counter = 0; counter <= 1000; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(counter);
        }
    }
}
// printAll();