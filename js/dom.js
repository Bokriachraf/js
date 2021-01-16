let favs = Array.from(document.querySelectorAll(".fa-heart"))
let cards = Array.from(document.querySelectorAll(".card"))
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
let addBtns = Array.from(document.querySelectorAll(".fa-plus-circle"))
let minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"))
let qutes = Array.from(document.querySelectorAll(".qute"))
let unitPrice = Array.from(document.querySelectorAll(".unit-price"))
let totalPrice = document.querySelector(".total-price")



for (let fav of favs) {
    fav.addEventListener("click",function(){
    // if   (fav.style.color==="red"){
      //   fav.style.color="black"
     //}
     //else{
       //  fav.style.color="red"
     //}
    //
   fav.style.color==="red" ? fav.style.color="black" : fav.style.color="red" 
})
}
//delete
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function(){
    cards[i].remove()    
})
}
//Add 
for (let i in addBtns) {
    addBtns[i].addEventListener("click",function(){
      addBtns[i].nextElementSibling.innerHTML++;
    })
}
//Minus
for (let i in minusBtns) {
    minusBtns[i].addEventListener("click",function(){
        if(minusBtns[i].previousElementSibling.innerHTML > 0)
      minusBtns[i].previousElementSibling.innerHTML--;
    })
}

//sum
function total (qutes,unitPrice,totalPrice){
    let s = 0;
    for (let i in qutes){
        s = s + Number(qutes[i].innerHTML) * Number(unitPrice[i].innerHTML)
    }
    totalPrice.innerHTML=s 
            return (totalPrice.innerHTML)

}
