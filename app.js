//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

var conf= confirm("To Display The Welcome Screen, Press OK");
let anser=[];

function YNQ(){
  anser.push( prompt(" are you happy"));
  anser.push(prompt("   are you hungry"));
  anser.push( prompt("  do you like coffee"));
}
function PARINF(){
  let name= prompt("Enter Your name");
  let gender= prompt("Enter Your gender");
  let age= prompt("Enter Your Age (Greater Than Zero Plz) ");
  if(age<=0){alert ("The Age Is Less Than Or Equal To Zero");}
  YNQ();
  gender=gender.toLowerCase();
  if(gender=="male" )
  alert (`Hi MR  ${name} `);
  else if(gender=="female")
  alert ("Hi MS "+name );
  else {
  alert ("Hi ");}
}
if(conf==true) {  
  PARINF();
  for (var i=0 ;i<anser.length;i++)
  {
    if(anser[i]=="") anser[i]="invalid";
  console.log(anser[i]+ " ") ;
    
  }
  
  //
 
  }
  