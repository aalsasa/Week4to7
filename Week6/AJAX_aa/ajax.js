
fetch("http://ict.neit.edu/evanrense/salaries.php")
.then(function(res) {
    return res.json(); 
}).then(function(data){

    var databaseanalystareafirst= document.querySelector("#database-analyst-area .first"); 
    var databaseanalystarealast= document.querySelector("#database-analyst-area .last"); 
    var databaseanalystareahighest= document.querySelector("#database-analyst-area .analysthighest"); 
    var databaseanalystareaaverage= document.querySelector("#database-analyst-area .averageanalyst"); 
    var webdeveloperareafirst = document.querySelector("#web-developer-area .first"); 
    var webdeveloperarealast = document.querySelector("#web-developer-area .last");
    var webdeveloperareahigh = document.querySelector("#web-developer-area .highest");
    var webdeveloperareaaverage = document.querySelector("#web-developer-area .average");   
    var softwareengineerareafirst= document.querySelector("#software-engineer-area .first"); 
    var softwareengineerarealast= document.querySelector("#software-engineer-area .last"); 
    var softwareengineerareahighest= document.querySelector("#software-engineer-area .highest");
    var softwareengineerareaaverage= document.querySelector("#software-engineer-area .average"); 
    var listoutput = document.querySelector("#list-output");  
    var searchoutput = document.querySelector("#search-output");  
        
    var dba = [];
    var wda = [];
    var sfa = []; 

   




    for(var i = 0;i<data.length; i++)
    {
        if(data[i].jobTitle === "Database Analyst" )
        {
        dba.push(data[i]);

        }
        if(data[i].jobTitle === "Web Developer")
        {
        wda.push(data[i]); 
        }
        if(data[i].jobTitle === "Software Developer")
        {
        sfa.push(data[i]); 
        }

    
        
    } 
    
    var highestdba = dba[0];
    var highestwda = wda[0];
    var highestsfa = sfa[0];  

    var averagedba = 0; 
    var averagewda = 0; 
    var averagesfa = 0; 
  
    

    for(var i = 0; i<dba.length; i++)
    {

        if(Number(dba[i].salary) > Number(highestdba.salary))
        {
          highestdba = dba[i]; 


        }

        averagedba+=Number(dba[i].salary)

    }
    for(var i = 0; i<wda.length; i++)
    {
        if(Number(wda[i].salary) > Number(highestwda.salary))
        {
          highestwda = wda[i]; 


        }

        averagewda+=Number(wda[i].salary)
    }
    for(var i = 0; i<sfa.length; i++)
    {
        if(Number(sfa[i].salary) > Number(highestsfa.salary))
        {
          highestsfa = sfa[i]; 


        }
        averagesfa+=Number(sfa[i].salary); 
    }   

    
    averagedba=averagedba/dba.length; 
    averagewda=averagewda/wda.length; 
    averagesfa=averagesfa/sfa.length; 

    databaseanalystareafirst.innerHTML = highestdba.name.first;
    databaseanalystarealast.innerHTML = highestdba.name.last; 
    databaseanalystareahighest.innerHTML = highestdba.salary; 
    databaseanalystareaaverage.innerHTML = averagedba; 
    webdeveloperareafirst.innerHTML = highestwda.name.first; 
    webdeveloperarealast.innerHTML = highestwda.name.last; 
    webdeveloperareahigh.innerHTML = highestwda.salary; 
    webdeveloperareaaverage.innerHTML = averagewda; 
    softwareengineerareafirst.innerHTML = highestsfa.name.first; 
    softwareengineerarealast.innerHTML = highestsfa.name.last; 
    softwareengineerareahighest.innerHTML = highestsfa.salary; 
    softwareengineerareaaverage.innerHTML = averagesfa; 


    //searchareafirst.addEventListener("click", searchFunction )
    document.getElementById("search-submit").addEventListener("click", searchFunction);
    function searchFunction()
{
    var searchf = document.querySelector("#first-name").value; 
    var searchl = document.querySelector("#last-name").value; 
    for(var i =0; i<data.length; i++)
    {        
        if(data[i].name.first === searchf)
        {
            console.log(data[i].salary); 
            if(data[i].name.last === searchl)
            {

                searchoutput.innerHTML = data[i].name.first + " " + data[i].name.last + " "+data[i].salary;
                
            }
             
        }
        






    }
}
    document.getElementById("list-database-analyst").addEventListener("click", listdatabases); 
    function listdatabases()
    {
        listoutput.innerHTML= ""; 
    for(var i = 0; i<dba.length; i++ )
    {

        listoutput.innerHTML+= i + dba[i].name.first + " " +dba[i].name.last + " "+ dba[i].salary + "</br>"; 

    }






    }
    document.getElementById("list-web-developer").addEventListener("click", listwebdeveloper); 
    function listwebdeveloper()
    {
        listoutput.innerHTML= ""; 
    for(var i = 0; i<wda.length; i++ )
    {
        
        listoutput.innerHTML+= i + wda[i].name.first + " " +wda[i].name.last + " "+ wda[i].salary + "</br>"; 
        

    }





    }

    document.getElementById("list-software-engineer").addEventListener("click", listsoftwareengineer); 
    function listsoftwareengineer()
    {
     listoutput.innerHTML= ""; 
    for(var i = 0; i<sfa.length; i++ )
    {

        listoutput.innerHTML+= i + sfa[i].name.first + " " +sfa[i].name.last + " "+ sfa[i].salary + "</br>"; 

    }






    }


    




    

     



    


  




    


    


     
    

}); 


