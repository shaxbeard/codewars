// <!-- You will be given an array of objects (associative arrays in PHP) 
// representing data about developers who have signed up to attend the next coding meetup 
// that you are organising. 

// Your task is to return an array where each object will have a new property 
// 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >? -->

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

// <!-- METHOD 1 - USING FOR EACH() -->
// function greetDevelopers(list) {  
//   list.forEach(dev => dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`);
//   return list;
// }

// <!-- METHOD 2 - USING MAP() -->
function greetDevelopers(list){
  return list.map(dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`}) );
}

console.log(greetDevelopers(list1))
