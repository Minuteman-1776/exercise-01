var bills = [124,48,248];
var tips  = [];
var finalPayments = [];


var billTipCalculator = function(number){
    if(number < 50){
        tips.push(number)
        console.log('Bill is less than 50, so the tip will be 20% of the bill')
        return bills;
    }else if(number == 50 || number < 201){
        tips.push(number)
        console.log('Bill is equal to fifty and is less than 201, so the tip will be 15% of the bill')
        return bills;
    }else if(number > 200){
        tips.push(number)
        console.log('Bill is more than 200, so the tip will be 10% of the bill.')
        return bills;
    }
}
billTipCalculator(40)
billTipCalculator(80)
billTipCalculator(225)


//gua ngerjain apa adanya ko wkwkw


console.log(tips)
console.log(finalPayments)
