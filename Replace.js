
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/


function myReplace(str, before, after) {

   //check if the first letter is capitalized
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
          //-change "after" to be capitalized
        return str.replace(before, after.charAt(0).toUpperCase(0) + after.slice(1));
    } else {

      return str.replace(before, after);
    }

}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") //should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") //should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") //should return "Let us get back to more Algorithms".
