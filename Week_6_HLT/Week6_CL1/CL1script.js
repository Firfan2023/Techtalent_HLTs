

// Week 6 CL1 


const words = ["Apple", "Orange", "Banana", "Pear" , "Peach", "Strawberry", "Cherry", "Acai"]; //created an array with 8 fruits in it, used capitals so to apply .toLowerCase() method.

const vowels = "aeiou"; //defined a conts string for the vowel characters.

// for loop to iterate through the array
for (let i = 0; i < words.length; i++) {

  const word = words[i].toLowerCase(); //.toLowerCase() method applied, so all lowercase.

  // 2 variables for counting vowels and consonants
  let vowelCount = 0;  
  let consonantCount = 0;

  // for-in loop to iterate through each letter in the word variable. 
  for (let j = 0; j < word.length; j++) {

    // a new variable (letter) is to represent the current character being processed by the inner for loop as it loops through each character of the word string.
    const letter = word[j];  

    if (vowels.includes(letter)) { //using the .includes() method to check if there is the vowels string.

      vowelCount++;  //If it is, we increment the vowelCount.

    } else {

      consonantCount++;  //  Otherwise, increment the consonantCount.
    }
  }
  console.log(`${word} has ${vowelCount} vowels and ${consonantCount} consonants.`); //print the message to the console.
}


