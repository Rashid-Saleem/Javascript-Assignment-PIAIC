/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza
instead of printing just the name of the pizza. For each pizza you should
have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states
how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as
I really love pizza!  */

var pizza=["chicken Fajita","Chiken Tikka","Cheezy pizza"];
for(i=0;i<pizza.length;i++)
{
    console.log(pizza[i]);
}
//Modification in for loop
for(i=0;i<pizza.length;i++)
{
    console.log("I Like  "+pizza[i]+"  Pizza");
}

//Addition of line after for loop
console.log("\nFajita pizza is made up of chicken, onion and cheeze \nFor chicken tikka u need to prepare tikka of chicken then u can use pepper , oniion, capsicum etc \nIn cheezay pizza u will find three different types of cheeze in this pizza");
console.log("\n I Really Love Pizza")














