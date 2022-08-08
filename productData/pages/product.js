// import {navbar} from "../components/navbar.js"
// import{footer} from "../../components/footer.js";

// let footerDiv=document.getElementById("foooter")
//     footerDiv.innerHTML=footer();

// let nav = document.getElementById("navDiv");
//     nav.innerHTML = navbar();


// let tbody=document.getElementById("tbody");

// document.getElementById("cart").addEventListener("click", function(){
//     window.location.href = "../../cartPage.html";
// })




// const getdata=async(url)=>{
//     try {
//         let res=await fetch(url)
//         let data=await res.json();
//         return data;
//     } catch (error) {
//         console.log(error)
//     }
// }
// let checked=[];
// const displayData=(data,tbody)=>{
    
//     data.forEach((ele)=>{
//         let tr=document.createElement("tr");

//         let td1=document.createElement("td");
//         td1.textContent=ele.productDetail;
//         td1.style.color="#444444"
//         let td2=document.createElement("td")
//         td2.textContent=`US$${ele.price}`
//         td2.style.color="#A52A2A"
//         let td3=document.createElement("td")
//         td3.textContent="included"
//         td3.style.color="#A52A2A"
//         let td4=document.createElement("input");
//         td4.type="checkbox"
//         td4.setAttribute("id",`${ele.id}`);
//         checked.push(`${ele.id}`);
//         tr.append(td4,td1,td2,td3)
//         tbody.append(tr);
//     })
//     // console.log(checked)
   
// }
// document.getElementById("cart").addEventListener("click",displaycheck)
// function displaycheck(){
//     let filterarr=checked.filter(function(elem){
//         return document.getElementById(elem).checked==true;
//     })
//     console.log(filterarr)
//     localStorage.setItem("checked_products",JSON.stringify(filterarr))
// }


// const initFunc= async()=>{
//     try {
//         let data=await getdata("http://localhost:3000/data")
//         displayData(data,tbody)
//     } catch (error) {
//         console.log(error)
//     }
// }
// initFunc();  
import { navbar } from "../../components/navbar.js";

import { footer } from "../../components/footer.js";
// import { identityDropDown } from "../scripts/identityDropDown.js";
let footerDiv = document.getElementById("footer");
footerDiv.innerHTML = footer();
let navDiv = document.getElementById("navDiv");
navDiv.innerHTML = navbar();

let tbody = document.getElementById("tbody");

const getdata = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
let checked = [];
const displayData = (data, tbody) => {
  data.forEach((ele) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = ele.productDetail;
    td1.style.color = "#444444";
    let td2 = document.createElement("td");
    td2.textContent = `US$${ele.price}`;
    td2.style.color = "#A52A2A";
    let td3 = document.createElement("td");
    td3.textContent = "included";
    td3.style.color = "#A52A2A";
    let td4 = document.createElement("input");
    td4.type = "checkbox";
    td4.setAttribute("id", `${ele.id}`);
    checked.push(`${ele.id}`);
    tr.append(td4, td1, td2, td3);
    tbody.append(tr);
  });
  // console.log(checked)
};
document.getElementById("cart").addEventListener("click", displaycheck);
function displaycheck() {
  let filterarr = checked.filter(function (elem) {
    return document.getElementById(elem).checked == true;
  });
  console.log(filterarr);
  localStorage.setItem("checked_products", JSON.stringify(filterarr));

  let checkBox = document.getElementById("checkBox");
  if (checkBox.checked == false) {
    alert("Please read the Wrap License Agreement");
  }
}

const initFunc = async () => {
  try {
    let data = await getdata("http://localhost:3000/data");
    displayData(data, tbody);
  } catch (error) {
    console.log(error);
  }
};
initFunc();
document.getElementById("cart").addEventListener("click",function(){
  window.location.href="../../cartPage.html"
})