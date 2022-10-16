/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
var a="Islamabad";b="Rawalpindi" ;var c=["ali","shuja","Qasim"]
if(a.length==b.length? console.log("same length"):console.log("different length"));
if(a.length!=b.length? console.log("same length"):console.log("different length"));

if(a.toLowerCase()==a? console.log("both are equal"):console.log("not equal"));

if(a.charAt(5)=='a'? console.log("characters are equal"):console.log("not equal"));
if(a.charCodeAt(3) >=3? console.log("code is greater"):console.log("not greater"));
if(a.charCodeAt(3) >=399? console.log("code is greater"):console.log("code is not greater"));

if(a.length==9 && b.length==10)
{
    console.log("true");
}
else
{
    console.log("false");
}

if(a.charAt(3)=='j' || b.length==6)
{
    console.log("true");
}
else
{
    console.log("false");
}
if(c[2].toLowerCase()=="qasim")
{
    console.log("same hain");
}
else
{
    console.log("not same");
}

