//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
var conf= confirm("Either OK or Cancel.");


if(conf==true) {  
  var name= prompt("enter your  name");
  var gender= prompt("enter your  gender");
  var age= prompt("enter your  age ");
if(age<=0){alert ("the age is less than or equal to zero");}

  }
  if(gender=="male")
  alert (`Hi MR  ${name} `);
  else if(gender=="female")
  alert ("Hi MS "+name );
  else {
  alert ("Hi ");}
  
