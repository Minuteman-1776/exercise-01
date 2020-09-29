# Code Review

This is a review for your assignment that I had given you on 16 September 2020 to 20 September 2020 (19:00).

## General Review

You actually did good. However, some things could be improved:

* Stop giving up too quickly.
* Quit pondering about how you should become. Instead, learn whatever your heart desires and push forward. Your time could be easily used to learn more things if you use that time to learn instead of pondering around aimlessly.
* You have to learn how to Google certain keywords. When you do it, you can become a better programmer.
* Start learning to understand the questions and the instructions a bit better. In a way, it could help you further.
* Start learning modern JavaScript (ES6+). I believe it will become useful in your future progression.
* Use a code formatter like Prettier to make better styled code.

## Question 1

You have answered the questions correctly. There is nothing wrong with your submission, but I suggest that you read more about ES6+ JavaScript to write and understand modern JavaScript code better.

## Question 2

Same like question one, you have answered the questions properly and correctly.

## Question 3

You have misunderstood the question. The `tips` array should be filled with the tips, not the number of the current bill. The `finalPayments` array should be filled with the total value of each bill and its tip. The correct solution should be in the below code. Other than that, you have done the function well.

```javascript
  const tip = number * tip_percentage;
  tips.push(tip);
  finalPayments.push(number + tip);
```

Do take note that I am making my solution based on your code (your style is calling a function for each bill).

## Question 4

You have created the object, and printed the keys and values to the console well. However, the rest of your functions are wrong and do not represent the solution to the question that I asked you. Let's start from the `bmi` function.

### BMI Function

You did not create the function. Was there anything too hard? Anyway, here's my solution to this question. Remember that BMI is someone's mass (in kilograms) divided by the double of someone's height (in meters).

```javascript
  // We are defining our 'bmi' function right in the object.
  const person2 = {
    fullName: 'Ichinose Chizuru',
    nickName: 'Mizuhara Chizuru',
    gender: 'Female',
    yearOfBirth: 2000,
    mass: 55,
    height: 165,
    hobbies: ['Dating', 'Sports', 'Dancing'],
    // Multiplied by 0.01 to convert centimeters to meters.
    bmi: function () {
      this.bmi = this.mass / (this.height * 0.01 * this.height * 0.01);
    },
  };

  // We are calling our function here.
  person2.bmi();
```

### Printing BMI

After you applied all the functions to each of the objects, then it is very simple to print them all to the console. Remember that after the `bmi` function had been called, the `bmi` attribute has been set.

```javascript
  console.log(person1.bmi, person2.bmi, person3.bmi, person4.bmi);
```

### Implementing Age Function

You have mistakes in your function. Age means the difference between this year and the character's year of birth. The correct answer should be like the following snippet below.

```javascript
  const calculateAge = (yearOfBirth) => {
    return new Date().getFullYear() - yearOfBirth;
  };

  // If you prefer the old JavaScript syntax:
  function calculateAge (yearOfBirth) {
    return new Date().getFullYear() - yearOfBirth;
  }

  // Then, we can easily print the characters's age to the console.
  console.log(
    calculateAge(person1.yearOfBirth),
    calculateAge(person2.yearOfBirth),
    calculateAge(person3.yearOfBirth),
    calculateAge(person4.yearOfBirth)
  );
```

### Finding Maximum, Minimum, and the Average of the BMI

This is actually a very simple problem once you solved the BMI question.

```javascript
  // Ensure that the 'person.bmi()' function had been called beforehand.
  const bmis = [person1.bmi, person2.bmi, person3.bmi, person4.bmi];
  const averageBmi = (person1.bmi, person2.bmi, person3.bmi, person4.bmi) / 4;

  // Printing out the maximum, minimum, and the average.
  console.log('Max:', bmis.sort()[3], 'Min:', bmis.sort()[0]);
  console.log('Average:', averageBmi);
```

### Finding First Three Characters of Each of the Characters Hobbies

This small brain teaser only requires the `substr` function to be solved. Here's my take on it.

```javascript
  // An example for one person. One person have three hobbies.
  for (let i = 0; i < 3; i++) {
    console.log(
      `Person #1 hobbies (first 3 characters): ${person1.hobbies[i].substr(0, 3)}`
    );
  }
```

## Question 5

After taking the data from the API, then all you need is just to render it in your HTML or JavaScript. This is a simple applied creativity problem. As a note, I changed the API URL to not need authentication anymore. The new API could be seen in `https://lessons.nicholasdw.com/practice`.

Here is a simple way to render HTML in JavaScript pages. Of course, you could have many more alternatives. A creativity problem like this could not have only one way to solve.

```javascript
  (async () => {
    const URLAPI = 'https://lessons.nicholasdw.com/practice';
    const res = await fetch(URLAPI);
    const data = await res.json();

    const markup = `
      <div class="your-class">
        <p>${data.characters[0].fullName}</p>
      </div>
      <div class="your-class-2">
        <p>${data.characters[0].nickname}</p>
      </div>
      <div class="your-class-3">
        <img src="${data.characters[0].image}" />
      </div>
  })();
```

## Closing

You actually have potential, however your mental block and the reasons I have once told you are blocking you from unleashing your full potential. Fix your mental block and I believe you will become a better programmer. If you want me to give you more exercises, just give me a message.

Good luck 👍!
