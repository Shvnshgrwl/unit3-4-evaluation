/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
document.querySelector("form").addEventListener("submit",signUpFun)

var userData = JSON.parse(localStorage.getItem("user"))||[]
function signUpFun(){
    event.preventDefault()

    var userObj = {
        image:document.querySelector("#user_pic").value,
        name:document.querySelector("#user_name").value,
        email:document.querySelector("#user_email").value,
        country:document.querySelector("#user_country").value,
        
    }
    // console.log(userObj)
    userData.push(userObj)
    localStorage.setItem("user",JSON.stringify(userData))
    window.location.reload()
}