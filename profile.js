 
 

 let x = localStorage.getItem("name")
 console.log(x);
 
document.getElementById("nameprofile").innerHTML= x




function logout() {

    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href = "login.html"

    
}