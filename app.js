//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
var conf= confirm("Either OK or Cancel.");


if(conf==true) {  
  var name= prompt("enter yoer name");
  var gender= prompt("enter yoer gender");
  var age= prompt("enter yoer age");
if(age<=0){alert ("the age not true");}

  }
  if(gender=="male")
  alert (`Hi MR  ${name} `);
  else if(gender=="female")
  alert ("Hi MS "+name );
  else {
  alert ("Hi ");}
  