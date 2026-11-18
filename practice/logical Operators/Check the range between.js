// Write an if condition to check that a variable age is between 14 and 90 inclusively (can be 14, 90, or anything between).
if (age >= 14 && age <= 90) ;
if (age<14 || age>90) ;

if (-1 || 0) alert( 'first' ); // truthy -1 is truthy and 0 is falsy while using Truthy || Falsy its truthy 
if (-1 && 0) alert( 'second' ); // false here -1 is truthy and 0 is falsy so truthy && falsy is flase
if (null || -1 && 1) alert( 'third' ); // truthy first -1 && 1 excutes its truthy then Null || 1 truthy it excutes