'use strict';

var count=0;
var wrongCounter = 0;
var points = 7;
var randPokemon = Math.round(Math.random() * 10);

console.log('Pokemon number to guess', randPokemon);
console.log('begining overall count:',count);
console.log('begining score:', points);

var userName = prompt('Hello whats your name?');
alert('Hi '+ userName + '. Let\'s play a game');

while (count !==7) {
  console.log('begining of while loop overall count:', count);

  //Question 1
  while (count === 0){
    console.log('inside first loop overall count', count);
    while (myName !=='yes' && myName !=='y') {
      while(wrongCounter !==0){
        while(wrongCounter === 1){
          points--;
          break;
        }
        alert('wrong!');
        break;
      }
      var myName = prompt('Is my name Jesus?').toLowerCase();
      wrongCounter++;
      console.log('Inside Name Counter:', wrongCounter);
      console.log('Name input:', myName);
    }
    break;
  }
  //Question 2
  while (count === 1){
    console.log('inside second loop overall count', count);
    while (myCity !=='no' && myCity !=='n') {
      while(wrongCounter !==0){
        while(wrongCounter === 1){
          points--;
          break;
        }
        alert('wrong!');
        break;
      }
      var myCity = prompt('Was I born in Seattle?').toLowerCase();
      wrongCounter++;
      console.log('Inside city Counter:', wrongCounter);
      console.log('Name input:', myCity);
    }
    break;

  }
  //Question 3
  while (count === 2){
    console.log('inside third loop overall count', count);
    while (myFood !=='no' && myFood !=='n') {
      while(wrongCounter !==0){
        while(wrongCounter === 1){
          points--;
          break;
        }
        alert('wrong!');
        break;
      }
      var myFood = prompt('Is my favorite food pizza').toLowerCase();
      wrongCounter++;
      console.log('Inside food wrong Counter:', wrongCounter);
      console.log('Food input:', myFood);
    }
    break;

  }
  //Question 4
  while (count === 3){
    console.log('inside fourth loop overall count', count);
    while (myFruit !=='n' && myFruit !=='no') {
      while(wrongCounter !==0){
        while(wrongCounter === 1){
          points--;
          break;
        }
        alert('wrong!');
        break;
      }
      var myFruit = prompt('Are bananas my favorite fruit?').toLowerCase();
      wrongCounter++;
      console.log('Inside Fruit Counter:', wrongCounter);
      console.log('Fruit input:', myFruit);
    }
    break;

  }
  //Question 5
  while (count === 4){
    console.log('inside fifth loop overall count', count);
    while (myVegetable !=='n' && myVegetable !=='no') {
      while(wrongCounter !==0){
        while(wrongCounter === 1){
          points--;
          break;
        }
        alert('wrong!');
        break;
      }
      var myVegetable = prompt('Are carrots my favorite Vegetable?').toLowerCase();
      wrongCounter++;
      console.log('Inside Vegetable Counter:', wrongCounter);
      console.log('Vegetable input:', myVegetable);
    }
    break;

  }

  //Question 6
  while (count === 5){
    console.log('inside sixth loop overall count', count);
    while (myPokemon !== randPokemon) {
      while(wrongCounter !==0){
        while(wrongCounter === 1){
          points--;
          break;
        }
        if(myPokemon > randPokemon)
        {alert('guess lower ' + wrongCounter + 'of 4 tries');}
        if(myPokemon < randPokemon)
        {alert('guess higher ' + wrongCounter + 'of 4 tries');}
        break;
      }
      var myPokemon = prompt('How many pokemon did i catch today? (between 0 and 10)');
      wrongCounter++;
      while(wrongCounter === 4){
        alert('better luck next time bud!');
        count++;
        myPokemon = randPokemon;
        console.log('Pokemon matches random number',myPokemon);
        break;
      }
      console.log('Inside Pokemon Counter:', wrongCounter);
      console.log('Pokemon input input:', myPokemon);
    }
    break;

  }
  alert('Correct!');
  count++;
  wrongCounter = 0;
  console.log('current overall count:', count);
  console.log('current score out of 7', points);
}

console.log('final points:', points);
alert('all Done '+ userName +'!. Your final score was ' + points + ' out of 7');
