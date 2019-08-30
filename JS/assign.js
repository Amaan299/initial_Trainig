var counter = 0;

function addLineBreak(target) {
    let lineBreak =document.createElement('br');
    target.appendChild(lineBreak);
}

 function addInput(target, attributes) {
        let element = document.createElement("INPUT");
        for(let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        target.appendChild(element);
    }
function addProduct(){
    counter++;
    var target = document.getElementById('container');
    addLineBreak(target);
    addInput(target, {'id': 'name' + counter, 'type': 'text', 'placeholder': 'Product_Name'});

    addLineBreak(target);
    addInput(target, {'id': 'cost' + counter, 'type': 'number', 'placeholder': 'Product_Cost', 'value':0, 'min':'10', 'max':'100'});

    addLineBreak(target);
    addInput(target, {'id': 'quantity' + counter, 'type': 'number', 'placeholder': 'Product_Quantity', 'value':0, 'min':'1', 'max':'100'});
    
    
    if (counter == 1) {
        var b = document.createElement("INPUT");
        b.setAttribute("id", "btn2");
        b.setAttribute("type", "submit");
        b.setAttribute("onclick", "Total()");
        b.setAttribute("value", "Calculate Total");
        document.body.appendChild(b);
        var newBreak2=document.createElement('br');
        document.body.appendChild(newBreak2);
    }

    
    
}

function Total(){
    var sum =0;
    for(var i = 1; i<=counter; i++){
    var field1=document.getElementById("cost" + i).value;
    var field2=document.getElementById("quantity" + i).value;
    var result = (parseFloat(field1) * parseFloat(field2));
    sum +=result;
    }
        document.getElementById("field").innerHTML="Total " + sum;
}

function newDoc(){
    window.location.reload(true);
}


