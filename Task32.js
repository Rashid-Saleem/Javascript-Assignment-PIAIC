/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

var current_users=["ALI","HAMID","BILAL","ASIF","JAMAL"];
var new_users=["AMIR","ASIF","JAMSHED","FAISAL","BILAL"];
for(i=0;i<new_users.length;i++)
{
    for(j=0;j<current_users.length;j++)
    {

        if(new_users[i]==current_users[j])
        {
    
            console.log("a person "+new_users[i]+"  needs a new user name")
                break;
        }
       else 
        {


        }


    }
       // console.log("name is available");

}

       // if(arr1[i] === arr2[j]) {
         //   arr1[i].isPresentInArr2 = true;
           // break;
        //}
//    }
    //}



