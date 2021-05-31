function checkCreds(){
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName;
    var badgeNumb = document.getElementById("badgeID").value; 

    //Validation of Fullname
    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name, please resubmit";
    }else if(badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number, please resubmit";
    }else{
        console.log("Submission Passes.");
        alert("Access granted! Welcome, " + fullName);
        location.replace("UATSpace.html");
    }

}