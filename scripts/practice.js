//js function from first pizza application mammiam on git hub//

var orderSummary = "";



var grandOrder = document.getElementById('preview').value;
var runningTotal = 0;
var sizeTotal = 0;
var crustTotal = 0;
var sauceTotal = 0;
var cheeseTotal = 0;
var proteinTotal = 0;
var vegTotal = 0;


var previewSize = document.querySelectorAll('input[name="size"]');

for (x=0; x<previewSize.length; x++){
    previewSize[x].addEventListener('click', sumSize);
};
function sumSize(e){
    console.log(e.target.value);
    document.getElementById('previewSize').innerHTML = e.target.value;
    var selectedSize = e.target.value;

if (selectedSize === "Personal"){
    sizeTotal = 6;
}
else if (selectedSize === "Medium"){
    sizeTotal = 10;
}
else if (selectedSize === "Large"){
    sizeTotal = 14;
}
else if (selectedSize === "Extra Large"){
    sizeTotal=16;
};

runningTotal = sizeTotal;
console.log('$'+sizeTotal +
'.00')
};



var previewCrust = document.querySelectorAll('input[name="crust"]');
for (y=0; y<previewCrust.length; y++){
    previewCrust[y].addEventListener('click', sumCrust);
};

function sumCrust(e,runningTotal, grandOrder){
    console.log(e.target.value);
    document.getElementById('previewCrust').innerHTML=e.target.value + " Crust";
    var selectedCrust = e.target.value;

    if (selectedCrust === "Cheese Stuffed"){
        crustTotal = 3;
    }
    else crustTotal = 0;

    runningTotal=sizeTotal + crustTotal;
    console.log('$'+runningTotal+'.00');
};


var previewSauce = document.querySelectorAll('input[name="sauce"]');

for (z=0; z<previewSauce.length; z++){
    previewSauce[z].addEventListener('click', sumSauce);
};
function sumSauce(e, runningTotal, grandOrder){
    console.log(e.target.value);
    document.getElementById('previewSauce').innerHTML=e.target.value;
    var selectedSauce = e.target.value;
    selectedSauce = 0;
    
    runningTotal = sizeTotal+ crustTotal + sauceTotal;
    console.log('$'+runningTotal+'.00');
};


var previewCheese = document.querySelectorAll('input[name="cheese"]');

for (a=0; a<previewCheese.length; a++){
    previewCheese[a].addEventListener('click', sumCheese);
};
function sumCheese(e, runningTotal, grandOrder){
    console.log(e.target.value);
    document.getElementById('previewCheese').innerHTML=e.target.value;
    var selectedCheese = e.target.value;

    if (selectedCheese === "Extra Cheese"){
        cheeseTotal = 3;
    }
    else crustTotal = 0;

    runningTotal = sizeTotal + crustTotal + cheeseTotal;
    console.log('$' + runningTotal + '.00');
};




var previewProtein = document.querySelectorAll('input[name="protein"]');

for (b=0; b<previewProtein.length; b++){
    previewProtein[b].addEventListener('click', sumProtein);
 };
function sumProtein(e,runningTotal, grandOrder){

    var selectedProtein = []

    for (var b=0; b<previewProtein.length; b++){
        if (previewProtein[b].checked){
        selectedProtein.push(previewProtein[b].value);

        console.log("seletedProtein:"+previewProtein[b].value);
        grandOrder = grandOrder+previewProtein[b].value+"<br>";

        document.getElementsById('previewProtein').innerHTML=grandOrder+previewProtein[b].value+"<br>";
        }
    }
    var proteinCount = selectedProtein.length;
    if (proteinCount>1){
        proteinTotal=(proteinCount -1);
    } 
    else {
        proteinTotal = 0;
    }
    runningTotal = (runningTotal+proteinTotal);
    
    console.log("totalProteinselect" + proteinCount);

    console.log(proteinCount+ " meat1 free meat = "+"$"+proteinTotal+".00{)");

    console.log('purchase total:'+"$"+runningTotal+".00");

    document.getElementById('grandOrder').innerHTML=grandOrder;
    document.getElementById('grandTotal').innerHTML="<h3>TOTAL: <strong>$"+runningTotal+".00"+"</strong></h3>";
};



var previewVeg = document.querySelectorAll('input[name="veg"]');

 for (c=0; c<previewVeg.length; c++){
    previewVeg[c].addEventListener('click', sumVeg);
};
function sumVeg(e,runningTotal,grandOrder) {

    var selectedVeg = [];

    for (c=0; c<previewVeg.length; c++){
        if(previewVeg[c].checked){
            selectedVeg.push(previewVeg[c].value);

            console.log("selected veg: ("+previewVeg[c].value+")");
            grandOrder = grandOrder+previewVeg[c].value+"<br>";
    }
        document.getElementById(
            'previewVeg').innerHTML=grandOrder+previewVeg[c].value+"<br>";
        
        }

    var vegCount = selectedVeg.length;

    if (vegCount >1) {
        vegTotal = (vegCount -1);
    }
    else {
        vegTotal = 0;
    }
    runningTotal = (runningTotal + vegTotal);

    console.log ("totalSelectedVeg: " +vegCount);

    console.log(vegCount+ " veg - 1 veg free = " + "$" + vegTotal +"0.0");

    console.log("Purchase Total: "+ runningTotal+".00");

   
};



 






//Get modal element
var modal = document.getElementById('receipt');

//Get open modal button
var modalBtn = document.getElementById('order');

//Get close button
var closeBtn = document.getElementById('closeBtn');

// Listen for open click
order.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);


// Function to open modal
function openModal() {
    modal.style.display = 'block';
};

// function to close modal
function closeModal() {
    modal.style.display = "none";
};


var cancelButton = document.getElementById ('cancel');

cancelButton.addEventListener('click',
    function reset() {
        $('input[type="radio"]').each(function(){
            this.checked = false;
        });
        $('input[type="checkbox"]').each(function(){
            this.checked = false;
        });
            document.getElementById('preview').innerHTML = "";
    });
