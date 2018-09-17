
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});



function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr, targetDiv) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();



   

   //all of these variables that were made above are console logged

    console.log(firstDayOfMonth); 
    console.log(d); 
    console.log(numberOfDaysInMonth); 
    console.log(firstDayOfWeek); 

    var str = "<ul>";

    str += "</ul>";

    //the statements below create the HTML tags
    for(i = 0; i<numberOfDaysInMonth+ firstDayOfWeek; i++)
    {

    
    
    if(i>=firstDayOfWeek)
    {
        var targetDiv = document.getElementsByClassName("day"+(i - firstDayOfWeek+ 1)+"'");
        
        str+= "<div class='day'>"; 
        str+= +(i - firstDayOfWeek+ 1); 
        str+= "</div>";     

       
        


    }
    else
    {
        str+= "<div class='day'>"; 
        str+= "</div>";  
    }
    
    } 
    document.querySelector("#results").innerHTML= str;


    var days = document.getElementsByClassName("day"); 

    console.log(days); 


    //for loops on the bottom are for the individual days

    for(i = 0; i<days.length; i++)
    {

        days[i].addEventListener("click", function(e)
        {
            if(this.style.background ==="")
            {
             this.style.background= 'green';    
            
            }
            else if(this.style.background === 'green')
            {
                this.style.background= 'red'; 
            }
            else 
            {
                this.style.background = ""; 
            }


            console.log(e.currentTarget.style.backgroundColor); 
        }); 


       
   
        


    }

var y = document.querySelector("#yes"); 
var n = document.querySelector("#no");
 

i = 0; 


//the eventlisternes here listed with the for loops are for all the days

y.addEventListener("click", function()
{
    for(let i= 0; i<days.length; i++)
    {
    days[i].style.backgroundColor ="green"; 
    console.log(i); 
    }
n.addEventListener("click", function()
{
    for(let i = 0; i<days.length; i++)
    {
        days[i].style.backgroundColor = "red"; 
        console.log(i); 
    }
});

    
    console.log(y);
    console.log(n); 
   
}); 
    
  
    
}




    















