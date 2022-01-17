"use strict";



function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}




//const resultArray = range(3, 100);

const resultArray = range(1, 100);
const resultOnly3 = [];
const resultOnly4 = [];
const checkedArray = [];

let ListEl = document.getElementById("numbers");
let textAreaEl = document.getElementById("all");
let buttEl = document.getElementById("myBtn");
buttEl.addEventListener('click', ListAllNumber);

let resultDis = "";

function DivsibleBy3(obj) {

    let ok = false;

    if (obj % 3 === 0) {
       
        resultOnly3.push(obj);
       
        if (resultOnly3.includes(obj)) {
            ok = true;
           
        }
        
    } 

    return ok; 
}
    

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



function DivsibleBy4(obj) {

    let ok = false;

    if (obj % 4 === 0) {
       
        resultOnly4.push(obj);
       
        if (resultOnly4.includes(obj)) {
            ok = true;
           
        }
        
    } 

    return ok; 
    
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function validateForm() {

   //let x = document.forms["myForm"]["fname"].value;
    let x = document.getElementById("input4"); 
    console.log(x);
   
  if((x.value > 1) || (x.value <= 100)) {
      
      return x.value;
    
    }
  else {

      
      
    }

    

}






function ListAllNumber() {

    for (let i = 0; i < resultArray.length; i++) {

        CheckNum(resultArray[i]);

    }
    
}

function createPElement(obj) {
    let pEle = document.createElement("p");
    pEle.innerHTML = obj;
    pEle.className = "bisbos";
    
    resultDis += obj + ", ";
    textAreaEl.innerHTML = resultDis;
     

}







function CheckNum(obj) {

    if (obj === 1) {
        console.log(obj);
        
        createPElement(obj);
        checkedArray.push(obj);
        
    }
    else if (obj === 2) {

        console.log(obj); 
       createPElement(obj);
        checkedArray.push(obj);
    }
    else {

         AnalyseNumber(obj);
        
    }

    
}


    
function AnalyseNumber(obj) {

    if (DivsibleBy3(obj)) {

        if (DivsibleBy4(obj)) {
            console.log("Bish-Bosh");
           createPElement("Bish-Bosh");
            checkedArray.push("Bish-Bosh");
        }

        else {
            console.log("Bish");
           createPElement("Bish");
            checkedArray.push("Bish");
        }

        
    }
    else {

        if (DivsibleBy4(obj)) {
            console.log("Bosh");
          createPElement("Bosh");
            checkedArray.push("Bosh");
        }
        else {
            console.log(obj);
           createPElement(obj);
            checkedArray.push(obj);
        }
    }
    

}



