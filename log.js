let arr= document.querySelectorAll(".sideimg");
console.log(arr);
   
let i=1;
arr[0].style.display="flex";
setInterval(displaysideimage,3000)
 function displaysideimage(){
    for(let j=0;j<arr.length;j++){
        arr[j].style.display="none"
    }
    if(i==arr.length){
        i=0;
    }
  arr[i].style.display="flex";
  i++;
 }


 document.querySelector("form").addEventListener("submit",displayPasswordBox);
 function displayPasswordBox(){
    event.preventDefault();
   
    let passwordBox=document.getElementById("passwordBox")
       document.getElementById("submit").value="SIGN IN";

       document.getElementById("submit").style.marginBottom="70px"
       document.getElementById("email").style.marginBottom="20px";
       document.getElementById("email").style.borderRadius="10px";
       document.getElementById("email").style.width="75%";
       document.getElementById("email").style.backgroundColor="white";

       document.getElementById("hidePassword").style.display="none";
       document.getElementById("skipComment").style.display="none";
       document.getElementById("options").style.display="none";
       document.getElementById("br1").style.display="none";

       document.getElementById("passwordBox").style.display="block";
       document.getElementById("showPassword").style.display="block";
       document.getElementById("changes").style.display="block";
       document.getElementById("eye").style.display="block";
       
       document.querySelector("form").addEventListener("submit",login);
 }
    async function login(){
    event.preventDefault();
   let userpassword=document.getElementById("passwordBox").value
   let useremail=document.getElementById("email").value
  // console.log(useremail,userpassword);
  let data= await getuser(useremail,userpassword);
  console.log(data)
  let filterarray=data.filter(function(user){
    return(user.Email==useremail)&&(user.Password==userpassword);
  })
  console.log(filterarray)
if(filterarray.length==0){
    document.getElementById("alertmess").style.display="block";
    document.getElementById("passwordBox").style.border="2px solid #ff8484"
    document.getElementById("submit").style.marginBottom="30px"
}else{
    localStorage.setItem("userInfo",JSON.stringify(filterarray[0]));
    window.location.href="";

}




 }
 document.getElementById("eye").addEventListener("click",displayPassword);
 document.getElementById("eyeopen").addEventListener("click",displayPassword);
 let eyecheck=0;
 function displayPassword(){
    if(eyecheck==0){
        document.getElementById("passwordBox").setAttribute("type","text")
        document.getElementById("eyeopen").style.display="block"; 
        document.getElementById("eye").style.display="none";
        eyecheck=1;
    }else{
        document.getElementById("passwordBox").setAttribute("type","password")
        document.getElementById("eye").style.display="block"; 
        document.getElementById("eyeopen").style.display="none";
        eyecheck= 0;
    }
    
 }
  async function getuser(e,p){
    try {
        let res=await fetch(` http://localhost:3000/users`);
        let data=await res.json();
       
        return data;

    } catch (error) {
        console.log(error)
    }
  }