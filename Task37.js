/*37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love JavaScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/
var siz;
console.log(medium_shirt(siz,"I love javascript"));
console.log(large_shirt(siz,"I Love javascript"));
function medium_shirt(siz,text)
{
    var siz= 28;
console.log("The Size of your medium shirt is  "+siz+" "+text);
}

function large_shirt(siz,text)
{
    var siz=35;

console.log("The size of large shirt is  "+siz+" "+text);
}







