/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

var usernames=["ali","usman","rashid","admin","jamsheed","ifti chacha","Shoaib Malik"];
console.log("Length of usernames array is  =  ",usernames.length);
while(usernames.length>0)
{
    usernames.pop();
}
if(usernames.length==0)
{
    console.log(" Now after removal from list Length of usernames array is  = ",usernames.length);
    console.log("we need to find some users");
}

else{
console.log("we have users");
}










