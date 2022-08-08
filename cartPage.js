const getData= async(url)=>{
    try {
        let res=await fetch(url)
        let data=await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

document.getElementById("btn2").addEventListener("click", function(){
    window.location.href = "../checkoutPage.html"
})

//get the id from local Storage
let checkedProductID = localStorage.getItem("checked_products") ? JSON.parse(localStorage.getItem("checked_products")) : "";

let tbody = document.getElementById("table_body");



let quant = document.getElementById("quantityNumber");

var grandPrice=0;

const displayData = (checkedData,parentNode) =>{
        let productDiv = document.createElement("tr");

        let productElement= document.createElement("td");
        productElement.textContent = checkedData.productDetail;
        let priceElement= document.createElement("td");
        priceElement.setAttribute("id","price");
        priceElement.textContent = checkedData.price;

        let quantityElemnt = document.createElement("td");

        let quantity = document.createElement("input");
        quantity.setAttribute("id", "quantityNumber");
        quantity.type = Number;
        quantity.style.width = "15px";
        quantity.value = 0;


        quantity.onchange = function (){
            totalPriceElement.innerText = priceElement.innerText*quantity.value;
            grandPrice+=Number(totalPriceElement.innerText);


                 
            document.getElementById("subtotalprice").textContent = grandPrice;
            document.getElementById("grandTotalprice").textContent = grandPrice;
            
            

            localStorage.setItem("totalPrice", JSON.stringify(grandPrice));
        }
        
        quantityElemnt.append(quantity);

        let totalPriceElement = document.createElement("td");
            totalPriceElement.setAttribute("id","totalPrice")
    
        totalPriceElement.innerText = priceElement.innerText*quantity.value;

    
        productDiv.append(productElement,priceElement,quantityElemnt,totalPriceElement);
        parentNode.append(productDiv); 

        totalPriceElement.innerText = priceElement.innerText*quantity.value;
        grandPrice+=Number(totalPriceElement.innerText);

        document.getElementById("subtotalprice").textContent = grandPrice;
        document.getElementById("grandTotalprice").textContent = grandPrice;
}


const initFunc = async (id) =>{
    try {
        let data = await getData(` http://localhost:3000/data/${id}`)
        displayData(data,tbody);
    } catch (error) {
        console.log(error);
    }
}


checkedProductID.forEach(id => {
    initFunc(id);
});





