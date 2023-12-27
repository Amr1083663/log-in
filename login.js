
function saveData() {
    // let name = document.getElementById("name").value 
    let email = document.getElementById("email").value 
    let password = document.getElementById("password").value 
    let submit = document.getElementById("submit")

      


    let user_records = []

    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    if(user_records.some((v)=>{
        return v.email == email && v.password ==password
    }))
    {
        //  alert("succefully")

         let current_user = user_records.filter((v)=>{
            return v.email == email && v.password ==password
        })[0]


         localStorage.setItem("name",current_user.name)
         localStorage.setItem("email",current_user.email)


         window.location.href = "profile.html"
    }else{


    }




}



function validationname() {
    let validname = document.getElementById("validname")
    var pnamregex =/^[0-9A-Za-z ]{3,12}$/;
    let name = document.getElementById("name").value 

    if(pnamregex.test(name)==true){
        validname.innerHTML=`<p class="text-success d-flex "><i class="fa-solid fa-check"></i> valid value</p>`
    return true

    }else{
        validname.innerHTML=`<p class="text"><i class="fa-solid fa-xmark"></i> Must contain 3 characters at least and not more than 12</p>`
        return false
    }
    
}


 
function validationEmail() {
    
    var pnamregex22 =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = document.getElementById("email").value 
    let validemail = document.getElementById("validemail")

   
    if ( pnamregex22.test(email)==true ) {
        // console.log("match");
        validemail.innerHTML =`<p class="text-success"><i class="fa-solid fa-check"></i> valid value</p>`
        ;
      

        return true;
        
    }else{
        console.log("not match");
         
        validemail.innerHTML=`<p class="text"><i class="fa-solid fa-xmark"></i>In correct email</p>`
      


        return false;
    }
    
    }
