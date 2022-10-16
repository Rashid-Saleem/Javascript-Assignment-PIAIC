/*16. More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let list_anyone=["Ali","Basit","Fakhar Zaman","Rizwan the king","Shah g"];
 //list_anyone.slice(0,"jajaj");
 list_anyone.unshift("Sir ZIa");// adding guest to the start
 console.log(list_anyone);

list_anyone.splice(2,0,"IFTI CHACHA");//ADDING CHACHA IN MIDDLE
console.log(list_anyone);
 console.log(list_anyone.push("rashid saleem"));//adding end of array
 console.log(list_anyone);
 for(i=0;i<list_anyone.length;i++)
 {
 console.log("Dear  "+" "+list_anyone[i]+" "+"u r invited on dinner");

 }







