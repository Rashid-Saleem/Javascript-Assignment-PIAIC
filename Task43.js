/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/

var magicians_names=["Shehzad Roy","Atif Aslam","Abida Perveen"];

console.log(show_magicians(magicians_names));

console.log(make_great(magicians_names));
function make_great(magicians_names)
{
for(i=0;i<magicians_names.length;i++)
var b= console.log("The Great",magicians_names[i]);
return b;
}
function show_magicians(magicians_names)
{
for(i=0;i<magicians_names.length;i++)
console.log(magicians_names[i]);

}

