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




console.log(tips)
console.log(finalPayments)

// function billTipCalculator(value, tips){
//     for( i = 0; i < bills.length; i++){
//         if(value[i] < 50){
//             tips.push(value)
//             return bills;
//         }else if(value[i] == 50 || bills[i] < 201){
//             tips.push(value)
//             return bills;
//         }else if(value[i] > 200){
//             tips.push(value)
//             return bills;
//         }else{
//             console.log('No idea')
//         }
//     }
// }
// // billTipCalculator(40, tips);


// var penumpang = ['Nicholas', undefined, 'Al'];
// var tambahPenumpang = function(namaPenumpang, penumpang){
//     if(penumpang.length == 0){
//         penumpang.push(namaPenumpang);
//         return penumpang;    
//     }else{
//         for(i = 0; i < penumpang.length; i++){
//             if(penumpang[i] == undefined){
//                 penumpang[i] = namaPenumpang;
//                 return penumpang;
//             }else if(penumpang[i] == namaPenumpang){
//                 console.log(namaPenumpang + ' sudah ada di dalam angkot.')
//                 return penumpang;
//             }else if(i == penumpang.length -1){
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
//             }
//         }
//     }
// }
// tambahPenumpang('Gery', penumpang)