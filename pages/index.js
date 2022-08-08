
import{footer} from "../components/footer.js";
let footerDiv=document.getElementById("footer")
footerDiv.innerHTML=footer();



let counter=1;
setInterval(function(){
    document.getElementById("radio"+counter).checked=true;
    counter++;
    if(counter>3){
        counter=1;
    }
},4000)


let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

console.log(userInfo.Name);




if(userInfo.length==0){

}else{
    let loginSubMenu = document.getElementById("name");;
    loginSubMenu.innerText = userInfo.Name;

    document.getElementById("ull").style.display="none";
}

