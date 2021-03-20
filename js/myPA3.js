let i = 0;

let sub = document.getElementById("sub");
let tax = document.getElementById("tax");
let total = document.getElementById("total");
let amount = document.getElementById("amount");
let change = document.getElementById("change");
let btn = document.getElementById("btn");

function subtotal()
{    
    
    if(sub.value >= 100)
    {
        amount.disabled = false;
        var subVal = parseFloat(sub.value);
        var taxVal = subVal *.12;
        var totalVal = subVal + taxVal;
        
        tax.value = taxVal.toFixed(2);
        total.value = totalVal.toFixed(2);
        amount.value = totalVal.toFixed(2);
        change.value = "0.00";        

        btn.classList.remove('btn-danger');
        btn.classList.add('btn-success');
        btn.disabled = false;

    }
    else
    {
        amount.disabled = true;

        tax.value = "Tax";
        total.value = "Total";
        amount.value = "Amount Paid";

        btn.classList.remove('btn-success');
        btn.classList.add('btn-danger');
        btn.disabled = true;
    }

}

function amountPaid()
{
    var amountVal = parseFloat(amount.value);
    var totalVal = parseFloat(total.value);
    var changeVal = amountVal - totalVal;   

    change.value = changeVal.toFixed(2);
}