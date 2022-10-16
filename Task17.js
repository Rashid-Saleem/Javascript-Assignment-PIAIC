/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space 
for only  two guests• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
 only two people for dinner. 
 • Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
 a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/
let list_anyone=["Ali","Basit","Fakhar Zaman","Rizwan the king","Shah g"];
console.log("As dinner table won't arrive in time for dinner so space is only for two guests",list_anyone);
for(i=5;i>2;i--)
{

    console.log("Sorry u r not invited to dinner",list_anyone.pop());
}
for(j=0;j<list_anyone.length;j++)
{
console.log("u r still invited on dinner",list_anyone[j]);

}
for(j=0;j<=list_anyone.length;j++)
{
list_anyone.pop();
}
console.log(list_anyone);









