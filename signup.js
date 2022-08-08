document.querySelector('form').addEventListener("submit",storeInfo)
function storeInfo(){
    event.preventDefault();
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let user={
        Name:name,
        Email:email,
        Password:password
    }
  postdata(user)
  document.getElementById("name").value=""
  document.getElementById("email").value=""
  document.getElementById("password").value=""
  alert("Sign up done")

  window.location.href = "./log.html"
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