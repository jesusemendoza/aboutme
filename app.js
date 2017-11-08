'use strict';

var myName;
var myCity;
var myFood;
var myFruit;
var count=0;
var wrongCounter = 0;
console.log("begining overall count:",count)


while (count !=5) {
  console.log("begining of while loop overall count:", count)
  while (count === 0){
    console.log("inside first loop overall count", count)
    while (myName !='yes' && myName !='y') {
      while(wrongCounter !=0){
        alert("wrong!")
        break;
      }
      var myName = prompt("Is my name Jesus?")
      var myName = myName.toLowerCase();
      wrongCounter++
      console.log("Inside Name Counter:", wrongCounter)
      console.log("Name input:", myName)
    }
    break;
  }

  while (count === 1){
    console.log("inside second loop overall count", count)
    while (myCity !='no' && myCity !='n') {
      while(wrongCounter !=0){
        alert("wrong!")
        break;
      }
      var myCity = prompt("Was I born in Seattle?")
      var myCity = myCity.toLowerCase();
      wrongCounter++
      console.log("Inside city Counter:", wrongCounter)
      console.log("Name input:", myCity)
    }
    break;

  }

  while (count === 2){
    console.log("inside third loop overall count", count)
    while (myFood !='no' && myFood !='n') {
      while(wrongCounter !=0){
        alert("wrong!")
        break;
      }
      var myFood = prompt("Is my favorite food pizza")
      var myFood = myFood.toLowerCase();
      wrongCounter++
      console.log("Inside food wrong Counter:", wrongCounter)
      console.log("Food input:", myFood)
    }
    break;

  }

  while (count === 3){
    console.log("inside fourth loop overall count", count)
    while (myFruit !='n' && myFruit !='no') {
      while(wrongCounter !=0){
        alert("wrong!")
        break;
      }
      var myFruit = prompt("Are bananas my favorite fruit?")
      var myFruit = myFruit.toLowerCase();
      wrongCounter++
      console.log("Inside Fruit Counter:", wrongCounter)
      console.log("Fruit input:", myFruit)
    }
    break;

  }

  while (count === 4){
    console.log("inside fifth loop overall count", count)
    while (myVegetable !='n' && myVegetable !='no') {
      while(wrongCounter !=0){
        alert("wrong!")
        break;
      }
      var myVegetable = prompt("Are carrots my favorite Vegetable?")
      var myVegetable = myVegetable.toLowerCase();
      wrongCounter++
      console.log("Inside Vegetable Counter:", wrongCounter)
      console.log("Vegetable input:", myVegetable)
    }
    break;

  }
  alert("Correct!")
  count++
  wrongCounter = 0
  console.log("current overall count:", count)
}

alert("all Done! Great Job!")
