//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var a="Rashid saleem";
var uc= a.toUpperCase();
var lc=a.toLowerCase();
//var tc=a.capitalize();
console.log(uc);
console.log(lc);
console.log(titleCase(a))


function titleCase(a) {
    str = a.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase()+ str[i].slice(1);
    }
    return str.join(' ');
  }
  


