/*1.*/const textAreaE1 = document.getElementById("text-area");
/*6.*/
const Total = document.getElementById("Total-Characters");
/*7*/const RemainingE1 = document.getElementById("Remaining-container")

/*2.*/
textAreaE1.addEventListener("keyup",()=>{
  //console.log("Key is pressed");
  /*3.*/
  updateCounter()
});
/*4.*/
function updateCounter(){
          /*7 total.inner*/
    /*5.*/ Total.innerText = textAreaE1.value.length
   /*8*/ RemainingE1.innerText =textAreaE1.getAttribute("maxlength") -textAreaE1.value.length;

}