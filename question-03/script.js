var bills = [124,48,248];
var tips  = [];
var finalPayments = [];


var billTipCalculator = function(number){
    if(number < 50){
        var total;
        total = number*25/100;
		tips.push(number)
      	finalPayments.push(total)
        return total;
    }else if(number == 50 || number < 201){
        var total 
        total = number*15/100;
 		tips.push(number)
      	finalPayments.push(total)
        return total;
    }else if(number > 200){
        var total 
        total = number*10/100;         
		tips.push(number)
      	finalPayments.push(total)
        return total;
    }
}
billTipCalculator(124)
billTipCalculator(48)
billTipCalculator(248)


console.log(tips)
console.log(finalPayments)
