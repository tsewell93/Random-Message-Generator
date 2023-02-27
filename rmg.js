//Creating an Array of Animal Objects that will be the basis for the random animal generator - this will include Animal Name, Classification, Height and Weight. This can be expanded with more animals later to increase the randomness of the generated species. 
const animalArray = [{species: 'Elephant', classification: 'Mammal', height: 3, weight: 6000, legs: 4, arms: 0}, {species: 'Wolf', classification: 'Mammal', height: 1, weight: 50, legs: 4, arms: 0}, {species: 'Eagle', classification: 'Bird', height: 1, weight: 6, legs: 2, arms: 2}, {species: 'Shark', classification: 'Fish', height: 0.5, weight: 300, legs: 0, arms: 0}, {species: 'Camel', classification: 'Mammal', height: 2, weight: 500, legs: 4, arms: 0}, {species: 'Monkey', classification: 'Mammal', height: 0.5, weight: 30, legs: 2, arms: 2}];

//Array to hold the letters A - Z as the first initial for the new name
const nameInitial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//Creating an array of random latin-sounding names to use as a base for creating the new species names - again can be expanded later to increase the randomness of the names generated for the new species. 
const latinNames = ['Acutus', 'Albidens', 'Branchia', 'Brittanicus', 'Calvus', 'Chordatus', 'Digitatus', 'Dulcis'];

//Blank variable to store the newly discovered species object
let newSpecies;

//Random number generator function - takes in an array as an input and uses this to generate a random number that can choose any entry in the array. 
const randomNum = (array) => {
    return Math.floor(Math.random() * (array.length));
}

//A factory function to store the new species of animal in an object
const getNewAnimal = (speciesName, head, body, arms, legs) => {
    return {
    speciesName: speciesName,
    head: head,
    body: body,
    arms: arms,
    legs: legs
    }
};

//generate a random name for the new species from the latin names array and the alphabet array
const getNewName = (arr1, arr2) => {
    return `${arr1[randomNum(arr1)]}. ${arr2[randomNum(arr2)]}`;
}

//Function to generate a random animal from those stored in animalArray
const generateNewSpecies = (array) => {
    let head = array[randomNum(array)].species;
    let body = array[randomNum(array)].species;
    let arms = array[randomNum(array)].species;
    let legs = array[randomNum(array)].species;
    //re-run the randomiser if all parts come from the same animal
    while ((head === body) && (head === arms) && (head === legs)){
        head = array[randomNum(array)].species;
        body = array[randomNum(array)].species;
        arms = array[randomNum(array)].species;
        legs = array[randomNum(array)].species;
    }
    //run the function getNewAnimal to store the new species characteristics in an object
    return newSpecies = getNewAnimal(getNewName(nameInitial, latinNames), head, body, arms, legs);
}

//Function to calculate the weight of the new animal - the weight is simple the average of the weighted weights of all parts. For example - head accounts for 15% of the total weight, the body 50%, the arms 15% and the legs 20%. Takes in newSpecies object and compares against the animalArray
const getWeight = (obj, arr) => {
    let weight = 0;
    for (let i = 0; i < arr.length - 1; i++){
        //calculate the head weight
        if (arr[i].species === obj.head){
            weight += (arr[i].weight * 0.15);
            //console.log(weight);
        }
        //calculate the body weight
        if (arr[i].species === obj.body){
            weight += (arr[i].weight * 0.5);
            //console.log(weight);
        }
        //calculate the arms weight
        if (arr[i].species === obj.arms){
            weight += (arr[i].weight * 0.15);
            //console.log(weight);
        }
        //calculate the legs weight
        if (arr[i].species === obj.legs){
            weight += (arr[i].weight * 0.2);
            //console.log(weight);
        }
    }
    return `${weight}kg`;
}

//Function to calculate the height of the new animal - the height is assumed to be the sum of the head, body, and leg each multiplied by a weight factor and rounded up. Takes in newSpecies object and compares against the animalArray
const getHeight = (obj, arr) => {
    let height = 0;
    for (let i = 0; i < arr.length - 1; i++){
        //calculate the head height
        if (arr[i].species === obj.head){
            height += (Math.ceil(arr[i].height * 0.15));
            //console.log(height);
        }
        //calculate the body height
        if (arr[i].species === obj.body){
            height += (Math.ceil(arr[i].height * 0.5));
            //console.log(height);
        }
        //calculate the legs height
        if (arr[i].species === obj.legs){
            height += (Math.ceil(arr[i].height * 0.35));
            //console.log(height);
        }
    }
    return `${height}m`;
}




generateNewSpecies(animalArray);
console.log(newSpecies);
console.log(getWeight(newSpecies, animalArray));
console.log(getHeight(newSpecies, animalArray));