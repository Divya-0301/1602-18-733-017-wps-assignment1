function validate()
{ 
   if( document.studentBuspass .textnames.value == "" )
   {
     document.studentBuspass.textnames.focus() ;
     return false;
   }
   var email = document.studentBuspass.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.studentBuspass.emailid.focus() ;
     return false;
 }
 if( document.studentBuspass.dob.value == "" )
 {
   alert( "Please provide your DOB!" );
   document.studentBuspass.dob.focus() ;
   return false;
 }
 if( document.studentBuspass.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.studentBuspass.personaladdress.focus() ;
     return false;
   }
   if( document.studentBuspass.State.value == "-1" )
   {
     alert( "Please provide your Select State!" );
     
     return false;
   }
   if( document.studentBuspass.pincode.value == "" ||
   isNaN( document.studentBuspass.pincode.value) ||
   document.studentBuspass.pincode.value.length != 6 )
{
alert( "Please provide a pincode in the format ######." );
document.studentBuspass.pincode.focus() ;
return false;
}
if ( ( studentBuspass.Gender[0].checked == false ) && ( studentBuspass.Gender[1].checked == false ) )
{
alert ( "Please choose your Gender: Male or Female" );
return false;
}  
if( document.studentBuspass.Type.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.studentBuspass.Type.focus() ;
     return false;
   }  

if( document.studentBuspass.mobileno.value == "" ||
isNaN( document.studentBuspass.mobileno.value) ||
document.studentBuspass.mobileno.value.length != 10 )
{
alert( "Please provide a Mobile No in the format 123." );
document.studentBuspass.mobileno.focus() ;
return false;
}
return( true );
}
