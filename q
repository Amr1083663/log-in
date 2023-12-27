<body>
    <nav class="navbar bg-body-tertiary p-5">
        <form class="container-fluid justify-content-start">
          <button class="btn btn-outline-light me-2 " onclick="logout()" type="button">Log out</button>
        </form>
      </nav>

    
   <div class="container text-center   d-flex align-items-center justify-content-center ">
    <div class="group m-auto w-75 d-flex  justify-content-center  align-items-center">
        <!-- <h2>Profile page</h2> -->

        <!-- <button  onclick="logout()">Log out</button> -->
        <h3>welcome</h3>
        <h4 id="nameprofile">
            document.write(localStorage.getItem("name"))

        </h4>   
     </div>
</div>
    
  <script src="profile.js"></script>  
</body>