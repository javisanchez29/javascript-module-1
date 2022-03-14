<<<<<<< HEAD
function userChecker (userName, userType){
    const firstLetter = userName.charAt(0);
    const userlength = userName.length;
    const isValidLength = userlength >= 5 && userlength <= 10;
    const isASuperUser = userType === "admin" || userType === "manager"
        
    if (isASuperUser || ( firstLetter=== userName.charAt(0).toUpperCase() && isValidLength ) ){
        return "Username valid";
    }
    else{
        return "Username invalid"
    }
}

=======
function userChecker (userName, userType){
    const firstLetter = userName.charAt(0);
    const userlength = userName.length;
    const isValidLength = userlength >= 5 && userlength <= 10;
    const isASuperUser = userType === "admin" || userType === "manager"
        
    if (isASuperUser || ( firstLetter=== userName.charAt(0).toUpperCase() && isValidLength ) ){
        return "Username valid";
    }
    else{
        return "Username invalid"
    }
}

>>>>>>> 8d5094142e83ca3e6bde329f49c689f2c4834d59
console.log(userChecker("Javier","admin"));