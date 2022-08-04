// import { navbar } from "../components/navbar.js";
// let navDiv=document.getElementById("navDiv")
// navDiv.innerHTML=navbar();
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