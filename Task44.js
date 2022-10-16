/*44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
var arritem=["cheeze","Chicken","Mayoneese"];
var sanditem=["meat"];
var sandwichitem=["fish","beef"];
summary_of_sandwich(arritem);
summary_of_sandwich(sanditem);
summary_of_sandwich(sandwichitem);
function summary_of_sandwich(arritem)
{
    for(i=0;i<arritem.length;i++)
    console.log("summary of sandwich  is  "+arritem[i]); 
}





