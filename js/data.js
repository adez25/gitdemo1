let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
let day = [32, 29, 32, 31, 32, 31, 31, 32, 31, 32, 31, 32];

let title = document.getElementById("ititle");

window.onload = function()
{    
    let months = prompt("Month [1-12]",);
    let week = prompt("Start Day [1-7]",);

    if(months >= 13 || week >= 8)
    {
        title.innerHTML = "Invalid Input!";
    }
    else
    {
        title.innerHTML = month[months-1];
        display(months, week);
    }
    
}

let table = document.getElementById("idays");


function display(months, week)
{
    var row; var col = 0;
    
    for(i = 1; i < day[months-1]; i++)
    {
        if(i == 1)
        {           
            

            if(week == 1)
            {
                row = table.insertRow(-1);
            }
            else if(week == 2)
            {
                row = table.insertRow(-1);
                row.insertCell(col++);                
            }
            else if(week == 3)
            {
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
            }
            else if(week == 4)
            {
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
                row.insertCell(col++);
            }
            else if(week == 5)
            {
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
            }
            else if(week == 6)
            {
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
            }
            else if(week == 7)
            {
                row = table.insertRow(-1);
                row.insertCell(col++); 
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
                row.insertCell(col++);
            }
            
        }
        if(col == 7)
        {
            row = table.insertRow(-1);
            col = 0;
        }    

        val = row.insertCell(col++);
        val.innerHTML = i;        
    }
}