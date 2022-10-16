/*38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.*/
var city;country="Pakistan";
console.log(describe_city("Islamabad",country));
console.log(describe_city("Peshawar",country));
console.log(describe_city("London",country));

function describe_city(city,country)
{

console.log(city,"  Is in  "+country);


}




