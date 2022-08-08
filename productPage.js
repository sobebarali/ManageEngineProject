import {navbar} from "./components/navbar.js"
import {footer} from "./components/footer.js"

let navbarDIV= document.getElementById("navdiv");
    navbarDIV.innerHTML = navbar();

   


let footerDI= document.getElementById("footer");
footerDI.innerHTML = footer();
    