var person1 = {
    'fullName' : 'Mai Sakurajima',
    'nickName' : 'Mai-san',
    'gender' : 'Female',
    'yearOfBirth' : 2000,
    'mass' : 50,
    'height' : 165,
    'hobbies' : ['Cooking', 'Acting', 'Fashion'],
    'bmi' : function(){

    }
}


var person2 = {
    'fullName' : 'Asada Shino',
    'nickName' : 'Sinon',
    'gender' : 'Female',
    'yearOfBirth' : 2001,
    'mass' : 52,
    'height' : 163,
    'hobbies' : ['Guns', 'Videogames', 'Glasses'],
    'bmi' : function(){

    }
}

var person3 = {
    'fullName' : 'Adagaki Aki',
    'nickName' : 'Princess Aki',
    'gender' : 'Female',
    'yearOfBirth' : 2000,
    'mass' : 55,
    'height' : 161,
    'hobbies' : ['Eating', 'Dogs', 'Vacation'],
    'bmi' : function(){

    }
}

var person4 = {
    'fullName' : 'Ichinose Chizuru',
    'nickName' : 'Mizuhara Chizuru',
    'gender' : 'Female',
    'yearOfBirth' : 2000,
    'mass' : 55,
    'height' : 165,
    'hobbies' : ['Dating', 'Sports', 'Dancing'],
    'bmi' : function(){
        
    }
}


//1
person1.bmi();


//2
console.log(Object.keys(person1));


//3
console.log(Object.values(person1));


//4
yearOfBirth = person1.yearOfBirth;

function calculateAge(yearOfBirth){
    var total;
    total = yearOfBirth-1980;
    console.log(total);
    return total;
}
calculateAge(yearOfBirth);


//5
var arr1 = []
arr1.push(person1)
console.log(arr1)


//6
console.log(person1.hobbies)