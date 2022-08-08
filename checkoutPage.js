let totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || []; 

function validateData(){
    let name = document.getElementById("name");

    if(name.value===""){
        alert("Please Enter Your Name");
    }

    let email = document.getElementById("email");
    
    if(email.value ===""){
        alert("Please Enter Your Email");
    }

    let companyName = document.getElementById("cname");

    if(companyName.value ===""){
        alert("Please Enter Your Comapny Name");
    }
    
    let address = document.getElementById("addr");
    if(address.value ===""){
        alert("Please Enter Your Address");
    }
    
    let city = document.getElementById("city");
    if(city.value ===""){
        alert("Please Enter Your City");
    }
    
    let country = document.getElementById("country");
    if(country.value ===""){
        alert("Please Enter Your Country");
    }
    
    let state = document.getElementById("state");
    if(state.value ===""){
        alert("Please Enter Your State");
    }
    

    let pin =document.getElementById("pin");
    if(pin.value ===""){
        alert("Please Enter Your Zip Code");
    }
    
    let number = document.getElementById("number");
    if(number.value ===""){
        alert("Please Enter Your Phone Number");
    }
    
    let fax = document.getElementById("fax");
    if(fax.value ===""){
        alert("Please Enter Your FAX");
    }
    
    let cnumber = document.getElementById("cnumber");
    if(cnumber.value ===""){
        alert("Please Enter Your Credit Number");
    }
    
    let cvv = document.getElementById("cvv");
    if(cvv.value ===""){
        alert("Please Enter Your CVV");
    }
    
    let date = document.getElementById("date");
    if(date.value ===""){
        alert("Please Enter Your Date");
    }
    
}

async function postdata(user){
    try {
        let res=await   fetch(`http://localhost:3000/users`,{
            method:"POST",
            body: JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        })
    } catch (error) {
        console.log(error)
    }
 }


document.getElementById("total").innerHTML=`USD ${totalPrice}$`;