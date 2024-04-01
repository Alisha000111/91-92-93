// 91.................
// Defines an array with three favorite fruits
var favoriteFruits = ["apricot", "mango", "strawberry"];
favoriteFruits.push("peach"); // Adds "peach" to the end of the array
console.log(favoriteFruits); // Outputs: ['apricot', 'mango', 'strawberry', 'peach']
// This line adds a new fruit to our list of favorites.
// 92..................
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
var fruits = ["pomegranate", "melon", "kiwi"];
console.log(removeLastElement(fruits)); // Outputs: 'kiwi'
console.log(fruits); // Outputs: ['pomegranate', 'melon']
// Here, we take out the last fruit and show the updated list.
// 93....................
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1)
        fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
var fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Apple', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.
