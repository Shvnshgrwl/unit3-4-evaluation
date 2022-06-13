import {navbar,sidebar} from "../components/navSidebar.js"
document.querySelector('header').innerHTML = navbar();
document.querySelector("#sidebar").innerHTML = sidebar()

let search = (e) =>{
    if(e.key == 'Enter'){
        let query = document.querySelector("#seach_input").value
        searchNews(query).then((data) =>{
            console.log(data)
        })
    }
}
