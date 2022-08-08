import {navbar} from "../components/navbar.js"
import{footer} from "../../components/footer.js";

let footerDiv=document.getElementById("footer")
    footerDiv.innerHTML=footer();

let nav = document.getElementById("navbardiv");
    nav.innerHTML = navbar();
