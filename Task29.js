//29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain
//fruits in your array.• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement,such as You really like bananas!
var fav_fruit=["apple","banana","mango"];
var favourite_fruit="banana";

if(favourite_fruit==fav_fruit[0])
{
    console.log("you really like bananas");
}
if(favourite_fruit==fav_fruit[1])
{
    console.log("you really like bananas");

}
if(favourite_fruit==fav_fruit[2])
{
    console.log("you really like bananas");
}
if(favourite_fruit!=fav_fruit[0] || favourite_fruit==fav_fruit[1])
{
console.log("you really like banana");
}

if(favourite_fruit==fav_fruit[0] || favourite_fruit!=fav_fruit[2])
{
console.log("you don't like bananas");
}






