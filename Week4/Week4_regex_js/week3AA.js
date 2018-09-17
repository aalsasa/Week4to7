// JavaScript Document

//Ahmed Alsasa
//August 7th 2018 
//Javascript 


  window.addEventListener("load",main);

  function main(e)
  {
    var firstname= document.querySelector("#first-name"); //variable that declares the first name 
    var ffname= document.querySelector('#ffname'); //tag for the first name
    var lastname= document.querySelector('#last-name'); //variable that declares the last name 
    var email= document.querySelector('#email');//variable that declares the email
    var fnameerror = document.querySelector('#fn-error'); //variable that declares the first error 
    var lnameerror= document.querySelector('#ln-error'); //variable that declares the last name error
    var emailerror= document.querySelector('#email-error');  //variable that declares the email error
    var phonenumbererror=document.querySelector('#phone-error');//variable that declares the phone error
    var phone= document.querySelector('#phone'); //variable that declares the phone
    var confirmation = document.querySelector('#confirmation'); //variable that declares the confirmation
    var button= document.querySelector('#button'); //variable that declares the button
    var info=document.querySelector('#info'); //variable that declares the info
    var confirmemail= document.querySelector('#confirmemail'); //variable that declares the confirm email
    var confirmemailerror= document.querySelector('#confirmemailerror');//variable that declares the confirm email error
    var form= document.querySelector("#form"); //variable that declares the form
   
    


    button.onclick=  function(e)//button clicker that clicks if there is any value put into the named fileds
    {
        var fnameregexp= /^[a-z0-9\-]{1,}$/i;//if it includes special characters
        var lnameregexp= /^[a-z0-9\-]{1,}$/i;//same as above
        var emailregexp= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,}$/i;//valid email 
        var phoneregexp= /^[0-9]\$/;//numbers from 0 to 9 
        
        



        e.preventDefault(); //prevents it from any elements happening
        if(!fnameregexp.test(firstname.value))//if there is no value for the firstname, everything in these if and elses statements are the same
        {
            ffname.style.color="red"; //it will be written in red
            fnameerror.innerHTML= "*"; //it will also be written with an asteriks 
            fnameerror.innerHTML= "You either have no name or you have included special characters in your name, please do not put any special characters."; 

            
        }
        else//else it is written
        {
            ffname.style.color="black";//it will be black 
            fnameerror.innerHTML= "";//the user value will be put in
        }
        if(!lnameregexp.test(lastname.value))
        {
            
            llname.style.color="red"; 
            lnameerror.innerHTML= "*"; 
            lnameerror.innerHTML = "You either have no name or you have included special chartacters in  your name, please do not put any special characters. "; 

            
        }
        else
        {
            changeColor(llname, lnameerror, "black", "")
           // llname.style.color="black"; 
           // lnameerror.innerHTML= "";
        }
        if(!emailregexp.test(email.value))
        {
            emailname.style.color="red";
            emailerror.innerHTML="*"; 
            emailerror.innerHTML= "Please put a valid email"; 
        }
        else
        {
            emailname.style.color="black";
            emailerror.innerHTML="";    
        }
        if(confirmemail.value== "")
        {
            confirmemailname.style.color="red";
            confirmemailerror.innerHTML="*"; 
        }
        else
        {
            confirmemailname.style.color="black";
            confirmemailerror.innerHTML= "";
        }
        if(!phoneregexp.test(phone.value))
        {
            phonenumber.style.color="red"; 
            phonenumbererror.innerHTML="*"; 
            phonenumbererror.innerHTML= "Phone number is required";
        }
        else
        {
            phonenumber.style.color="black"; 
            phonenumbererror.innerHTML= ""; 
        }
        if(email.value==confirmemail.value && email.value!=="")
        {
            emailname.style.color="black";
            emailerror.innerHTML="";  
            confirmemailname.style.color="black";
            confirmemailerror.innerHTML= "";

        }
        else
        {
            emailname.style.color="red";
            emailerror.innerHTML="*"; 
            emailerror.innerHTML= "Please put a valid email address"; 
            confirmemailname.style.color="red";
            confirmemailerror.innerHTML="*"; 
            confirmemailerror.innerHTML= "Please confirm the email address"; 

        }

        if(firstname.value!== "" && lastname.value!=="" && email.value!==""&& confirmemail.value!="" && phone.value!=="" && confirmemail.value==email.value  )//if all of the values are not equal to non written values
        {
            var person = 
            {
                firstname: firstname.value, 
                lastname: lastname.value, 
                email: email.value, 
                phone: phone.value//all of these will call back to the displayed information above, but references back the variable 
            }
            confirmation.style.display="block";//confirmation block will be displayed
            info.innerHTML+=person.firstname; //first name value is taken, everything else is taken as well the same as the first name
            info.innerHTML+=" ";//a space so that the first and last name won't be together stuck like glue
            info.innerHTML+=person.lastname; 
            info.innerHTML+="<br>"; //break tag is made to the HTML
            info.innerHTML+=person.email; 
            info.innerHTML+="<br>"; 
            info.innerHTML+=person.phone;
            form.style.display="none";//this will load the page up and sign in information will be lost
            
         
            

        }
        

    }

    function changeColor(p,span, color, string)
    {
        p.style.color=color; 
        span.innerHTML= string;
    }
    

   


   
}












