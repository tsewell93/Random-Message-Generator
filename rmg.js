console.log("Hello World");

//Creating an Array of Animal Objects that will be the basis for the random animal generator - this will include Animal Name, Classification, Height and Weight. This can be expanded with more animals later to increase the randomness of the generated species. 
const animalArray = [{species: 'Elephant', classification: 'Mammal', height: 3, weight: 6000, legs: 4, arms: 0}, {species: 'Wolf', classification: 'Mammal', height: 1, weight: 50, legs: 4, arms: 0}, {species: 'Eagle', classification: 'Bird', height: 1, weight: 6, legs: 2, arms: 2}, {species: 'Shark', classification: 'Fish', height: 0.5, weight: 300, legs: 0, arms: 0}, {species: 'Camel', classification: 'Mammal', height: 2, weight: 500, legs: 4, arms: 0}, {species: 'Monkey', classification: 'Mammal', height: 0.5, weight: 30, legs: 2, arms: 2}];

//Creating an array of random latin-sounding names to use as a base for creating the new species names - again can be expanded later to increase the randomness of the names generated for the new species. 
const latinNames = ['Acutus', 'Albidens', 'Branchia', 'Brittanicus', 'Calvus', 'Chordatus', 'Digitatus', 'Dulcis'];

//Random number generator function - takes in an arrays as an input and uses this to generate a random number that will can choose and entry in the array. 
const randomNum = (array) => {
    return Math.floor(Math.random() * (array.length));
}