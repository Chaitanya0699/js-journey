alert( null || 2 || undefined ); // 2 while using || (or) operator the first truthy value becomes the result
alert( alert(1) || 2 || alert(3) ); // 2 alert(1) becomes undefined so that 2 becomes truthy so it shows the output as 2
alert( 1 && null && 2 ); // null while using && Operator the first falsy one value is returend 
alert( alert(1) && alert(2) ); // alert(1) returnes undefined and becomes falsy so while using and operator first falsy is the value return
alert( null || 2 && 3 || 4 ); // 3 as per the precidense 2 && 3 both are truthy so it returns last value 3 and then while || operator is running the first truthy value was 3 