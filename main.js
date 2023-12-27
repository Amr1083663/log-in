


function saveData() {
let name = document.getElementById("name").value 

let email = document.getElementById("email").value 
let password = document.getElementById("password").value 
let submit = document.getElementById("submit")

if (validationname()==true &&validationEmail()==true ) {


    let user_records = []

    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

    // The some() method returns true (and stops) if the function returns true for one of the array elements.

    // The some() method returns false if the function returns false for all of the array elements.
    if (user_records.some((v)=>{
        return v.email == email
    }))
    
    {
        // alert("duplicate data")

        repeatedEmail = document.getElementById("repeatedEmail")
        repeatedEmail.classList.replace("d-none","d-flex");
        const myTimeout = setTimeout(dontrepeatEmail, 5000);

    function dontrepeatEmail() {
        repeatedEmail.classList.replace("d-flex","d-none");

    }



    }else{
        user_records.push({
            "name": name,
            "email": email,
            "password" : password
            
        })
        localStorage.setItem("users",JSON.stringify(user_records))


        suuccessdiv.classList.replace("d-none","d-flex");
        const myTimeout = setTimeout(x, 3000);
    
        function x() {
            suuccessdiv.classList.replace("d-flex","d-none");
    
        }
        clearvalidation()
    }

    
    
}else{
    console.log("bye");
}

  

}




function validationname() {
    let validname = document.getElementById("validname")
    var pnamregex =/^[0-9A-Za-z ]{3,12}$/;
    let name = document.getElementById("name").value 

    if(pnamregex.test(name)==true){
        validname.innerHTML=`<p class="text-success"><i class="fa-solid mx-2 fa-check"></i> valid value</p>`
    return true

    }else{
        validname.innerHTML=`<p class="text"><i class="fa-solid fa-xmark "></i> Must contain 3 characters at least and not more than 12</p>`
        return false
    }
    
}


 
function validationEmail() {
    
    var pnamregex22 =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = document.getElementById("email").value 
    let validemail = document.getElementById("validemail")

   
    if ( pnamregex22.test(email)==true ) {
        // console.log("match");
        validemail.innerHTML =`<p class="text-success"><i class="fa-solid mx-2 fa-check"></i> valid value</p>`
        ;
      

        return true;
        
    }else{
        console.log("not match");
         
        validemail.innerHTML=`<p class="text"><i class="fa-solid fa-xmark"></i>In correct email</p>`
      


        return false;
    }
    
    }


   
function clearvalidation() {
    validname.innerHTML= ''
    ;
    validemail.innerHTML ='';



    
}