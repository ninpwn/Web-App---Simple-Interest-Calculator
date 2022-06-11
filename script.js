function compute()
{
    //principal's value validation 
    if((document.getElementById("principal").value <= 0) || document.getElementById("principal").value == '')
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    //retreival of the relevant result
    else { document.getElementById("result").innerHTML = 
    "If you deposit " + "<mark>" + parseFloat(document.getElementById("principal").value) + "</mark>" + ",\<br\>at an interest rate of" +"<mark>"+ parseFloat(document.getElementById("rate").value) 
    +"%</mark>\<br\>You will receive an amount of <mark>" + parseFloat(document.getElementById("principal").value) * parseFloat(document.getElementById("rate").value) / 100 *  parseInt(document.getElementById("years").value)
     + "</mark>,\<br\>in the year <mark>" + (parseInt(new Date().getFullYear())+parseInt(document.getElementById("years").value)) + "</mark>\<br\>";
    }
}

function visSliderValue()
{
    //visualizing the relevant range value
    document.getElementById("span").innerHTML = document.getElementById("rate").value +'%';
}