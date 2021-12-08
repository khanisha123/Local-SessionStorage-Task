let allBtn= document.querySelectorAll(".btn")
SetBasket();

// let arr=[];
allBtn.forEach(btn => {
    
    btn.onclick=function(e) {
        e.preventDefault()
        let id=btn.parentElement.parentElement.getAttribute("data-id")
        SetBasket();
        let localStorageArr=JSON.parse(localStorage.getItem("basket"))
        let existProduct=localStorageArr.find(x=>x.id==id)
        if (existProduct===undefined) {
            
            localStorageArr.push({
                id:id,
                name:this.parentElement.firstElementChild.innerText,
                count:1,
                price:this.previousElementSibling.innerHTML,
                scr:this.parentElement.parentElement.firstElementChild.getAttribute("src")
            })
        }
        else{
            existProduct.count+=1
            existProduct.price*=existProduct.count
        }
        localStorage.setItem("basket",JSON.stringify(localStorageArr))
        GetBasketCount();

    }

});
 function GetBasketCount() {
    let localStorageArr=JSON.parse(localStorage.getItem("basket"))
    document.getElementById("basketCount").innerText=localStorageArr.lenght;
}
GetBasketCount();

function SetBasket() {
    if (!localStorage.getItem("basket")) {
        localStorage.setItem("basket",JSON.stringify([]))
    }
    
}
