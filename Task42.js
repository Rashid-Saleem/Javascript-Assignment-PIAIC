//42. Great Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians by adding
//the phrase the Great to each magician’s name. Call show_magicians() to
//see that the list has actually been modified.
var magicians_names=["Shehzad Roy","Atif Aslam","Abida Perveen"];

console.log(make_great(magicians_names));

function make_great(magicians_names)
{
for(i=0;i<magicians_names.length;i++)
console.log("The Great",magicians_names[i]);

}





